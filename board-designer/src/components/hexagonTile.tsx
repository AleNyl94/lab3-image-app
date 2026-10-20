'use client'
import React from 'react'
import { HexagonTileProps } from '../types/hexagonprops'

export function HexagonTile({ hexagon, imageSrc } : HexagonTileProps) {
  const pointsString = hexagon.points.map((p) => `${p.x}, ${p.y}`).join(' ')

  const clipId = `clip-${hexagon.coordinate.x}--${hexagon.coordinate.y}`

  

  return (
    <g
      className="hexagon-mask"
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
            width="90"
            height="90"
            clipPath={`url(#${clipId})`}
            preserveAspectRatio="xMidYMid slice"
            className="tile-image"
            />
        )}
    </g>
  )
}