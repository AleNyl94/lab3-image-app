/**
 * Properties for the imageUploader component.
 */
export interface ImageUploaderProps {
  label: string,
  onImageValid: (file: File, imageUrl: string, formattedImage: any) => void
}
