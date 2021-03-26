let webSocket: WebSocket;

export function initializeWebSocket(name: string): Promise<void> {
  return new Promise((resolve) => {
    webSocket = new WebSocket(`ws://localhost:8080/tetris/${name}`);
    webSocket.onopen = () => {
      console.log('WebSocket opened');
      resolve();
    };
    webSocket.onerror = console.error;
    webSocket.onclose = (closeEvent) => console.log('WebSocket closed', closeEvent);
  });
}

export function onMessage(cb: (response: ResponseMessageUnion) => void): void {
  webSocket.onmessage = ({data}) => cb(JSON.parse(data) as ResponseMessageUnion);
}

export function startGame(): void {
  send({type: 'CREATE_GAME'});
}

export function movePiece(direction: Direction) {
  send({type: 'MOVE_PIECE', direction});
}

export function rotatePiece(direction: Direction) {
  send({type: 'ROTATE_PIECE', direction});
}

function send(message: RequestMessageUnion): void {
  webSocket.send(JSON.stringify(message));
}
