import { Tile } from './tile.js'
/**
 * The game board that holds 19 tiles.
 */
export class Board {
  private tiles: Tile[] = []

  constructor(uploadedImages: Record<string, File>) {
    this.generateTiles(uploadedImages)
  }

  private generateTiles(images: Record<string, File>) {
    const tileCounts = {
      forest: 4,
      pasture: 4,
      fields: 4,
      hills: 3,
      mountains: 3,
      desert: 1
    } as const
    for (const type of Object.keys(tileCounts) as Array<keyof typeof tileCounts>) {
      const count = tileCounts[type]
      const imageFile = images[type]
      for (let i = 0; i < count; i++) {
        this.tiles.push(new Tile(type, imageFile))
      }
    }
  }

  public getTiles(): Tile[] {
    return this.tiles
  }
}