package ch.zuhlke.tetris.model

private val noop: (Any) -> Unit = { _ -> }

class TetrisBoard(
    private val width: Int,
    private val height: Int,
    private val boardChanged: ((Array<IntArray>) -> Unit) = noop,
    private val pieceChange: ((Tetromino) -> Unit) = noop,
    private val tetrominoProvider: () -> Tetromino,
) {

    private var state = Array(height) { IntArray(width) { 0 } }
    private var activeTetromino: Tetromino

    init {
        activeTetromino = tetrominoProvider()
        boardChanged(state)
    }

    override fun toString(): String {
        return mergedState()
            .map { it.joinToString(" ") }
            .joinToString("\n")
    }

    fun tick() {
        if (isTetrominoBlocked()) {
            removeCompleted()

            activeTetromino = tetrominoProvider()
            boardChanged(state)
        }

        activeTetromino.moveDown()

        pieceChange(activeTetromino)
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

    private fun isTetrominoBlocked(): Boolean {
        return activeTetromino.positions
            .filter { it.y in 0 until height }
            .any { it.isAtBottom() || it.isBlockedByOther() }
    }

    private fun Position.isBlockedByOther() = state[y + 1][x] != 0
    private fun Position.isAtBottom() = y >= height - 1

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

