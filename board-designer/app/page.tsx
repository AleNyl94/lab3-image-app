'use client'
import { useState } from 'react'
import { ImageUploader } from '../src/components/imageUploader'
import { BoardGrid } from '../src/components/boardGrid'
import { TERRAIN_TYPES } from '../src/types/terraintypes'
import { generateBoard } from '../src/components/functions/generateBoard'
import { CardDisplay } from '../src/components/cardDisplay'

type UploadedImage = {
  file: File
  imageUrl: string
  formattedImage: any
}

/**
 * The main page for the application.
 * 
 * @returns The main page.
 */
export default function Page() {
  const [ uploadedImages, setUploadedImages ] = useState<Record<string, UploadedImage>>({})
  const [ board, setBoard ] = useState<any[] | null>(null)

  const handleUploadedImages = (type: string, file: File, imageUrl: string, formattedImage: any) => {
    setUploadedImages(prevImages => ({
      ...prevImages,
      [type]: {file, imageUrl, formattedImage}
    }))
  }

  const isImagesFull = Object.keys(uploadedImages).length === TERRAIN_TYPES.length

  const handleGenerateBoard = () => {
    console.log("Generera-knappen trycktes!")
    if (isImagesFull) {
      const newBoard = generateBoard(uploadedImages)
      setBoard(newBoard)
    }
  }

  const cardsData = TERRAIN_TYPES.map((type) => ({
    type: type,
    imageUrl: uploadedImages[type]?.imageUrl
  })) 

  return(
    <div className="content">
      <h1>Create your own game-board!</h1>
      <p>(remember that higher quality pictures make higher quality tiles..)</p>
      <div className="image-dropzones">
        {TERRAIN_TYPES.map((type) => (
          <ImageUploader
            key={type}
            label={`Upload an image for resource: ${type}`}
            onImageValid={( file, imageUrl, formattedImage ) => handleUploadedImages(type, file, imageUrl, formattedImage)}
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
      </div>
      {board && (
        <>
          <BoardGrid tiles={board}/>
          <CardDisplay cards={cardsData}/>
        </>
      )}
    </div>
  )
}