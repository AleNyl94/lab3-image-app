import { ScaleToRatio, type ImageItem } from 'image-processing-module'

export interface ProcessedImage extends ImageItem {
  imageUrl: string
}

export class ImageAdapter {
  private readonly targetAspectRatio = { width: 1, height: 1 }

  public async resizeToSquare(file: File): Promise<ProcessedImage> {
    const bitmap = await createImageBitmap(file)

    const originalItem: ImageItem = {
      width: bitmap.width,
      height: bitmap.height,
      bytesPerPixel: file.type === 'image/jpeg' ? 3 : 4
    }

    const { image: scaledItem } = new ScaleToRatio(originalItem, this.targetAspectRatio).run()

    const resizedUrl = this.createResizedUrl(bitmap, scaledItem, file.type)
    bitmap.close()

    return {
      ...scaledItem,
      imageUrl: resizedUrl
    }
  }

  private createResizedUrl(bitmap: ImageBitmap, target: ImageItem, mimeType: string): string {
    const canvas = document.createElement('canvas')
    canvas.width = target.width
    canvas.height = target.height

    const ctx = canvas.getContext('2d')
    if (!ctx) {
      throw new Error('Canvas-error')
    }

    ctx.drawImage(bitmap, 0, 0, target.width, target.height)
    return canvas.toDataURL(mimeType, 0.9)
  }
}