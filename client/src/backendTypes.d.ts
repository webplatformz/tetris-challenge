/* tslint:disable */
/* eslint-disable */
// Generated using typescript-generator version 2.29.814 on 2021-02-19 16:48:55.

interface MessageResponse {
    type: MessageType;
}

interface PositionResponse {
    x: number;
    y: number;
}

interface TetrisBoardResponse extends MessageResponse {
    board: number[][];
}

interface TetrisPieceResponse extends MessageResponse {
    movingPiece: PositionResponse[];
}

type MessageType = "BOARD" | "PIECE";
