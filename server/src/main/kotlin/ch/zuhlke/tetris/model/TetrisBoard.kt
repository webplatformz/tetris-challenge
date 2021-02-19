package ch.zuhlke.tetris.model

class TetrisBoard(
    width: Int,
    height: Int,
    tetrominoProvider: () -> Tetromino
) {

    private val state = Array(height) { IntArray(width) { 0 } }
    private var activeTetromino: Tetromino

    init {
        activeTetromino = tetrominoProvider()
    }

    override fun toString(): String {
        return merge()
            .map { it.joinToString(" ") }
            .joinToString("\n")
    }

    fun tick() {
        activeTetromino.moveDown()
    }

    private fun merge(): Array<IntArray> {
        val merged = state.copyOf()
        activeTetromino.positions
            .filter { it.y >= 0 }
            .forEach { merged[it.y][it.x] = activeTetromino.type }
        return merged
    }
}

