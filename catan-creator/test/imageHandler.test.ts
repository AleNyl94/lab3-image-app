import { describe, it, expect, vi } from 'vitest'
import { ImageHandler } from '../src/models/ImageHandler.js'

describe('ImageHandler', () => {
  it('should process a valid image file and associate it with the correct resource', async () => {
    const imageHandler = new ImageHandler()
    const fakeFile = new File(['dummy-content'], 'forest.png', { type: 'image/png' })

    vi.spyOn(imageHandler, 'processFile').mockResolvedValue({
      resource: 'forest',
      imageUrl: 'blob:mocked-forest-url'
    })

    const result = await imageHandler.processFile(fakeFile, 'forest')

    expect(result.resource).toBe('forest')
    expect(result.imageUrl).toContain('blob:')
  })
})