/* tslint:disable */
/* eslint-disable */
// Generated using typescript-generator version 2.29.814 on 2021-03-02 11:32:16.

interface CreateGameRequest extends RequestMessage {
    type: "CREATE_GAME";
}

interface MessageResponse {
    type: "BOARD" | "PIECE";
}

interface PositionResponse {
    x: number;
    y: number;
}

interface RequestMessage {
    type: "CREATE_GAME";
}

interface TetrisBoardResponse extends MessageResponse {
    type: "BOARD";
    board: number[][];
}

interface TetrisPieceResponse extends MessageResponse {
    type: "PIECE";
    movingPiece: PositionResponse[];
}

type MessageResponseUnion = TetrisBoardResponse | TetrisPieceResponse;

type RequestMessageUnion = CreateGameRequest;
