package ch.zuhlke.tetris.model

class SquareTetromino(
    var positions: List<Position> = listOf(
        Position(x = 0, y = -2),
        Position(x = 1, y = -2),
        Position(x = 0, y = -1),
        Position(x = 1, y = -1),
    )
) {
    val type = 1

    fun moveDown() {
        this.positions = this.positions.map { it.copy(y = it.y + 1) }
    }
}