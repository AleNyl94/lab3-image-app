import { ResourceType } from '../constants/catanResources.js'
import { ImageAdapter, ProcessedImage } from './ImageAdapter.js'

export interface ResourceImage extends ProcessedImage {
  resource: ResourceType
}

export class ImageHandler {
  private uploadedFiles: string[] = []
  private readonly allowedTypes = ['image/jpeg', 'image/png', 'image/webp']
  private readonly adapter: ImageAdapter

  public constructor ( adapter = new ImageAdapter()){
    this.adapter = adapter
  }

  public async processFile(file: File, resource: ResourceType): Promise<ResourceImage> {
    if (!this.allowedTypes.includes(file.type)) {
      throw new Error('Invalid format, please use JPEG, PNG or WebP')
    }

    if (this.uploadedFiles.includes(file.name)) {
      throw new Error('This file has already been uploaded')
    }

    const processedImage = await this.adapter.resizeToSquare(file)
    this.uploadedFiles.push(file.name)

    return  { 
      ...processedImage, 
      resource
    }
  }
}