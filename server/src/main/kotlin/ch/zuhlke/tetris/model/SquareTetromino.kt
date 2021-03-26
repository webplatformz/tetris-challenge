package ch.zuhlke.tetris.model

class SquareTetromino(
    override var positions: List<Position> = listOf(
        Position(x = 0, y = -2),
        Position(x = 1, y = -2),
        Position(x = 0, y = -1),
        Position(x = 1, y = -1),
    )
) : Tetromino() {
    override val type = 1

    override fun rotateRight() = Unit
}