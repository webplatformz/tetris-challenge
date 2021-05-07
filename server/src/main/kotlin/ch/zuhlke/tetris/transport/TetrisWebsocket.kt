package ch.zuhlke.tetris.transport

import ch.zuhlke.tetris.game.GameStore
import com.fasterxml.jackson.databind.ObjectMapper
import org.jboss.logging.Logger
import java.util.concurrent.ConcurrentHashMap
import javax.websocket.*
import javax.websocket.server.PathParam
import javax.websocket.server.ServerEndpoint


@ServerEndpoint("/tetris/{gameId}/{username}")
class TetrisWebsocket(
    private val objectMapper: ObjectMapper,
    private val log: Logger,
    private val gameStore: GameStore
) {

    private var sessions: MutableMap<String, Session> = ConcurrentHashMap()
    private val requestHandler = RequestHandler(objectMapper)

    @OnOpen
    fun onOpen(session: Session, @PathParam("gameId") gameId: String, @PathParam("username") username: String) {
        sessions[username] = session
        val game = gameStore.getGame(gameId)
        if (game != null) {
            game.addPlayer(
                session = session,
                onBoardChanged = {
                    val tetrisBoardResponse = TetrisBoardResponse(it)
                    session.asyncRemote?.sendText(objectMapper.writeValueAsString(tetrisBoardResponse))
                },
                onPieceChanged = {
                    val mappedPositions: List<PositionResponse> = it.positions.map { PositionResponse(it.x, it.y) }
                    val pieceResponse = TetrisPieceResponse(mappedPositions, it.type)
                    session.asyncRemote?.sendText(objectMapper.writeValueAsString(pieceResponse))
                })
        } else {
            session.close(CloseReason({ 1008 }, "YOU STOOPID"))
        }
    }

    @OnClose
    fun onClose(session: Session?, @PathParam("username") username: String) {
        sessions.remove(username)
    }

    @OnError
    fun onError(session: Session?, @PathParam("username") username: String, throwable: Throwable) {
        sessions.remove(username)
    }

    @OnMessage
    fun onMessage(message: String, @PathParam("gameId") gameId: String, @PathParam("username") username: String) {
        // If we don't check for exceptions, they'll be swallowed silently
        try {
            log.info("Received message from $username: $message")
            val request = objectMapper.readValue(message, RequestMessage::class.java)

            requestHandler.handle(request, sessions[username]!!, gameStore.getGame(gameId)!!)
        } catch (e: Exception) {
            log.error("onMessage failed", e)
        }
    }

}
