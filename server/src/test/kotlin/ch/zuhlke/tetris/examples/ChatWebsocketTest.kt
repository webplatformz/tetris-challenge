package ch.zuhlke.tetris.examples

import io.quarkus.test.common.http.TestHTTPResource
import io.quarkus.test.junit.QuarkusTest
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test
import java.net.URI
import java.util.*
import java.util.concurrent.LinkedBlockingDeque
import java.util.concurrent.TimeUnit
import javax.websocket.*


/**
 * Example to be used for Tetris Websocket test.
 */
@QuarkusTest
class ChatWebsocketTest {

    @TestHTTPResource("chat/username")
    var echoUri: URI? = null

    @Test
    fun `broadcast works`() {
        val message = LinkedBlockingDeque<String>()
        val session: Session = ContainerProvider.getWebSocketContainer().connectToServer(object : Endpoint() {
            override fun onOpen(session: Session, endpointConfig: EndpointConfig?) {
                session.addMessageHandler(Handler(message))

                session.asyncRemote.sendText("hello")
            }
        }, ClientEndpointConfig.Builder.create().build(), echoUri)

        session.use {
            assertEquals(">> username: hello", message.poll(5, TimeUnit.SECONDS))
        }
    }
}

class Handler(private val messages: Queue<String>) : MessageHandler.Whole<String?> {
    override fun onMessage(message: String?) {
        messages.add(message)
    }
}