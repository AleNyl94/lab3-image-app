import { ImageResizer, ProcessedImage } from './ImageResizer.js'

export class ImageHandler {
  private uploadedFiles: string[] = []
  private readonly allowedTypes = ['image/jpeg', 'image/png', 'image/webp']
  private readonly resizer: ImageResizer

  public constructor (resizer = new ImageResizer()){
    this.resizer = resizer
  }

  public async processFile(file: File): Promise<ProcessedImage> {
    if (!this.allowedTypes.includes(file.type)) {
      throw new Error('Invalid format, please use JPEG, PNG or WebP')
    }

    if (this.uploadedFiles.includes(file.name)) {
      throw new Error('This file has already been uploaded')
    }

    const processedImage = await this.resizer.resizeToSquare(file)
    this.uploadedFiles.push(file.name)

    return processedImage
  }
}