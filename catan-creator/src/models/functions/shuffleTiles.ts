/**
 * Suffles the tiles for the board.
 * 
 * @param array - Array of tiles 
 * @returns shufflesBoardTiles - The tiles in a random order. 
 */
export function shuffleTiles<T>(array: T[]): T[] {
  const shuffledBoardTiles = [...array]
  for (let i = shuffledBoardTiles.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tile = shuffledBoardTiles[i];
    shuffledBoardTiles[i] = shuffledBoardTiles[j];
    shuffledBoardTiles[j] = tile;
  }
  return shuffledBoardTiles
}