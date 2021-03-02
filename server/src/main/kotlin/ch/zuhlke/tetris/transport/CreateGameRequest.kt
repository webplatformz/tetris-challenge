package ch.zuhlke.tetris.transport

import com.fasterxml.jackson.annotation.JsonTypeName

@JsonTypeName("CREATE_GAME")
class CreateGameRequest : RequestMessage {
}