package ch.zuhlke.tetris.game

import ch.zuhlke.tetris.model.SquareTetromino
import ch.zuhlke.tetris.model.StraightTetromino
import ch.zuhlke.tetris.model.TetrisBoard
import ch.zuhlke.tetris.model.Tetromino
import ch.zuhlke.tetris.transport.GameStartedResponse
import com.fasterxml.jackson.databind.ObjectMapper
import java.util.*
import javax.websocket.Session
import kotlin.concurrent.thread

const val CYCLE_TIME: Long = 500
const val BOARD_WIDTH = 10
const val BOARD_HEIGHT = 20

class Game(private val objectMapper: ObjectMapper) {
    val id: String = UUID.randomUUID().toString()
    private var isRunning: Boolean = false
    private val boardsBySession = mutableMapOf<Session, TetrisBoard>()

    fun isRunning(): Boolean {
        return this.isRunning
    }

    fun start() {
        isRunning = true
        notifyPlayersAboutStart()
        thread {
            while (isRunning) {
                boardsBySession.values.forEach { it.tick() }
                Thread.sleep(CYCLE_TIME)
            }
        }
    }

    private fun notifyPlayersAboutStart() {
        // this is f** disgusting, obviously
        val startResponse = GameStartedResponse("Game started")
        boardsBySession.keys.forEach { it.asyncRemote?.sendText(objectMapper.writeValueAsString(startResponse)) }
    }

    fun rotateRight(session: Session) {
        boardsBySession[session]?.rotateRight()
    }

    fun addPlayer(
        session: Session,
        onBoardChanged: (state: Array<IntArray>) -> Unit,
        onPieceChanged: (Tetromino) -> Unit
    ) {
        boardsBySession[session] = TetrisBoard(
            width = BOARD_WIDTH,
            height = BOARD_HEIGHT,
            boardChanged = onBoardChanged,
            pieceChange = onPieceChanged
        ) {
            if ((0..1).random() == 0) {
                SquareTetromino().moveRight((BOARD_WIDTH / 2) - 1)
            } else {
                StraightTetromino().moveRight((BOARD_WIDTH / 2) - 2)
            }
        }
    }
}
