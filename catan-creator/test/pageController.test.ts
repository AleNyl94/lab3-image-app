import { describe, it, expect, vi, beforeEach } from 'vitest'
import { PageController } from '../src/controllers/pageController.js'

const mockRenderBoard = vi.fn()
const mockRenderUploads = vi.fn()
const mockRenderCards = vi.fn()
const mockEnableGenerateButton = vi.fn()
const mockBindGenerateButton = vi.fn()
const mockBindImageUpload = vi.fn()

vi.mock('../src/view/BoardView.js', () => ({
  BoardView: vi.fn(function (this: any) {
    this.renderBoard = mockRenderBoard
  })
}))

vi.mock('../src/view/CardView.js', () => ({
  CardView: vi.fn(function (this: any) {
    this.renderUploads = mockRenderUploads
    this.renderCards = mockRenderCards
    this.enableGenerateButton = mockEnableGenerateButton
    this.bindGenerateButton = mockBindGenerateButton
    this.bindImageUpload = mockBindImageUpload
  })
}))

describe('PageController, testing if it renders the page necessary components and functionality', () => {
  let controller: PageController

  beforeEach(() => {
    vi.clearAllMocks()
    controller = new PageController()
  })

  it('should render uploads and disable generate button on init()', () => {
    controller.init()

    expect(mockRenderUploads).toHaveBeenCalledOnce()
    expect(mockEnableGenerateButton).toHaveBeenCalledWith(false)
  })

  it('should shuffle board and render tiles when generate button callback is triggered', () => {
    let generateCallback: (() => void) | undefined

    mockBindGenerateButton.mockImplementation((cb: () => void) => {
      generateCallback = cb
    })

    controller.init()

    generateCallback?.()

    expect(mockRenderBoard).toHaveBeenCalledOnce()
    const passedTiles = mockRenderBoard.mock.calls[0][0]
    expect(passedTiles).toHaveLength(19)
  })
})