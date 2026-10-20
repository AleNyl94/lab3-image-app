'use client'
import { CardModal } from "./cardModal"
import { CardItem } from "../types/carditem"

/**
 * Displays all the resource-cards when board is being previewed.
 *
 * @param CardDisplayProps - Properties for the component.
 * @returns The resource-cards.
 */
export function CardDisplay({ cards }: { cards: CardItem[] }) {
  
  return (
    <div className="card-modal-display">
    {cards.map(card => (
      <CardModal
        key={card.type}
        type={card.type}
        imageSrc={card.imageUrl}
        />
    ))}
    </div>
  )
}