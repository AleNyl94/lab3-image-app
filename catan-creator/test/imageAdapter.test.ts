import { beforeEach, describe, it, expect, vi } from 'vitest'
import { ImageAdapter } from '../src/models/ImageAdapter.js'
import { ImageItem } from 'image-processing-module'

describe('Test for the imageAdapter-class', () => {
  let mockBitmap: { width: number; height: number; close: ReturnType<typeof vi.fn> }
  let mockDrawImage: ReturnType<typeof vi.fn>
  const dummyFile = new File(['dummy-content'], 'forest.png', { type: 'image/png' })
  let adapter = new ImageAdapter()
  beforeEach(() => {
    vi.clearAllMocks()
    adapter = new ImageAdapter()
    mockBitmap = {
      width: 400,
      height: 200,
      close: vi.fn()
    }

    vi.stubGlobal('createImageBitmap', vi.fn().mockResolvedValue(mockBitmap))
    mockDrawImage = vi.fn()
    vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue({
      drawImage: mockDrawImage
    } as unknown as CanvasRenderingContext2D)
    vi.spyOn(HTMLCanvasElement.prototype, 'toDataURL').mockReturnValue('data:image/png;base64,mocked')
  })

  it('Should redraw the input-file to a square image according to the 1:1-ratio', async () => {
    const result = await adapter.resizeToSquare(dummyFile)
    expect(createImageBitmap).toHaveBeenCalledWith(dummyFile)
    expect(result.width).toBe(result.height)
  })

  it('Should create a imageUrl for the input file', async () => {
    const result = await adapter.resizeToSquare(dummyFile)
    expect(result.imageUrl).not.toBeFalsy()
  })
})