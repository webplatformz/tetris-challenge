package ch.zuhlke.tetris.transport

import com.fasterxml.jackson.annotation.JsonTypeName

@JsonTypeName("PIECE")
data class TetrisPieceResponse(
    val movingPiece: List<PositionResponse>,
    val pieceType: Int
) : ResponseMessage
