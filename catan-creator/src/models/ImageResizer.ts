import type { ImageItem } from 'image-processing-module'
import { ScaleToRatio } from 'image-processing-module'

export type ProcessedImage = {
  imageUrl: string,
  width: number,
   height: number 

  }


export class ImageResizer {
  private readonly targetAspectRatio = { width: 1, height: 1 }

  public async resizeToSquare(file: File): Promise<ProcessedImage> {
    const rawImageUrl = this.createImageUrl(file)
    const { width, height } = await this.getImageDimension(rawImageUrl)

    const imageItem : ImageItem = {
      width,
      height,
      bytesPerPixel: this.getBytesPerPixel(file.type)
    }

    const scaledDimensions = new ScaleToRatio(imageItem, this.targetAspectRatio).run()

    const resizedFile = await this.resizeImageToFile(
      rawImageUrl,
      scaledDimensions,
      file.name,
      file.type
    )

    return {
      imageUrl: this.createImageUrl(resizedFile),
      width: scaledDimensions.width,
      height: scaledDimensions.height
    }
  }

  private createImageUrl(file: File): string {
  const imageFile = URL.createObjectURL(file)
  return imageFile
  }

  private getImageDimension(url: string): Promise<{ width: number, height: number }> {
    return new Promise((resolve, reject) => {
      const img = new Image()
      img.onload = () => {
        resolve({
          width: img.naturalWidth,
          height: img.naturalHeight
        })
      }
      img.onerror = (err) => reject(err)
      img.src = url 
    })
  }

  private async resizeImageToFile(originalSrc: string, dimensions: 
    { width: number; height: number }, fileName: string, fileType: string): Promise<File> {
    return new Promise((resolve, reject) => {
      const img = new Image()
      img.onload = () => {
        const canvas = document.createElement('canvas')
        canvas.width = dimensions.width
        canvas.height = dimensions.height
        const ctx = canvas.getContext('2d')
        
        if (!ctx) {
          reject(new Error('Canvas-error'))
          return
        }

        ctx.drawImage(img, 0, 0, dimensions.width, dimensions.height)

        canvas.toBlob((blob) => {
          if (blob) {
            const file = new File([blob], fileName, { type: fileType })
            resolve(file)
          } else {
            reject(new Error('Could not create blob'))
          }
        }, fileType, 0.9)
      }
      img.onerror = (err) => reject(err)
      img.src = originalSrc
    })
  }

  private getBytesPerPixel(mimeType: string): number {
    return mimeType === 'image/jpeg' ? 3 : 4
  }
}