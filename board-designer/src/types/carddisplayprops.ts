import { TERRAIN_TYPES } from "./terraintypes"
export interface CardDisplayProps{
  terrainTypes: typeof TERRAIN_TYPES,
  images: Record<string, string>
}