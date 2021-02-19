package ch.zuhlke.tetris.model

import org.junit.jupiter.api.Assertions.*
import org.junit.jupiter.api.Test

class TetrisBoardTest {

    @Test
    fun `create board`() {

        val board = TetrisBoard(3, 2);

        assertEquals(
            """
            |0 0 0
            |0 0 0
            """.trimMargin(),
            board.toString()
        );
    }
}