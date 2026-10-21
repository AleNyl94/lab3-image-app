/**
 * Gets the dimension from the url containing the image.
 *
 * @param url The adress with the image.
 * @returns The image's dimensions.
 */
export function getImageDimension(url: string): Promise<{ width: number, height: number }> {
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