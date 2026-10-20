import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { createElement } from 'react'
import { BoardGrid } from '../src/components/boardGrid'

/**
 * Tests the boardgrid-component and checks if it can create and add the 
 * tiles it is given.
 */
describe('BoardGrid', () => {
  it('renders the correct number of tiles based on input data', () => {
    const mockTiles = [
      { id: '1', type: 'forest', imageUrl: 'blob:url-1' },
      { id: '2', type: 'brick', imageUrl: 'blob:url-2' },
      { id: '3', type: 'sheep', imageUrl: 'blob:url-3' }
    ]

    const { container } = render(createElement(BoardGrid, { tiles: mockTiles }))

    const tiles = container.querySelectorAll('.tile-image')
    expect(tiles).toHaveLength(3)
  })
})