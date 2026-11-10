import { describe, it, expect, beforeEach } from 'vitest'
import { CardHandler } from '../src/models/CardHandler.js'
import { RESOURCE_TYPES } from '../src/constants/catanResources.js'

describe('CardHandler', () => {
  let cardHandler: CardHandler

  beforeEach(() => {
    cardHandler = new CardHandler(RESOURCE_TYPES)
  })

  it('should create one card per resource type', () => {
    expect(cardHandler.getCards()).toHaveLength(RESOURCE_TYPES.length)
  })

  it('should return false for hasAllImages initially', () => {
    expect(cardHandler.hasAllImages()).toBe(false)
  })

  it('should apply an image to the matching resource card', () => {
    cardHandler.applyImage({
      resource: 'forest',
      imageUrl: 'blob:forest-img'
    })

    const forestCard = cardHandler.getCards().find(c => c.getResource() === 'forest')
    expect(forestCard?.getImage()).toBe('blob:forest-img')
  })

  it('should return true for hasAllImages when all resources have images', () => {
    for (const resource of RESOURCE_TYPES) {
      cardHandler.applyImage({ resource, imageUrl: `blob:${resource}-img` })
    }
    expect(cardHandler.hasAllImages()).toBe(true)
  })
})