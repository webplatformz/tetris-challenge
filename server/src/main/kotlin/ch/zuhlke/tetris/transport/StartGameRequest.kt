package ch.zuhlke.tetris.transport

import com.fasterxml.jackson.annotation.JsonTypeName

@JsonTypeName("START_GAME")
class StartGameRequest : RequestMessage {
}
