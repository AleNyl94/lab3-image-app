import { useState } from 'react'
import { ImageUploader } from './components/imageUploader'
import { BoardGrid } from './components/boardGrid'
import { HexagonTile } from './components/hexagonTile'
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

  const isImagesFull = Object.keys(uploadedImages).length === TERRAIN_TYPES.length

  const handleGenerateBoard = () => {
    if (!isImagesFull)
      return
      setBoard(true)
  }

  return(
    <>
      <h1>Create your own game-board!</h1>
      <div className="image-dropzones">
        {TERRAIN_TYPES.map((type) => (
          <ImageUploader
            label={`Upload a image for ${type}`}
            onImageValid={(file) => handleUploadedImages(type, file)}
          />
        ))}
      </div>
      <div className="generate-button-zone">
        <button 
          onClick={handleGenerateBoard}
          disabled={!isImagesFull}
          className="generate-button"
        >
          { isImagesFull 
          ? 'Generate board'
          : `Upload images (${Object.keys(uploadedImages).length}/6)`}
        </button>
        <div className="game-board-container">
          <BoardGrid>
            <HexagonTile
            imageSrc={imageUrl}
            />
          </BoardGrid>
        </div>
      </div>
    </>
  )
}