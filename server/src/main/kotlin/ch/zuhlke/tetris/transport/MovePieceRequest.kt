package ch.zuhlke.tetris.transport

import com.fasterxml.jackson.annotation.JsonTypeName

@JsonTypeName("MOVE_PIECE")
data class MovePieceRequest(
    val direction: Direction
) : RequestMessage
