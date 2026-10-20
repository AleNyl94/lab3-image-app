import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { createElement } from 'react'
import { CardDisplay } from '../src/components/cardDisplay'

describe('CardDisplay', () => {
  it('R7 renders a list of cards correctly', () => {
    const mockCards = [
      { id: '1', title: 'Pasture Card', imageUrl: 'url1', type: 'pasture' },
      { id: '2', title: 'Forest Card', imageUrl: 'url2', type: 'forest' }
    ]

    render(createElement(CardDisplay, { cards: mockCards }))

    const text1 = screen.getByText(/pasture/i)
    expect(text1).toBeDefined()
    const text2 = screen.getByText(/forest/i)
    expect(text2).toBeDefined()
  })
})