package ch.zuhlke.tetris.transport

import com.fasterxml.jackson.databind.ObjectMapper
import org.jboss.logging.Logger
import java.util.concurrent.ConcurrentHashMap
import javax.websocket.*
import javax.websocket.server.PathParam
import javax.websocket.server.ServerEndpoint


@ServerEndpoint("/tetris/{username}")
class TetrisWebsocket(val objectMapper: ObjectMapper, val log: Logger) {

    private var sessions: MutableMap<String, Session> = ConcurrentHashMap()
    private val requestHandler = RequestHandler(objectMapper)

    @OnOpen
    fun onOpen(session: Session, @PathParam("username") username: String) {
        sessions[username] = session
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
    fun onMessage(message: String, @PathParam("username") username: String) {
        // If we don't check for exceptions, they'll be swallowed silently
        try {
            log.info("Received message from $username: $message")
            val request = objectMapper.readValue(message, RequestMessage::class.java)

            requestHandler.handle(request, sessions[username])
        } catch (e: Exception) {
            log.error("onMessage failed", e)
        }
    }

}