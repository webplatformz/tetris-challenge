package ch.zuhlke.tetris.model

import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test

internal class TetrominoTest {

    @Test
    fun moveRight() {
        val squareTetromino = SquareTetromino()

        squareTetromino.moveRight(1)

        val actualPositions = squareTetromino.positions
        assertEquals(Position(1, -2), actualPositions[0])
        assertEquals(Position(2, -2), actualPositions[1])
        assertEquals(Position(1, -1), actualPositions[2])
        assertEquals(Position(2, -1), actualPositions[3])
    }
}