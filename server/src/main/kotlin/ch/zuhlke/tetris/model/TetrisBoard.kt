package ch.zuhlke.tetris.model


// tick -> mutation
// board -> blocks


class TetrisBoard(width: Int, height: Int, tetrominoProvider: () -> Tetromino) {

    private val state = Array(height) { IntArray(width) { 0 } }
    private var tetromino: Tetromino

    init {
        tetromino = tetrominoProvider()
    }

    override fun toString(): String {
        return state
            .map { it.joinToString(" ") }
            .joinToString(System.lineSeparator())
    }

    fun tick() {
    }
}
