import { Tile } from './Tile.js'
import { RESOURCE_TYPES, CATAN_RESOURCE_DISTRIBUTION } from '../constants/catanResources.js'
import { ResourceImage } from './ImageHandler.js'

export class Board {
  private readonly tiles: Tile[] =  []

  constructor() {
    this.initializeTiles()
  }

  private initializeTiles(): void {
    for (const resource of RESOURCE_TYPES) {
      const tileCount = CATAN_RESOURCE_DISTRIBUTION[resource]

      for (let i = 0; i < tileCount; i++) {
        this.tiles.push(new Tile(resource))
      }
    }
  }

  public applyImage(resourceImage: ResourceImage): void {
    for (const tile of this.tiles) {
      if (tile.getResource() === resourceImage.resource) {
      tile.setImage(resourceImage.imageUrl)
      }
    }
  }

  public shuffleTiles(): void {
  for (let i = this.tiles.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1))
    const temp = this.tiles[i]!
    this.tiles[i] = this.tiles[randomIndex]!
    this.tiles[randomIndex] = temp
  }
}

  public getTiles(): ReadonlyArray<Tile> {
    return this.tiles
  }
}