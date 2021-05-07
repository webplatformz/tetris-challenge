package ch.zuhlke.tetris.game

import ch.zuhlke.tetris.model.SquareTetromino
import ch.zuhlke.tetris.model.StraightTetromino
import ch.zuhlke.tetris.model.TetrisBoard
import ch.zuhlke.tetris.model.Tetromino
import java.util.*
import javax.websocket.Session
import kotlin.concurrent.thread

const val CYCLE_TIME: Long = 500
const val BOARD_WIDTH = 10
const val BOARD_HEIGHT = 20

class Game {
    val id: String = UUID.randomUUID().toString()
    private var isRunning: Boolean = true

    private var tetrominoIndex = 0

    private lateinit var tetrisBoard: TetrisBoard

    fun start(onBoardChanged: (state: Array<IntArray>) -> Unit, onPieceChanged: (Tetromino) -> Unit) {
        tetrisBoard = TetrisBoard(
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

        thread {
            while (isRunning) {
                tetrisBoard.tick()
                Thread.sleep(CYCLE_TIME)
            }
        }
    }

    fun rotateRight() {
        tetrisBoard.rotateRight()
    }

    fun addPlayer(session: Session) {
        TODO("Not yet implemented")
    }
}
