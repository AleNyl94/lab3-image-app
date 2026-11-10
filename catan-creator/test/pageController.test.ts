import { describe, it, expect, vi, beforeEach } from 'vitest'
import { PageController } from '../src/controllers/pageController.js'
import { BoardView } from '../src/view/BoardView.js'
import { CardView } from '../src/view/ImageView.js'

vi.mock('../src/view/BoardView.js', () => {
  return {
    BoardView: vi.fn().mockImplementation(() => ({
      renderBoard: vi.fn()
    }))
  }
})

vi.mock('../src/view/ImageView.js', () => {
  return {
    CardView: vi.fn().mockImplementation(() => ({
      renderUploads: vi.fn(),
      renderCards: vi.fn(),
      enableGenerateButton: vi.fn(),
      bindGenerateBoard: vi.fn(),
      bindImageUpload: vi.fn()
    }))
  }
})

describe('PageController', () => {
  let controller: PageController

  beforeEach(() => {
    vi.clearAllMocks()
    controller = new PageController()
  })

  it('should render uploads and disable generate button on init()', () => {
    controller.init()

    const cardViewInstance = vi.mocked(CardView).mock.results[0]?.value

    expect(cardViewInstance.renderUploads).toHaveBeenCalledOnce()
    expect(cardViewInstance.enableGenerateButton).toHaveBeenCalledWith(false)
  })

  it('should shuffle board and render tiles when generate button callback is triggered', () => {
    let generateCallback: (() => void) | undefined

    const cardViewInstance = vi.mocked(CardView).mock.results[0]?.value
    const boardViewInstance = vi.mocked(BoardView).mock.results[0]?.value

    cardViewInstance.bindGenerateBoard.mockImplementation((cb: () => void) => {
      generateCallback = cb
    })

    controller.init()

    generateCallback?.()

    expect(boardViewInstance.renderBoard).toHaveBeenCalledOnce()
    const passedTiles = boardViewInstance.renderBoard.mock.calls[0][0]
    expect(passedTiles).toHaveLength(19)
  })
})