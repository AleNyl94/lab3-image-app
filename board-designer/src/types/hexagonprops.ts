export type HexagonTileProps = {
  hexagon: {
    coordinate: { x: number; y: number };
    center: { x: number; y: number };
    points: Array<{ x: number; y: number }>;
    zIndex: number;
  },
  index: number,
  imageSrc?: string,
  onClick?: () => void
};