export type Point = { x: number; y: number }

/**
 * The class for the tile-hexagon logic.
 */
export class Tile {
  private imageUrl: string | null = null

  constructor(
    public readonly id: string,
    public readonly coordinate: { x: number, y: number },
    public readonly vertices: Point[]
  ) {}

  public getImage(): string | null {
    return this.imageUrl
  }

  public setImage(url: string) {
    this.imageUrl = url
  }

  public hasImage(): boolean {
    return this.imageUrl !== null
  }

  public getPolygonPointsString(): string {
    return this.vertices.map((p) => `${p.x}, ${p.y}`).join(' ')
  }
}