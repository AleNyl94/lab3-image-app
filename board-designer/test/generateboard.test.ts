
import { describe, it, expect } from 'vitest'
import { generateBoard } from '../src/components/functions/generateBoard'

describe('generateBoard', () => {
  it('R2 should generate 19 tiles with correct properties', () => {

    const mockImages = {
      forest: { file: {} as File, imageUrl: 'forest.png', formattedImage: null },
      pasture: { file: {} as File, imageUrl: 'pasture.png', formattedImage: null },
      fields: { file: {} as File, imageUrl: 'fields.png', formattedImage: null },
      hills: { file: {} as File, imageUrl: 'hills.png', formattedImage: null },
      mountains: { file: {} as File, imageUrl: 'mountains.png', formattedImage: null },
      desert: { file: {} as File, imageUrl: 'desert.png', formattedImage: null },
    }

    const tiles = generateBoard(mockImages)

    expect(tiles).toHaveLength(19)
    expect(tiles[0]).toHaveProperty('type')
    expect(tiles[0]).toHaveProperty('imageUrl')
  })
})