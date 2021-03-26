package ch.zuhlke.tetris.transport

import ch.zuhlke.tetris.model.SquareTetromino
import ch.zuhlke.tetris.model.TetrisBoard
import com.fasterxml.jackson.databind.ObjectMapper
import org.jboss.logging.Logger
import java.util.concurrent.ConcurrentHashMap
import javax.websocket.*
import javax.websocket.server.PathParam
import javax.websocket.server.ServerEndpoint

const val CYCLE_TIME: Long = 1000

@ServerEndpoint("/tetris/{username}")
class TetrisWebsocket(val objectMapper: ObjectMapper, val log: Logger) {

    private var isRunning: Boolean = true

    private var sessions: MutableMap<String, Session> = ConcurrentHashMap()
    private val requestHandler = RequestHandler()

    @OnOpen
    fun onOpen(session: Session, @PathParam("username") username: String) {
        sessions[username] = session

        val tetrisBoard = TetrisBoard(10, 10) { SquareTetromino() }
//        while (isRunning) {
            tetrisBoard.tick()
            val state = tetrisBoard.getState()

            val tetrisBoardResponse = TetrisBoardResponse(state)
            sessions[username]?.asyncRemote?.sendText(objectMapper.writeValueAsString(tetrisBoardResponse))
            Thread.sleep(CYCLE_TIME * 10)
//        }
    }

    @OnClose
    fun onClose(session: Session?, @PathParam("username") username: String) {
        sessions.remove(username)
        isRunning = false
    }

    @OnError
    fun onError(session: Session?, @PathParam("username") username: String, throwable: Throwable) {
        sessions.remove(username)
    }

    @OnMessage
    fun onMessage(message: String, @PathParam("username") username: String) {
        // If we don't check for exceptions, they'll be swallowed silently
        try {
            log.info("Received message from $username: $message")
            val request = objectMapper.readValue(message, RequestMessage::class.java)

            val response = requestHandler.handle(request)
            if (response != null) {
                sessions[username]?.asyncRemote?.sendText(objectMapper.writeValueAsString(response))
            }
        } catch (e: Exception) {
            log.error("onMessage failed", e)
        }
    }

}