package ch.zuhlke.tetris.model

class StraightTetromino(
    override var positions: List<Position> = listOf(
        Position(x = 0, y = -1),
        Position(x = 1, y = -1),
        Position(x = 2, y = -1),
        Position(x = 3, y = -1),
    )
) : Tetromino() {
    override val type = 2
}