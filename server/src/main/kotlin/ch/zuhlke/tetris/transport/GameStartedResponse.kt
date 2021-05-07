package ch.zuhlke.tetris.transport

import com.fasterxml.jackson.annotation.JsonTypeName

@JsonTypeName("GAME_STARTED")
data class GameStartedResponse(private val message : String) : ResponseMessage
