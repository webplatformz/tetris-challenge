package ch.zuhlke.tetris.model

class StraightTetromino(
    override var positions: List<Position> = listOf(
        Position(x = 0, y = -4),
        Position(x = 0, y = -3),
        Position(x = 0, y = -2),
        Position(x = 0, y = -1),
    )
) : Tetromino() {
    override val type = 2
}