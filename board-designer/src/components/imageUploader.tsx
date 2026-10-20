'use client'

import React, { useState } from 'react'
import { getImageDimension } from './functions/getimagedimensions'
import { createImageUrl } from './functions/createImageUrl'
import { scaleToRatio } from 'image-processing-module'

/**
 * Properties for the imageUploader component.
 */
interface ImageUploaderProps {
  label: string,
  onImageValid: (file: File, imageUrl: string, formattedImage: any) => void;
}

/**
 * A file upload component that restricts input to allowed image formats
 * and handles basic client-side validation errors.
 *
 * @param props - Component properties.
 * @param props.onImageValid - Callback triggered with the validated file.
 * @returns A JSX element containing the file input and error message display.
 */
export function ImageUploader({ label, onImageValid }: ImageUploaderProps) {
  const [ error, setError ] = useState<string | null>(null)
  const fileTypes = ['image/jpeg', 'image/png', 'image/webp']
  
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]


    if (!file) return

    if (!fileTypes.includes(file.type)) {
      setError('Invalid format, please use JPEG, PNG or WebP')
      return
    }
    setError(null)
    const rawImageUrl = createImageUrl(file)
    const { width, height } = await getImageDimension(rawImageUrl)
    const formattedImage = scaleToRatio({ height, width, aspectRatio: { width: 1, height: 1 }})
    const formattedFile = await resizeImageToFile( rawImageUrl, formattedImage, file.name, file.type)
    const imageUrl = createImageUrl(formattedFile)
    onImageValid(file, imageUrl, formattedImage)
  }

  return(
    <div className="border-box">
      <label className="uploadTitle">
        {label}
        <input
          type="file"
          accept={`${fileTypes}`}
          onChange={handleFileChange}
          className="hidden"
        />
        {error && (
        <p className="errorMessage">
          {error}
        </p>
        )}
      </label>
    </div>
  )
}