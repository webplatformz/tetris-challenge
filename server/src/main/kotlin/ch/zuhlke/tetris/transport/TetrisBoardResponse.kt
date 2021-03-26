package ch.zuhlke.tetris.transport

import com.fasterxml.jackson.annotation.JsonTypeName

@JsonTypeName("BOARD")
data class TetrisBoardResponse(
    val board: Array<IntArray>,
) : MessageResponse {

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false

        other as TetrisBoardResponse

        if (!board.contentDeepEquals(other.board)) return false

        return true
    }

    override fun hashCode(): Int {
        return board.contentDeepHashCode()
    }
}

