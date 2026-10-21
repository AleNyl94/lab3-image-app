'use client'
import { CardModalProps } from '../types/cardmodalprops'

/**
 * Resource-card that displays if the user uploaded a image.
 *
 * @param CardModalProps - Properties for the component.
 * @returns The resource-card with desired image.
 */
export function CardModal({ imageSrc , type }: CardModalProps & { imageSrc?: string, type?: string }) {

  if(!imageSrc)
    return null

  return (
    <div className="card-modal">
      <div className="image-container">
        {type && <h3>{type} card</h3>}
        <img src={imageSrc} />
      </div>
    </div>
  )
}