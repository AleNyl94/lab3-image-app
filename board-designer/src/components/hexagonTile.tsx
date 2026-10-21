'use client'
import { HexagonTileProps } from '../types/hexagonprops'

/**
 * Tile in the board, containing the user's image.
 * @param HexagonTileProps - The components properties.
 * @returns A tile with the image.
 */
export function HexagonTile({ hexagon, imageSrc } : HexagonTileProps) {
  if (!imageSrc) {
    return null
  }

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
            x={hexagon.center.x - 80}
            y={hexagon.center.y - 80}
            width="160"
            height="160"
            clipPath={`url(#${clipId})`}
            preserveAspectRatio="xMidYMid slice"
            className="tile-image"
            />
        )}
    </g>
  )
}