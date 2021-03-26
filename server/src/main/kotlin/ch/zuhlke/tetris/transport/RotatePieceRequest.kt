package ch.zuhlke.tetris.transport

import com.fasterxml.jackson.annotation.JsonTypeName

@JsonTypeName("ROTATE_PIECE")
data class RotatePieceRequest(
    val direction: Direction
) : RequestMessage
