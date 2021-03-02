package ch.zuhlke.tetris.transport

import com.fasterxml.jackson.annotation.JsonTypeName

@JsonTypeName("BOARD")
data class TetrisBoardResponse(
    val board: List<List<Int>>,
) : MessageResponse

