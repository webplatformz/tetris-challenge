package ch.zuhlke.tetris.transport

import ch.zuhlke.tetris.game.Game
import ch.zuhlke.tetris.game.GameStore
import com.fasterxml.jackson.databind.ObjectMapper
import javax.ws.rs.GET
import javax.ws.rs.POST
import javax.ws.rs.Path
import javax.ws.rs.Produces
import javax.ws.rs.core.MediaType

@Path("/game")
class GameResource(
    private val gameStore: GameStore,
    private val objectMapper: ObjectMapper
) {

    @POST
    @Produces(MediaType.TEXT_PLAIN)
    fun createGame(): String {
        val game = Game(objectMapper)
        gameStore.addGame(game)
        return game.id
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    fun getAllOpenGameIds(): List<String> {
        return gameStore.getAll()
            .filter { !it.isRunning() }
            .map { it.id }
    }
}
