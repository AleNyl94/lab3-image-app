/**
 * Different types for the tiles based on the resources.
 */
type TerrainType = 'forest' | 'hills' | 'pasture' | 'fields' | 'mountains' | 'desert'

/**
 * Class for the hexagon-tile of the game-board.
 */
export class Tile {
  private readonly type: TerrainType
  private imageFile: File

  constructor(type: TerrainType, imageFile: File) {
    this.type = type
    this.imageFile = imageFile
  }

  public getType(): TerrainType {
    return this.type
  }

  public getImageFile(): File {
    return this.imageFile
  }
}