import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { createElement } from 'react'
import { CardDisplay } from '../src/components/cardDisplay'

describe('CardDisplay', () => {
  it('renders a list of cards correctly', () => {
    const mockCards = [
      { id: '1', title: 'Pasture Card', imageUrl: 'url1', type: 'pasture' },
      { id: '2', title: 'Forest Card', imageUrl: 'url2', type: 'forest' }
    ]

    render(createElement(CardDisplay, { cards: mockCards }))

    expect(screen.getByText('Brick Card')).toBeDefined()
    expect(screen.getByText('Wood Card')).toBeDefined()
  })
})