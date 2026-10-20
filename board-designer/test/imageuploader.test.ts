import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { ImageUploader } from '../src/components/imageUploader'
import { createElement } from 'react'

describe('ImageUploader', () => {
  it('calls onImageValid when a file is uploaded', async () => {
    const handleImageValid = vi.fn()
    render(createElement(ImageUploader, { label: 'Upload an image', onImageValid: handleImageValid }))
    
    const file = new File(['dummy content'], 'example.png', { type: 'image/png' })
    const input = screen.getByLabelText(/upload an image/i)
    
    fireEvent.change(input, { target: { files: [file] } })
    expect(handleImageValid).toHaveBeenCalled()
  })
})