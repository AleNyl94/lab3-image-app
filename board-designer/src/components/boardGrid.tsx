'use client'

import { HexGrid, Hexagon } from "midgard-hex-grid"

/**
 * The grid with hexagons that will display the tiles.
 *
 * @returns The hexagon-grid.
 */
export function BoardGrid() {
  const grid = new HexGrid('x-dominated')
  const hexagons = grid.createGrid({
    hexDiameter: 80,
    skeletonWidth: 2,
    skeletonHeight: 2
  })

  return (
    <div className="board">
      <svg className="hexagon-grid">
        {hexagons.map((hex: any, index: number) => {
          const points = hex.points.map((p: any) => `${p.x},${p.y}`).join(' ')
          return (
            <g key={index}>
              <polygon points={points}/>
                <text className="polygon-text" x={hex.center.x} y={hex.center.y}>
                  {index + 1}  
                </text>
              </g>
              )
          })}
      </svg>
    </div>
  )
}