import { describe, it, expect, beforeEach } from 'vitest'
import { Board } from '../src/models/Board.js'

describe('Board', () => {
  let board: Board

  beforeEach(() => {
    board = new Board()
  })

  it('should initialize with exactly 19 tiles', () => {
    expect(board.getTiles()).toHaveLength(19)
  })

  it('should have standard Catan resource distribution', () => {
    const tiles = board.getTiles()
    const count = (res: string) => tiles.filter(t => t.getResource() === res).length

    expect(count('forest')).toBe(4)
    expect(count('fields')).toBe(4)
    expect(count('pasture')).toBe(4)
    expect(count('mountains')).toBe(3)
    expect(count('hills')).toBe(3)
    expect(count('desert')).toBe(1)
  })

  it('should apply image to all tiles of the specified resource', () => {
    board.applyImage({ resource: 'desert', imageUrl: 'blob:desert-img' })

    const desertTiles = board.getTiles().filter(t => t.getResource() === 'desert')
    expect(desertTiles.every(t => t.getImage() === 'blob:desert-img')).toBe(true)
  })

  it('should preserve all 19 tiles when shuffled', () => {
    const before = board.getTiles().map(t => t.getResource()).sort()
    board.shuffleTiles()
    const after = board.getTiles().map(t => t.getResource()).sort()

    expect(after).toEqual(before)
  })
})