/* tslint:disable */
/* eslint-disable */
// Generated using typescript-generator version 2.29.814 on 2021-03-26 10:38:23.

interface CreateGameRequest extends RequestMessage {
    type: "CREATE_GAME";
}

interface PositionResponse {
    x: number;
    y: number;
}

interface RequestMessage {
    type: "CREATE_GAME";
}

interface ResponseMessage {
    type: "BOARD" | "PIECE";
}

interface TetrisBoardResponse extends ResponseMessage {
    type: "BOARD";
    board: number[][];
}

interface TetrisPieceResponse extends ResponseMessage {
    type: "PIECE";
    movingPiece: PositionResponse[];
}

type RequestMessageUnion = CreateGameRequest;

type ResponseMessageUnion = TetrisBoardResponse | TetrisPieceResponse;
