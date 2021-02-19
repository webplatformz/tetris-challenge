package ch.zuhlke.tetris.model


// tick -> mutation
// board -> blocks


class TetrisBoard(width: Int, height: Int) {

    private val state = Array(height) { IntArray(width) { 0 } }

    override fun toString(): String {
        return state
            .map { it.joinToString(" ") }
            .joinToString(System.lineSeparator())
    }
}