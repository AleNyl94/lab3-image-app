'use client'

import { HexGrid, Hexagon } from "midgard-hex-grid"

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
          const pointsString = hex.points ? 
          hex.points.map((p: { x: number, y: number }) => `${p.x},${p.y}`).join(' ') : ''
          return (
            <g key={index}>
              {pointsString && (
                <polygon
                  points={pointsString}
                  className="polygon"/>
                )}
                {hex.center && (
                  <text
                  x={hex.center.x}
                  y={hex.center.y}
                  className="text"
                  >
                  {hex.coordinate ? `${hex.cordinate.x}, ${hex.cordinate.y}` : index + 1}
                  </text>
                )}
              </g>
              )
          })}
      </svg>
    </div>
  )
}