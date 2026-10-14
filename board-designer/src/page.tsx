import { useState } from 'react'
import { ImageUploader } from './components/imageUploader'

/**
 * The main page for the application.
 * 
 * @returns The main page.
 */
export function page() {
  const [ uploadedImages, setUploadedImages ] = useState<Record<string, File>>({})

  const handleUploadedImages = (type: string, file: File) => {
    setUploadedImages(prevImages => ({
      ...prevImages,
      [type]: file
    }))
  }

  return(
    <ImageUploader
    label="Upload a image for forest"
    onImageValid={(file) => handleUploadedImages('forest', file)}
    />
  )
}