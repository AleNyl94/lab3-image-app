import type { ResourceType } from '../constants/catanResources.js'

export class Card {
  private readonly resource: ResourceType
  private imageUrl?: string | undefined

  constructor(resource: ResourceType, imageUrl?: string | undefined) {
    this.imageUrl = imageUrl
    this.resource = resource
  }

  public hasImage(): boolean {
    return Boolean(this.imageUrl)
  }
  public getImage(): string | undefined {
    return this.imageUrl
  }

  public setImage(url: string): void {
    this.imageUrl = url
  }

  public getResource(): ResourceType {
    return this.resource
  }
}