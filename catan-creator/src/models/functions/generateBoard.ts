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
export class generateBoard(uploadedImages: Record<string, UploadedImage>) {
 

  const tileTemplates = [ 'forest', 'forest', 'forest', 'forest', 'pasture', 'pasture', 'pasture', 'pasture', 
    'fields', 'fields', 'fields', 'fields', 'hills', 'hills', 'hills', 'mountains', 'mountains', 'mountains', 'desert'
  ]

  const boardTiles = []
  for(let i = 0; i < tileTemplates.length; i++) {
    const type = tileTemplates[i]
    const imageUrl = uploadedImages[type]?.imageUrl
    boardTiles.push({ id: i, type: type, imageUrl: imageUrl })
  }

  const shuffledBoardTiles = this.shuffleTiles(boardTiles)

  return (
    shuffledBoardTiles
  )
}
private shuffleTiles<T>(array: T[]): T[] {
  const shuffledBoardTiles = [...array]
  for (let i = shuffledBoardTiles.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tile = shuffledBoardTiles[i];
    shuffledBoardTiles[i] = shuffledBoardTiles[j];
    shuffledBoardTiles[j] = tile;
  }
  return shuffledBoardTiles
}