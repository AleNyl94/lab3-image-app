import { Card } from './Card.js'
import { ResourceType } from '../constants/catanResources.js'

export class CardHandler {
  private readonly cards: Card[]

  constructor(resources: ReadonlyArray<ResourceType>) {
    this.cards = resources.map((resource) => new Card(resource))
  }

  public hasAllImages(): boolean {
    return this.cards.every((card) => card.hasImage())
  }

  public getCards(): Card[] {
    return this.cards
  }

  public applyImage(resourceImage: { resource: ResourceType; imageUrl: string }): void {
    const card = this.cards.find((c) => c.getResource() === resourceImage.resource)
    if (card) {
      card.setImage(resourceImage.imageUrl)
    }
  }
}