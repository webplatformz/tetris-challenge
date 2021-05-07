package ch.zuhlke.tetris.transport

import ch.zuhlke.tetris.game.Game
import com.fasterxml.jackson.databind.ObjectMapper
import javax.websocket.Session

class RequestHandler(private val objectMapper: ObjectMapper) {
    fun handle(request: RequestMessage, session: Session, game: Game) {
        if (request is StartGameRequest) {
            if (game.isRunning()) {
                val errorResponse = GameErrorResponse("Game already started")
                session.asyncRemote?.sendText(objectMapper.writeValueAsString(errorResponse))
            } else {
                game.start()
            }
        } else if (request is RotatePieceRequest) {
            if (request.direction == Direction.RIGHT) {
                game.rotateRight(session)
            }
        } else if (request is MovePieceRequest) {
            if (request.direction == Direction.RIGHT) {
                game.moveRight(session)
            } else {
                game.moveLeft(session)
            }
        }
    }
}
