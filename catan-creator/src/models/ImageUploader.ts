import { ImageResizer } from './ImageResizer.js'
import type { ProcessedImage } from './ImageResizer.js'

export class ImageUploadService {
  private readonly uploadedFileNames = new Set<string>()
  private readonly allowedMimeTypes = ['image/jpeg', 'image/png', 'image/webp']
  private readonly resizer: ImageResizer

  constructor(resizer = new ImageResizer()) {
    this.resizer = resizer
  }

  public getAcceptedFormatsString(): string {
    return this.allowedMimeTypes.join(', ')
  }

  public async handleUpload(file: File): Promise<ProcessedImage> {
    this.validateFileType(file.type)
    this.validateNotDuplicate(file.name)

    const processedImage = await this.resizer.resizeToSquare(file)
    
    // Spara först EFTER att bildbearbetningen faktiskt lyckades!
    this.uploadedFileNames.add(file.name)

    return processedImage
  }

  private validateFileType(mimeType: string): void {
    if (!this.allowedMimeTypes.includes(mimeType)) {
      throw new Error('Invalid format, please use JPEG, PNG or WebP')
    }
  }

  private validateNotDuplicate(fileName: string): void {
    if (this.uploadedFileNames.has(fileName)) {
      throw new Error('This file has already been uploaded')
    }
  }
}