import { describe, it, expect } from 'vitest'
import { Tile } from '../src/models/Tile.js'
import { Card } from '../src/models/Card.js'

describe('Tile', () => {
  it('should return the resource type it was created with', () => {
    const tile = new Tile('mountains')
    expect(tile.getResource()).toBe('mountains')
  })

  it('should have no image initially and update when image is set', () => {
    const tile = new Tile('forest')
    expect(tile.getImage()).toBeFalsy()

    tile.setImage('blob:http://localhost/forest-1')
    expect(tile.getImage()).toBe('blob:http://localhost/forest-1')
  })
})

describe('Card', () => {
  it('should initialize with a resource and allow setting an image URL', () => {
    const card = new Card('pasture')
    expect(card.getResource()).toBe('pasture')
    expect(card.getImage()).toBeFalsy()

    card.setImage('blob:http://localhost/pasture-1')
    expect(card.getImage()).toBe('blob:http://localhost/pasture-1')
  })
})