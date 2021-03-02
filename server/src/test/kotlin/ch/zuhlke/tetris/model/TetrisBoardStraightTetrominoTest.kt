package ch.zuhlke.tetris.model

import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test

class TetrisBoardStraightTetrominoTest {

    @Test
    fun `set straight tetromino`() {
        val board = TetrisBoard(2, 4) { SquareTetromino() }

        board.tick()

        assertEquals(
            """
            |1 0
            |0 0
            |0 0
            |0 0
            """.trimMargin(),
            board.toString()
        )

        board.tick()

        assertEquals(
            """
            |1 0
            |1 0
            |0 0
            |0 0
            |0 0
            """.trimMargin(),
            board.toString()
        )
    }
}