import { beforeEach, describe, it, expect, vi } from 'vitest'
import { ImageHandler } from '../src/models/ImageHandler.js'
import { ImageAdapter } from '../src/models/ImageAdapter.js'

vi.mock('../src/models/ImageAdapter.js', () => ({
  ImageAdapter: vi.fn(function() {
    return {
      resizeToSquare: vi.fn().mockResolvedValue({
        width: 100,
        height: 100,
        bytesPerPixel: 4,
        imageUrl: 'blob:mocked-forest-url'
      })
    }
  })
}))


describe('Testing the ImageHandler, expecting it to turn the ProcessedImage to a ResourceImage with the ImageAdapter class which is mocked', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })
  it('should process a valid image file and return a ResourceImage', async () => {
    const imageHandler = new ImageHandler()
    const fakeFile = new File(['dummy-content'], 'forest.png', { type: 'image/png' })
    const adapterInstance = vi.mocked(ImageAdapter).mock.results[0]?.value

    const result = await imageHandler.processFile(fakeFile, 'forest')

    expect(adapterInstance.resizeToSquare).toHaveBeenCalledOnce()
    expect(adapterInstance.resizeToSquare).toHaveBeenCalledWith(fakeFile)

    expect(result).toEqual({
      resource: 'forest',
      height: 100,
      width: 100,
      imageUrl:  'blob:mocked-forest-url',
      bytesPerPixel: 4
    })
  })
})