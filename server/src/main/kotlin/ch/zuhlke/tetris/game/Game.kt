package ch.zuhlke.tetris.game

import ch.zuhlke.tetris.model.SquareTetromino
import ch.zuhlke.tetris.model.TetrisBoard

const val CYCLE_TIME: Long = 1000

class Game {
    private var isRunning: Boolean = true

    fun start(listener: (state: Array<IntArray>) -> Unit) {
        val tetrisBoard = TetrisBoard(10, 10) { SquareTetromino() }
        while (isRunning) {
            tetrisBoard.tick()
            val state = tetrisBoard.getState()
            listener(state)
            Thread.sleep(CYCLE_TIME)
        }
    }
}