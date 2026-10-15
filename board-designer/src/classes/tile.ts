/**
 * Different types for the tiles based on the resources.
 */
type TerrainType = 'forest' | 'hills' | 'pasture' | 'fields' | 'mountains' | 'desert'

/**
 * Class for the hexagon-tile of the game-board.
 */
export class Tile {
  private readonly type: TerrainType
  private numberToken: number

  constructor(type: TerrainType, numberToken: number) {
    this.type = type
    this.numberToken = numberToken
  }

  public getType(): TerrainType {
    return this.type
  }

  public getNumbertoken(): number {
    return this.numberToken
  }
}