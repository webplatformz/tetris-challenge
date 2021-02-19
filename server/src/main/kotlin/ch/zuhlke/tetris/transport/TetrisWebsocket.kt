package ch.zuhlke.tetris.transport

import java.util.concurrent.ConcurrentHashMap
import javax.websocket.OnClose
import javax.websocket.OnError
import javax.websocket.OnOpen
import javax.websocket.Session
import javax.websocket.server.PathParam
import javax.websocket.server.ServerEndpoint

@ServerEndpoint("/tetris/{username}")
class TetrisWebsocket {

    var sessions: MutableMap<String, Session> = ConcurrentHashMap()

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

    fun onMessage(message: String, @PathParam("username") username: String) {
        println("Received message from $username: $message")
    }

}