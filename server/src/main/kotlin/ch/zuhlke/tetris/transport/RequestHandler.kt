package ch.zuhlke.tetris.transport

import ch.zuhlke.tetris.game.Game
import com.fasterxml.jackson.databind.ObjectMapper
import javax.websocket.Session

class RequestHandler(private val objectMapper: ObjectMapper) {
    fun handle(request: RequestMessage, session: Session?, game: Game) {
        if (request is StartGameRequest) {
            game.start({
                val tetrisBoardResponse = TetrisBoardResponse(it)
                session?.asyncRemote?.sendText(objectMapper.writeValueAsString(tetrisBoardResponse))
            }) {
                val mappedPositions: List<PositionResponse> = it.positions.map { PositionResponse(it.x, it.y) }
                val pieceResponse = TetrisPieceResponse(mappedPositions, it.type)
                session?.asyncRemote?.sendText(objectMapper.writeValueAsString(pieceResponse))
            }
        } else if (request is RotatePieceRequest) {
            if (request.direction == Direction.RIGHT) {
                game.rotateRight()
            }
        }
    }
}
