package ch.zuhlke.tetris.game

import ch.zuhlke.tetris.model.SquareTetromino
import ch.zuhlke.tetris.model.TetrisBoard
import ch.zuhlke.tetris.model.Tetromino

const val CYCLE_TIME: Long = 1000

class Game {
    private var isRunning: Boolean = true

    fun start(onBoardChanged: (state: Array<IntArray>) -> Unit, onPieceChanged: (Tetromino) -> Unit) {
        val tetrisBoard = TetrisBoard(
            width = 10,
            height = 20,
            boardChanged = onBoardChanged,
            pieceChange = onPieceChanged
        ) { SquareTetromino() }
        while (isRunning) {
            tetrisBoard.tick()
            Thread.sleep(CYCLE_TIME)
        }
    }
}