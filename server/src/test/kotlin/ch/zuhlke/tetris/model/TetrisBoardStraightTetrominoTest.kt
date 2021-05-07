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

    @Test
    fun `rotate right`() {
        val straightTetromino = StraightTetromino()
            .moveDown()
            .moveDown()

        straightTetromino.rotateRight()

        /**
        initial positions
        Position(0, 1)
        Position(1, 1)
        Position(2, 1),
        Position(3, 1),
         */

        val actualPositions = straightTetromino.positions
        assertEquals(Position(2, 0), actualPositions[0])
        assertEquals(Position(2, 1), actualPositions[1])
        assertEquals(Position(2, 2), actualPositions[2])
        assertEquals(Position(2, 3), actualPositions[3])

        straightTetromino.rotateRight()

        val actualPositions2 = straightTetromino.positions
        assertEquals(Position(0, 2), actualPositions2[0])
        assertEquals(Position(1, 2), actualPositions2[1])
        assertEquals(Position(2, 2), actualPositions2[2])
        assertEquals(Position(3, 2), actualPositions2[3])

        straightTetromino.rotateRight()

        val actualPositionsLeft = straightTetromino.positions
        assertEquals(Position(1, 0), actualPositionsLeft[0])
        assertEquals(Position(1, 1), actualPositionsLeft[1])
        assertEquals(Position(1, 2), actualPositionsLeft[2])
        assertEquals(Position(1, 3), actualPositionsLeft[3])

        straightTetromino.rotateRight()

        val actualPositionsTop = straightTetromino.positions
        assertEquals(Position(0, 1), actualPositionsTop[0])
        assertEquals(Position(1, 1), actualPositionsTop[1])
        assertEquals(Position(2, 1), actualPositionsTop[2])
        assertEquals(Position(3, 1), actualPositionsTop[3])
    }
}
