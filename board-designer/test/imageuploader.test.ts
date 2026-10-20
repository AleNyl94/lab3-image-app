import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { ImageUploader } from '../src/components/imageUploader'
import { createElement } from 'react'

describe('ImageUploader', () => {
  it('calls onImageValid when a file is uploaded', async () => {
    const handleImageValid = vi.fn()
    const { container } = render(createElement(ImageUploader, { label: 'Upload an image', onImageValid: handleImageValid }))
    
    const file = new File(['dummy content'], 'example.png', { type: 'image/png' })
    const input = screen.getByLabelText(/upload an image/i)
    
    fireEvent.change(input, { target: { files: [file] } })
    await waitFor(() => {
      container.querySelector('input[type="file"]')
    })
  })
  it('R9 warns when an unsupported file-type is trying to load', async () => {
    const { container } = render(createElement(ImageUploader, { label: 'Upload an image', onImageValid: () => {} }))
  
    const input = container.querySelector('input[type="file"]') as HTMLInputElement
    const invalidFile = new File(['test'], 'document.txt', { type: 'text/plain' })

    fireEvent.change(input, { target: { files: [invalidFile] } })
    const errorMessage = await screen.findByText('Invalid format, please use JPEG, PNG or WebP')
    expect(errorMessage).toBeDefined()
  })
})