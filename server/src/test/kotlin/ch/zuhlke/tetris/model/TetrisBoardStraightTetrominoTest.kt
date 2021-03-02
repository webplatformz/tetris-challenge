package ch.zuhlke.tetris.model

import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test

class TetrisBoardStraightTetrominoTest {

    @Test
    fun `set straight tetromino`() {
        val board = TetrisBoard(2, 4) { StraightTetromino() }

        board.tick()

        assertEquals(
            """
            |2 0
            |0 0
            |0 0
            |0 0
            """.trimMargin(),
            board.toString()
        )

        board.tick()

        assertEquals(
            """
            |2 0
            |2 0
            |0 0
            |0 0
            """.trimMargin(),
            board.toString()
        )
    }
}