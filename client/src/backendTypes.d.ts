/* tslint:disable */
/* eslint-disable */
// Generated using typescript-generator version 2.29.814 on 2021-02-19 17:34:54.

interface MessageResponse {
    type: "BOARD" | "PIECE";
}

interface PositionResponse {
    x: number;
    y: number;
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
