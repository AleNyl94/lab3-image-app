'use client'
import React from 'react'
import { CardModalProps } from '../types/cardmodalprops'

/**
 * Resource-card that displays if the user uploaded a image.
 *
 * @param CardModalProps - Properties for the component.
 * @returns The resource-card with desired image.
 */
export function CardModal({ imageSrc, isOpen }: CardModalProps) {
  if (!isOpen)
    return null

  return (
    <div className="card-modal">
      <div className="image-container">
        <img src={imageSrc} alt="Terrain preview"/>
      </div>
    </div>
  )
}