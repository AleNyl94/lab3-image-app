'use client'
import { HexGrid } from "midgard-hex-grid"
import { HexagonTile } from "./hexagonTile"
import { formatCatanBoard } from './functions/formatCatanBoard'

/**
 * The grid with hexagons that will display the tiles.
 *
 * @returns The hexagon-grid.
 */
export function BoardGrid({ tiles }: {tiles: any[]}) {
  const grid = new HexGrid('x-dominated')
  const rawHexagons = grid.createGrid({
    hexDiameter: 120,
    skeletonWidth: 3,
    skeletonHeight: 3
  })

  const formattedHexagons = formatCatanBoard(rawHexagons)


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
            imageSrc={tile?.imageUrl}
            />
          )
        })}
      </svg>
    </div>
  )
}