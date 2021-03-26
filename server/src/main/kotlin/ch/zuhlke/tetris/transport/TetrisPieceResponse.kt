package ch.zuhlke.tetris.transport

import com.fasterxml.jackson.annotation.JsonTypeName

@JsonTypeName("PIECE")
data class TetrisPieceResponse(
    val pieceType: Int,
    val movingPiece: List<PositionResponse>,
) : ResponseMessage
