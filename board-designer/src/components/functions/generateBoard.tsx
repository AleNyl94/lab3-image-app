import { shuffleTiles } from "./shuffleTiles"
import { HexagonTile } from "../hexagonTile"

/**
 * The images porperties.
 */
type UploadedImage = {
  file: File;
  imageUrl: string;
  formattedImage: any;
}

/**
 * Drawing up the parts of the board with the components, images and tiles.
 * 
 * @param uploadedImages The images the user uploaded, being set into the tiles.
 * @param boardPositions The positions on the Catan-board.
 * @returns 
 */
export function generateBoard(uploadedImages: Record<string, UploadedImage>) {
 

  const tileTemplates = [ 'forest', 'forest', 'forest', 'forest', 'pasture', 'pasture', 'pasture', 'pasture', 
    'fields', 'fields', 'fields', 'fields', 'hills', 'hills', 'hills', 'mountains', 'mountains', 'mountains', 'desert'
  ]

  const boardTiles = []
  for(let i = 0; i < tileTemplates.length; i++) {
    const type = tileTemplates[i]
    const imageUrl = uploadedImages[type]?.imageUrl
    boardTiles.push({ id: i, type: type, imageUrl: imageUrl })
  }

  const shuffledBoardTiles = shuffleTiles(boardTiles)

  return (
    shuffledBoardTiles
  )
}