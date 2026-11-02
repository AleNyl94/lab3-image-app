import { getImageDimension } from '../components/functions/getimagedimensions'
import { createImageUrl } from '../components/functions/createImageUrl'
import { scaleToRatio } from 'image-processing-module'
import { resizeImageToFile } from '../components/functions/resizeImageToFile'

export class ImageHandler {
  private uploadedFiles: string[] = []
  private readonly allowedTypes = ['image/jpeg', 'image/png', 'image/webp']

  public async processFile(file: File): Promise<{ imageUrl: string; formattedImage: any }> {
    if (!this.allowedTypes.includes(file.type)) {
      throw new Error('Invalid format, please use JPEG, PNG or WebP')
    }

    if (this.uploadedFiles.includes(file.name)) {
      throw new Error('This file has already been uploaded')
    }

    this.uploadedFiles.push(file.name)

    const rawImageUrl = createImageUrl(file)
    const { width, height } = await getImageDimension(rawImageUrl)
    const formattedImage = scaleToRatio({ height, width, aspectRatio: { width: 1, height: 1 } })
    const formattedFile = await resizeImageToFile(rawImageUrl, formattedImage, file.name, file.type)
    const imageUrl = createImageUrl(formattedFile)

    return { imageUrl, formattedImage }
  }
}