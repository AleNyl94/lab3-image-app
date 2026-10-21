/**
 * Creates a file from an image.
 * 
 * @param originalSrc The image source link.
 * @param dimensions The images dimensions.
 * @param fileName The name of the file.
 * @param fileType The file's type.
 * @returns The image as an image.
 */
export async function resizeImageToFile(originalSrc: string, dimensions: 
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