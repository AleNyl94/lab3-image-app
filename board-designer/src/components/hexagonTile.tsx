import React from 'react'
import { HexagonTileProps } from '../types/hexagonprops'

export function HexagonTile({ hexagon, imageSrc, onClick} : HexagonTileProps) {
  const pointsString = hexagon.points.map((p) => `${p.x}, ${p.y}`).join('')

  const clipId = `clip-${hexagon.coordinate.x}--${hexagon.coordinate.y}`
  return (
    <g 
      onClick={onClick}
      className="cursor-pointer-group"
      >
      <defs>
        <clipPath id={clipId}>
          <polygon points={pointsString} />
        </clipPath>
      </defs>
      <polygon
        points={pointsString}
        className="tile"
        />
        {imageSrc && (
          <image
            href={imageSrc}
            x={hexagon.center.x - 45}
            y={hexagon.center.y - 45}
            className="tileImage"
            />
        )}
        {!imageSrc && (
          <text
            x={hexagon.center.x}
            y={hexagon.center.y}
            className="noTileImage"
          >
            {`${hexagon.coordinate.x},${hexagon.coordinate.y}`}
          </text>
        )}
    </g>
  )
}