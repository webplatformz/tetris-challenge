export async function requestGames(): Promise<string[]> {
  const response = await fetch('http://localhost:8080/game', {method: 'GET'});
  return response.json();
}

export async function createNewGame(): Promise<void> {
  await fetch('http://localhost:8080/game', { method: 'POST' });
}
