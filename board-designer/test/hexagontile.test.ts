import { createElement } from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { HexagonTile } from '../src/components/hexagonTile' 

/**
 * Test for the HexagonTile-component.
 */
describe('HexagonTile', () => {
  it('R6 renders correctly with given image', () => {
    const mockHexagon = {
      points: [
        { x: 60, y: 34 },
        { x: 120, y: 69 }
      ],
      center: {
        x: 20,
        y: 20
      },
      coordinate: {
         x: 1,
          y: -1 
        },
        zIndex: 1
    }
    const { container } = render(createElement(HexagonTile, {
      imageSrc: 'blob:test-url',
      hexagon: mockHexagon,
      index: 0,
    }))
    
    const image = container.querySelectorAll('image')
    expect(image).toBeDefined()
  })
})