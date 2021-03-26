/* tslint:disable */
/* eslint-disable */
// Generated using typescript-generator version 2.29.814 on 2021-03-26 16:21:59.

interface CreateGameRequest extends RequestMessage {
    type: "CREATE_GAME";
}

interface MovePieceRequest extends RequestMessage {
    type: "MOVE_PIECE";
    direction: Direction;
}

interface PositionResponse {
    x: number;
    y: number;
}

interface RequestMessage {
    type: "CREATE_GAME" | "MOVE_PIECE" | "ROTATE_PIECE";
}

interface ResponseMessage {
    type: "BOARD" | "PIECE";
}

interface RotatePieceRequest extends RequestMessage {
    type: "ROTATE_PIECE";
    direction: Direction;
}

interface TetrisBoardResponse extends ResponseMessage {
    type: "BOARD";
    board: number[][];
}

interface TetrisPieceResponse extends ResponseMessage {
    type: "PIECE";
    movingPiece: PositionResponse[];
    pieceType: number;
}

type Direction = "LEFT" | "RIGHT";

type RequestMessageUnion = CreateGameRequest | MovePieceRequest | RotatePieceRequest;

type ResponseMessageUnion = TetrisBoardResponse | TetrisPieceResponse;
