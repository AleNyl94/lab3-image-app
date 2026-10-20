'use client'

import React from 'react'
import { HexGrid } from "midgard-hex-grid"
import { HexagonTile } from "./hexagonTile"

/**
 * The grid with hexagons that will display the tiles.
 *
 * @returns The hexagon-grid.
 */
export function BoardGrid({ tiles }: {tiles: any[]}) {
  const grid = new HexGrid('x-dominated')
  const hexagons = grid.createGrid({
    hexDiameter: 120,
    skeletonWidth: 3,
    skeletonHeight: 3
  })

  const rowsMap = new Map<number, any[]>()
  rawHexagons.forEach((hex: any) => {
    const y = hex.coordinate.y
    if (!rowsMap.has(y)) {
      rowsMap.set(y, [])
    }
    rowsMap.get(y)!.push(hex)
  })

  for (const [y, hexs] of rowsMap.entries()) {
    hexs.sort((a, b) => a.coordinate.x - b.coordinate.x)
  }

  const sortedRows = Array.from(rowsMap.entries())
    .sort(([yA], [yB]) => yA - yB)
    .map(([_, hexs]) => hexs)

  const targetPattern = [3, 4, 5, 4, 3]
  let catanRows: any[][] = []

  for (let i = 0; i <= sortedRows.length - targetPattern.length; i++) {
    const slice = sortedRows.slice(i, i + targetPattern.length)
    const matches = slice.every((row, idx) => row.length === targetPattern[idx])
    if (matches) {
      catanRows = slice
      break
    }
  }

  const formattedHexagons = catanRows.length > 0 ? catanRows.flat() : rawHexagons.slice(0, 19)

  return (
    <div className="board">
      <svg className="hexagon-grid" viewBox="-100 -10 700 600">
        {formattedHexagons.map((hex: any, index: number) => {
          const tile = tiles[index]
          if (!hex || !hex.points) return null
          const points = hex.points.map((p: any) => `${p.x},${p.y}`).join(' ')
          return (
            <HexagonTile
            key={index}
            index={index}
            hexagon={hex}
            tile={tile}
            imageSrc={tile?.imageUrl}
            />
          )
        })}
      </svg>
    </div>
  )
}