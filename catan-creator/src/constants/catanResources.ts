export const RESOURCE_TYPES = [ 'forest', 'hills', 'pasture', 'fields', 'mountains', 'desert' ] as const
export type ResourceType = (typeof RESOURCE_TYPES)[number]

export const CATAN_RESOURCE_DISTRIBUTION: Record<ResourceType, number> = {
  forest: 4,
  hills: 3,
  pasture: 4,
  fields: 4,
  mountains: 3,
  desert: 1
}