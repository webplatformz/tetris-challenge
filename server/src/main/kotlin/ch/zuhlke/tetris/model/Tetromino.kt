package ch.zuhlke.tetris.model

abstract class Tetromino {
    abstract var positions: List<Position>

    abstract val type: Int

    fun moveDown() {
        this.positions = this.positions.map { it.copy(y = it.y + 1) }
    }
}