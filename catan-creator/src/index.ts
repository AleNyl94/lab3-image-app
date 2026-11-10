import { PageController } from './controllers/pageController.js'

/**
 * Initializes the app via the controller.
 */
function CatanCreator(): void {
  try {
    const appController = new PageController()
    appController.init()
  } catch (error) {
    console.error('Page could not be loaded:', error)
  }
}

document.addEventListener('DOMContentLoaded', CatanCreator)