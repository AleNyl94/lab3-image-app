/**
 * Function to turn the uploaded image into a URL for the app to handle.
 */
export function createImageUrl( file: File ): string {

  const imageFile = URL.createObjectURL(file)

  return imageFile
}