import { RESOURCE_TYPES, type ResourceType } from '../constants/catanResources.js'
import { ImageHandler, type ResourceImage } from '../models/ImageHandler.js'
import { CardHandler } from '../models/CardHandler.js'
import { CardView } from '../view/ImageView.js'
import { BoardView } from '../view/BoardView.js'
import { Board } from '../models/Board.js'

/**
 * Controller for the page, rendering the html-elements and processing the data.
 */
export class PageController {
  private readonly board: Board
  private readonly boardView: BoardView
  private readonly cardView: CardView
  private readonly cardHandler: CardHandler
  private readonly imageHandler: ImageHandler

  public constructor() {
    this.board = new Board()
    this.boardView = new BoardView()
    this.cardHandler = new CardHandler(RESOURCE_TYPES)
    this.cardView = new CardView()
    this.imageHandler = new ImageHandler()

  }

  public init() {
    this.cardView.renderUploads(this.cardHandler.getCards())
    this.cardView.enableGenerateButton(false)

    this.cardView.bindImageUpload((file, resource) => {
      this.handleImageUpload(file, resource)
    })
    this.cardView.bindGenerateButton(() => {
      this.generateBoard()
    })
  }

  private async handleImageUpload(file: File, resource: ResourceType): Promise<void> {
    const processedImage = await this.imageHandler.processFile(file, resource)

    this.cardHandler.applyImage(processedImage)
    this.board.applyImage(processedImage)

    if(this.cardHandler.hasAllImages()) {
      this.cardView.renderCards(this.cardHandler.getCards())
      this.cardView.enableGenerateButton(true)
    }
  }

  private generateBoard(): void {
    this.board.shuffleTiles()
    this.boardView.renderBoard(this.board.getTiles())
  }
}