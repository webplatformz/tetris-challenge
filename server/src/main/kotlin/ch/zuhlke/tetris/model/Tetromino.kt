package ch.zuhlke.tetris.model

abstract class Tetromino {
    abstract var positions: List<Position>

    abstract val type: Int

    fun moveDown(): Tetromino {
        this.positions = this.positions.map { it.copy(y = it.y + 1) }
        return this
    }

    fun moveRight(steps: Int = 1): Tetromino {
        this.positions = this.positions.map { it.copy(x = it.x + steps) }
        return this
    }

    fun moveLeft(steps: Int = 1): Tetromino {
        return moveRight(-steps)
    }

    abstract fun rotateRight()

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false

        other as Tetromino

        if (positions != other.positions) return false
        if (type != other.type) return false

        return true
    }

    override fun hashCode(): Int {
        var result = positions.hashCode()
        result = 31 * result + type
        return result
    }



}