import { useState } from 'react'
import { ImageUploader } from './components/imageUploader'
import { TERRAIN_TYPES } from './types/terraintypes'

/**
 * The main page for the application.
 * 
 * @returns The main page.
 */
export function page() {
  const [ uploadedImages, setUploadedImages ] = useState<Record<string, File>>({})
  const [ board, setBoard ] = useState(false)

  const handleUploadedImages = (type: string, file: File) => {
    setUploadedImages(prevImages => ({
      ...prevImages,
      [type]: file
    }))
  }

  return(
    <div className="grid-container">
      {TERRAIN_TYPES.map((type) => (
        <ImageUploader
          label={`Upload a image for ${type}`}
          onImageValid={(file) => handleUploadedImages(type, file)}
        />
      ))}
    </div>
  )
}