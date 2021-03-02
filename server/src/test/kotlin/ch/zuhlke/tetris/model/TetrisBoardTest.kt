package ch.zuhlke.tetris.model

import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test

class TetrisBoardTest {

    @Test
    fun `create board`() {

        val board = TetrisBoard(3, 2) { SquareTetromino() }

        assertEquals(
            """
            |0 0 0
            |0 0 0
            """.trimMargin(),
            board.toString()
        )
    }

    @Test
    fun `set square tetromino`() {
        val board = TetrisBoard(2, 2) { SquareTetromino() }

        board.tick()

        assertEquals(
            """
            |1 1
            |0 0
            """.trimMargin(),
            board.toString()
        )
    }

    @Test
    fun `set square tetromino to bottom`() {
        val board = TetrisBoard(2, 3) { SquareTetromino() }

        board.tick()
        board.tick()
        board.tick()

        assertEquals(
            """
            |0 0
            |1 1
            |1 1
            """.trimMargin(),
            board.toString()
        )
    }

    @Test
    fun `element removed after hitting bottom`() {
        val board = TetrisBoard(2, 2) { SquareTetromino() }

        board.tick()
        board.tick()
        board.tick()

        assertEquals(
            """
            |1 1
            |0 0
            """.trimMargin(),
            board.toString()
        )
    }
}