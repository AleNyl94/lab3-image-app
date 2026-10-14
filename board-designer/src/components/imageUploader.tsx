'use client'

import React, { useState } from 'react'

/**
 * Properties for the imageUploader component.
 */
interface ImageUploaderProps {
  label: string,
  onImageValid: (file: File) => void;
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
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (!fileTypes.includes(file.type)) {
      setError('Invalid format, please use JPEG, PNG or WebP')
      return
    }
    setError(null)
    onImageValid(file)
  }

  return(
    <div className="border-box">
      <label className="uploadTitle">
        {label}
        Drop your image here
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