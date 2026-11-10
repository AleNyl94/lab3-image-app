import { RESOURCE_TYPES, ResourceType } from "../constants/catanResources.js"

export type Point = { x: number; y: number }

/**
 * The class for the tile-hexagon logic.
 */
export class Tile {
  private imageUrl: string | null = null

  public constructor(
    private readonly resource: ResourceType,
    imageUrl?: string
  ) {
    this.validateResource(resource)
  }

  public getImage(): string | null {
    return this.imageUrl
  }

  public setImage(url: string) {
    this.validateUrl(url)
    this.imageUrl = url
  }

  public hasImage(): boolean {
    return this.imageUrl !== null
  }

  public getResource(): ResourceType {
    return this.resource
  }

  private validateResource(resource: ResourceType): void {
    if (!RESOURCE_TYPES.includes(resource)) {
      throw new Error('Tile must have a valid resource')
    }
  }

  private validateUrl(imageUrl: string): void {
    if ( typeof imageUrl !== 'string' || imageUrl.trim().length === 0) {
      throw new Error('URL must a a non-empty string')
    }
  }
}