import { HexagonTile } from "../components/hexagonTile";
/**
 * Suffles the tiles for the board.
 * 
 * @param array - Array of tiles 
 * @returns The 
 */
export function shuffleTiles(array: (typeof HexagonTile)[]) {
  const shuffledBoardTiles = [...array]
  for (let i = shuffledBoardTiles.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tile = shuffledBoardTiles[i];
    shuffledBoardTiles[i] = shuffledBoardTiles[j];
    shuffledBoardTiles[j] = tile;
  }
  return shuffledBoardTiles
}