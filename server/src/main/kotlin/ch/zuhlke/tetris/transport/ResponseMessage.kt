package ch.zuhlke.tetris.transport

import com.fasterxml.jackson.annotation.JsonSubTypes
import com.fasterxml.jackson.annotation.JsonTypeInfo

@JsonTypeInfo(
        use = JsonTypeInfo.Id.NAME,
        include = JsonTypeInfo.As.PROPERTY,
        property = "type")
@JsonSubTypes(
    JsonSubTypes.Type(TetrisBoardResponse::class),
    JsonSubTypes.Type(TetrisPieceResponse::class)
)
interface ResponseMessage {
}