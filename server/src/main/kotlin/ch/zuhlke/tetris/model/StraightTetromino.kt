package ch.zuhlke.tetris.model

enum class RotationState {
    TOP,
    RIGHT,
    BOTTOM,
    LEFT,
}

class StraightTetromino : Tetromino() {
    override val type = 2

    private var state = RotationState.TOP

    override fun rotateRight() {
        var xOffset = 0

        when (state) {
            RotationState.TOP -> {
                xOffset = 1
                state = RotationState.RIGHT
            }
            RotationState.RIGHT -> {
                state = RotationState.BOTTOM
            }
            RotationState.BOTTOM -> {
                xOffset = -1
                state = RotationState.LEFT
            }
            RotationState.LEFT -> {
                state = RotationState.TOP
            }
        }

        this.positions = this.positions.map {
            Position(x = it.y + xOffset, y = it.x)
        }
    }

    override var positions: List<Position> = listOf(
            Position(x = 0, y = -1),
            Position(x = 1, y = -1),
            Position(x = 2, y = -1),
            Position(x = 3, y = -1),
    )
}