'use client'
import { CardModal } from "./cardModal"
import { CardDisplayProps } from "../types/carddisplayprops"

/**
 * Displays all the resource-cards when board is being previewed.
 *
 * @param CardDisplayProps - Properties for the component.
 * @returns The resource-cards.
 */
export function CardDisplay({ terrainTypes, images }: CardDisplayProps) {
  
  return (
    <div>
    {terrainTypes.map(type => (
      <CardModal
        key={type}
        title={type}
        isOpen={true}
        imageSrc={images[type]}
        />
    ))}
    </div>
  )
}