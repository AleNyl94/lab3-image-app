import { createElement } from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { HexagonTile } from '../src/components/hexagonTile' 

describe('HexagonTile', () => {
  it('renders correctly with given terrain type and image', () => {
    render(createElement(HexagonTile, {
      imageSrc: 'blob:test-url',
      hexagon: { terrain: 'forest' } as any,
      index: 0,
    }))
    
    const image = screen.getByRole('img', { name: 'forest' })
    expect(image).toBeDefined()
  })
})