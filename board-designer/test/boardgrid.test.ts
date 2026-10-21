import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { createElement } from 'react'
import { BoardGrid } from '../src/components/boardGrid'

/**
 * Tests the boardgrid-component and checks if it can create and add the 
 * tiles it is given.
 */
describe('BoardGrid', () => {
  it('R1 renders the correct number of tiles based on input data', () => {
    const mockTiles = [
      { id: '1', type: 'forest', imageUrl: 'blob:url-1' },
      { id: '2', type: 'brick', imageUrl: 'blob:url-2' },
      { id: '3', type: 'sheep', imageUrl: 'blob:url-3' },
      { id: '4', type: 'ore', imageUrl: 'blob:url-4' },
      { id: '5', type: 'forest', imageUrl: 'blob:url-5' },
      { id: '6', type: 'sheep', imageUrl: 'blob:url-6' }
    ]

    const { container } = render(createElement(BoardGrid, { tiles: mockTiles }))

    const tiles = container.querySelectorAll('.tile-image')
    expect(tiles).toHaveLength(6)
  })
})