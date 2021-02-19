package ch.zuhlke.tetris.transport

import com.fasterxml.jackson.annotation.JsonSubTypes
import com.fasterxml.jackson.annotation.JsonTypeInfo
import com.fasterxml.jackson.annotation.JsonTypeName

@JsonTypeInfo(
        use = JsonTypeInfo.Id.NAME,
        include = JsonTypeInfo.As.PROPERTY,
        property = "type")
@JsonSubTypes(
        JsonSubTypes.Type(TetrisBoardResponse::class),
        JsonSubTypes.Type(TetrisPieceResponse::class))
interface MessageResponse {
}

@JsonTypeName("BOARD")
data class TetrisBoardResponse(
        val board: List<List<Int>>,
) : MessageResponse {
}

@JsonTypeName("PIECE")
data class TetrisPieceResponse(
        val movingPiece: List<PositionResponse>
) : MessageResponse {
}

data class PositionResponse(val x: Int, val y: Int)

