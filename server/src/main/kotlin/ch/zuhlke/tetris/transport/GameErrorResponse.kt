package ch.zuhlke.tetris.transport

import com.fasterxml.jackson.annotation.JsonTypeName

@JsonTypeName("GAME_ERROR")
data class GameErrorResponse (val message: String) : ResponseMessage