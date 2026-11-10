import { HexGrid } from 'midgard-hex-grid'
import type { Coordinate, Point } from 'midgard-hex-grid'
import { Tile } from '../models/Tile.js'

export class BoardView {
  private readonly board: HTMLElement
  private readonly hexGrid = new HexGrid('x-dominated')
  private readonly hexDiameter = 120
  private readonly catanCoordinates: ReadonlyArray<{ x: number; y: number }> = [
    { x: 2, y: 0 }, { x: 4, y: 0 }, { x: 6, y: 0 },
    { x: 1, y: 1 }, { x: 3, y: 1 }, { x: 5, y: 1 }, { x: 7, y: 1 },
    { x: 0, y: 2 }, { x: 2, y: 2 }, { x: 4, y: 2 }, { x: 6, y: 2 }, { x: 8, y: 2 },
    { x: 1, y: 3 }, { x: 3, y: 3 }, { x: 5, y: 3 }, { x: 7, y: 3 },
    { x: 2, y: 4 }, { x: 4, y: 4 }, { x: 6, y: 4 }
  ] as const

  public constructor() {
    this.board = this.getElement<HTMLElement>('#board')
  }

  public renderBoard(tiles: ReadonlyArray<Tile>): void {
    this.board.innerHTML = ''

    tiles.forEach((tile, index) => {
      const coord = this.catanCoordinates[index]
      if (!coord) {
        return
      }

      const tileElement = this.createTileElement(tile, coord)
      this.board.appendChild(tileElement)
    })
  }

  private createTileElement(tile: Tile, coord: Coordinate): HTMLImageElement {

    const img = document.createElement('img')
    img.className = 'hex-tile'
    img.src = tile.getImage() ?? ''
    img.alt = tile.getResource()

    this.positionTileElement(img, coord)

    return img
  }

  private positionTileElement(element: HTMLElement, coord: Coordinate): void {
    const center = this.hexGrid.getCenterPosition(coord, this.hexDiameter)

    const gridCenter = this.hexGrid.getCenterPosition({ x: 4, y: 2 }, this.hexDiameter)

    const boardCenterX = this.board.clientWidth / 2
    const boardCenterY = this.board.clientHeight / 2

    const offsetX = boardCenterX - gridCenter.x
    const offsetY = boardCenterY - gridCenter.y

    element.style.left = `${center.x + offsetX}px`
    element.style.top = `${center.y + offsetY}px`
    element.style.width = `${this.hexDiameter}px`
    element.style.height = `${this.hexDiameter}px`
  }

  private getElement<T extends HTMLElement>(selector: string) {
    const element = document.querySelector<T>(selector)
    if (!element) {
      throw new Error('Element was not found')
    }
    return element
  }
}