import { Tile } from './Tile.js'
import { calculateVertices } from 'midgard-hex-grid'

export class Board {
  private readonly tiles: Tile[] =  []
  private readonly catanCoordinates: ReadonlyArray<{ x: number; y: number }> = [
    { x: 2, y: 0 }, { x: 4, y: 0 }, { x: 6, y: 0 },
    { x: 1, y: 1 }, { x: 3, y: 1 }, { x: 5, y: 1 }, { x: 7, y: 1 },
    { x: 0, y: 2 }, { x: 2, y: 2 }, { x: 4, y: 2 }, { x: 6, y: 2 }, { x: 8, y: 2 },
    { x: 1, y: 3 }, { x: 3, y: 3 }, { x: 5, y: 3 }, { x: 7, y: 3 },
    { x: 2, y: 4 }, { x: 4, y: 4 }, { x: 6, y: 4 }
  ]

  constructor() {
    this.initializeTiles()
  }

  private initializeTiles(): void {
    for (const coord of this.catanCoordinates) {
      const vertices = this.calculateVertices(coord)
      const id = `${coord.x}-${coord.y}`

      this.tiles.push(new Tile(id, coord, vertices))
    }
  }

  public insertImageToEmptyTile(imageUrl: string): boolean {
    const emptyTile = this.tiles.find((tile) => !tile.hasImage())
    if (!emptyTile) return false

    emptyTile.setImage(imageUrl)
    return true
  }

  public shuffleTilesImages(): void {
    const images = this.tiles.map((tile) => tile.getImage())

    for (let i = images.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      const temp = images[i];
      images[i] = images[randomIndex] ?? null
      images[randomIndex] = temp ?? null
    }
  }

  public getTiles(): ReadonlyArray<Tile> {
    return this.tiles
  }
 
}