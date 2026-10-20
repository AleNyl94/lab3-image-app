import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { createElement } from 'react'
import { CardModal } from '../src/components/cardModal'

describe('CarddModal', () => {
  it('should return null with an empty image', () => {
    const { container } = render(
      createElement(CardModal, { imageSrc: '', type: 'Test Card' })
    )
    expect(container.firstChild).toBeNull()
  })
})