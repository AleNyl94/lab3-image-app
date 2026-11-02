// src/models/ImageResizer.ts
import { scaleToRatio } from 'image-processing-module'
import { getImageDimension } from '../components/functions/getimagedimensions'
import { createImageUrl } from '../components/functions/createImageUrl'
import { resizeImageToFile } from '../components/functions/resizeImageToFile'

export type ProcessedImage = {
  originalFile: File
  imageUrl: string
  dimensions: { width: number; height: number }
}

export class ImageResizer {
  private readonly targetAspectRatio = { width: 1, height: 1 }

  public async resizeToSquare(file: File): Promise<ProcessedImage> {
    const rawImageUrl = createImageUrl(file)
    const { width, height } = await getImageDimension(rawImageUrl)

    const dimensions = scaleToRatio({
      width,
      height,
      aspectRatio: this.targetAspectRatio
    })

    const resizedFile = await resizeImageToFile(
      rawImageUrl,
      dimensions,
      file.name,
      file.type
    )

    return {
      originalFile: file,
      imageUrl: createImageUrl(resizedFile),
      dimensions
    }
  }
}