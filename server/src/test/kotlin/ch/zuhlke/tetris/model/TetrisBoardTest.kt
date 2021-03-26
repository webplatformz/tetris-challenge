package ch.zuhlke.tetris.model

import org.junit.jupiter.api.Assertions.*
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

    @Test
    fun `tick calls pieceChange with updated piece when piece has not reached the bottom`() {
        lateinit var actualTetromino: Tetromino
        val board = TetrisBoard(
                width = 2,
                height = 2,
                pieceChange = { tetromino -> actualTetromino = tetromino }
        ) { SquareTetromino() }

        board.tick()

        val expected = SquareTetromino().moveDown()
        assertEquals(expected, actualTetromino)
    }

    @Test
    fun `tick calls boardChange with updated board when a piece cannot move any further`() {
        val actualBoards: MutableList<Array<IntArray>> = mutableListOf()
        val board = TetrisBoard(
            width = 2,
            height = 2,
            boardChanged = { actualBoards.add(it) }
        ) { SquareTetromino() }

        assertEquals(actualBoards.size, 1)
        board.tick()
        assertEquals(actualBoards.size, 1)
        board.tick()
        assertEquals(actualBoards.size, 1)
        board.tick()
        assertEquals(actualBoards.size, 2)
    }

    @Test
    fun `should call boardChange with initial board`() {
        var actualBoard: Array<IntArray>? = null
        TetrisBoard(
                width = 2,
                height = 2,
                boardChanged = { actualBoard = it }
        ) { SquareTetromino() }

        assertNotNull(actualBoard)
    }
}