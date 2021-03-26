package ch.zuhlke.tetris.model

class TetrisBoard(
    private val width: Int,
    private val height: Int,
    private val tetrominoProvider: () -> Tetromino
) {

    private var state = Array(height) { IntArray(width) { 0 } }
    private var activeTetromino: Tetromino

    init {
        activeTetromino = tetrominoProvider()
    }

    override fun toString(): String {
        return mergedState()
            .map { it.joinToString(" ") }
            .joinToString("\n")
    }

    fun tick(boardChanged: (() -> Array<IntArray>)? = null, pieceChange: (() -> Tetromino)? = null) {
        if (isTetrominoAtBottom()) {
            removeCompleted()

            activeTetromino = tetrominoProvider()
        }

        activeTetromino.moveDown()
    }

    fun getState(): Array<IntArray> {
        return cloneState()
    }

    private fun removeCompleted() {
        val reducedState = mergedState().filter { !isLineComplete(it) }
        val linesToAdd = state.size - reducedState.size
        val emptyLines = Array(linesToAdd) { IntArray(width) { 0 } }
        state = emptyLines + reducedState
    }

    private fun isLineComplete(line: IntArray): Boolean {
        return line.all { it > 0 }
    }

    private fun isTetrominoAtBottom(): Boolean {
        return activeTetromino.positions.any { it.y >= height - 1 }
    }

    private fun mergedState(): Array<IntArray> {
        val merged = cloneState()
        activeTetromino.positions
            .filter { it.y in 0 until height }
            .forEach { merged[it.y][it.x] = activeTetromino.type }
        return merged
    }

    private fun cloneState(): Array<IntArray> {
        return Array(height) { index -> state[index].copyOf() }
    }
}

