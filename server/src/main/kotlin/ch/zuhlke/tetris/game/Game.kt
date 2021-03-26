package ch.zuhlke.tetris.game

import ch.zuhlke.tetris.model.SquareTetromino
import ch.zuhlke.tetris.model.StraightTetromino
import ch.zuhlke.tetris.model.TetrisBoard
import ch.zuhlke.tetris.model.Tetromino

const val CYCLE_TIME: Long = 500
const val BOARD_WIDTH = 10
const val BOARD_HEIGHT = 20

class Game {
    private var isRunning: Boolean = true

    private var tetrominoIndex = 0

    fun start(onBoardChanged: (state: Array<IntArray>) -> Unit, onPieceChanged: (Tetromino) -> Unit) {
        val tetrisBoard = TetrisBoard(
            width = BOARD_WIDTH,
            height = BOARD_HEIGHT,
            boardChanged = onBoardChanged,
            pieceChange = onPieceChanged
        ) {
            if (tetrominoIndex++ % 2 == 0) {
                SquareTetromino().moveRight((BOARD_WIDTH / 2) - 1)
            } else {
                StraightTetromino().moveRight((BOARD_WIDTH / 2) - 2)
            }
        }
        while (isRunning) {
            tetrisBoard.tick()
            Thread.sleep(CYCLE_TIME)
        }
    }
}
