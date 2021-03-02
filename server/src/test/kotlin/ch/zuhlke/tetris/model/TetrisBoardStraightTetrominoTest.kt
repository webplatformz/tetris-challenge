package ch.zuhlke.tetris.model

import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test

class TetrisBoardStraightTetrominoTest {

    @Test
    fun `straight tetromino until it hits bottom`() {
        val board = TetrisBoard(4, 2) { StraightTetromino() }

        board.tick()

        assertEquals(
            """
            |2 2 2 2
            |0 0 0 0
            """.trimMargin(),
            board.toString()
        )

        board.tick()

        assertEquals(
            """
            |0 0 0 0
            |2 2 2 2
            """.trimMargin(),
            board.toString()
        )

        board.tick()

        assertEquals(
            """
            |2 2 2 2
            |0 0 0 0
            """.trimMargin(),
            board.toString()
        )
    }
}