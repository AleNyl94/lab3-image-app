import type { ResourceType } from '../constants/catanResources.js'
import type { Card } from '../models/Card.js'

/**
 * View class that renders the file-uploads, the resource-cards and the button for the board.
 */
export class CardView {
  private readonly cardContainer: HTMLElement
  private readonly uploadSite: HTMLElement
  private readonly generateButton: HTMLButtonElement

  public constructor() {
    this.cardContainer = this.getElement<HTMLElement>('#card-container')
    this.uploadSite = this.getElement<HTMLElement>('#upload-container')
    this.generateButton = this.getElement<HTMLButtonElement>('#generate-button')
  }

  public renderCards(cards: ReadonlyArray<Card>): void {
    this.cardContainer.innerHTML = ''
    for (const card of cards) {
      const cardElement = this.createCardElement(card)
      this.cardContainer.appendChild(cardElement)
    }
  }

  public renderUploads(cards: ReadonlyArray<Card>): void {
    this.uploadSite.innerHTML = ''
    for (const card of cards) {
      const uploadElement = this.createFileUpload(card)
      this.uploadSite.appendChild(uploadElement)
    }
  }

  public enableGenerateButton(isEnabled: boolean): void {
    this.generateButton.disabled = !isEnabled
  }

  public bindGenerateButton(handler: () => void): void {
    this.generateButton.addEventListener('click', () => {
      handler()
    })
  }

  public bindGenerateBoard(handler: () => void): void {
    this.generateButton.addEventListener('click', () => {
      handler()
    })
  }

  public bindImageUpload(handler: (file: File, resource: ResourceType) => void): void {
    this.uploadSite.addEventListener('change', (event: Event) => {
      const target = event.target as HTMLInputElement
      const file = target.files?.[0]
      const resource = target.dataset.resource as ResourceType | undefined

      if (file && resource) {
        handler(file, resource)
      }
    })
  }

  private createCardElement(card: Card): HTMLElement {
    const wrapper = document.createElement('div')
    wrapper.className = 'card'

    const title = document.createElement('h3')
    title.textContent = card.getResource()
    wrapper.appendChild(title)

    const imageUrl = card.getImage()
    wrapper.hidden = !imageUrl
    if (imageUrl) {
      const img = document.createElement('img')
      img.src = imageUrl
      wrapper.appendChild(img)
    }
    return wrapper
  }

  private createFileUpload(card: Card): HTMLElement {
    const uploadSite = document.createElement('div')
    uploadSite.className = 'upload-site'

    const input = document.createElement('input')
    input.type = 'file'
    input.dataset.resource = card.getResource()
    input.accept = 'image/*'
    uploadSite.appendChild(input)

    const uploadTitle = document.createElement('h3')
    uploadTitle.textContent = `Upload image for ${card.getResource()}`
    uploadSite.appendChild(uploadTitle)

    return uploadSite
  }

  private getElement<T extends HTMLElement>(selector: string) {
    const element = document.querySelector<T>(selector)
    if (!element) {
      throw new Error('Element was not found')
    }
    return element
  }
}