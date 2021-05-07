/* tslint:disable */
/* eslint-disable */
// Generated using typescript-generator version 2.29.814 on 2021-05-07 12:29:20.

interface MovePieceRequest extends RequestMessage {
    type: "MOVE_PIECE";
    direction: Direction;
}

interface PositionResponse {
    x: number;
    y: number;
}

interface RequestMessage {
    type: "MOVE_PIECE" | "ROTATE_PIECE" | "START_GAME";
}

interface ResponseMessage {
    type: "BOARD" | "PIECE";
}

interface RotatePieceRequest extends RequestMessage {
    type: "ROTATE_PIECE";
    direction: Direction;
}

interface StartGameRequest extends RequestMessage {
    type: "START_GAME";
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

type RequestMessageUnion = StartGameRequest | MovePieceRequest | RotatePieceRequest;

type ResponseMessageUnion = TetrisBoardResponse | TetrisPieceResponse;
