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
    hexDiameter: 80,
    skeletonWidth: 3,
    skeletonHeight: 3
  })

  return (
    <div className="board">
      <svg className="hexagon-grid">
        {hexagons.map((hex: any, index: number) => {
          const tile = tiles[index]
          const points = hex.points.map((p: any) => `${p.x},${p.y}`).join(' ')
          return (
            <HexagonTile
            index={index}
            hexagon={hex}
            imageSrc={tile?.imageUrl}
            />
          )
        })}
      </svg>
    </div>
  )
}