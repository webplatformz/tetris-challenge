package ch.zuhlke.tetris.transport

enum class MessageType {
    BOARD, PIECE
}

interface MessageResponse {
    val type: MessageType
}

data class TetrisBoardResponse(
    val board: List<List<Int>>,
) : MessageResponse {
    override val type: MessageType = MessageType.BOARD
}

data class TetrisPieceResponse(
    val movingPiece: List<PositionResponse>
) : MessageResponse {
    override val type: MessageType = MessageType.PIECE
}

data class PositionResponse(val x: Int, val y: Int)

