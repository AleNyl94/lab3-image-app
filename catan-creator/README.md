# Catan Creator

A web-based application built in TypeScript (OOP) and Vite, that lets users design their custom **Settlers of Catan**-boards with 
the their own pictures based on the games six resource-types.

---

## Vision

The goal and vision with **Catan Creator** is to offer the user a visual tool that gives a correct preview of the theoretical board based on the pictures that the user uploaded, along with resource-cards. The app does not print or take any orders, it is simply for visuals.
It creates the tiles based on the formula from the original game with a total of 19 tiles spread out on 6 types of resources. You are free to use any pictures you like to design the game you want (use everything from snowy glaciers, tropical forests or pasta).

The application is constructed after the **MVC-pattern(Model-View-Controller)** and uses the *Clean Code*-principles, designed to make functional and reusable code with third-party modules.

---

## Requirements

| Req-ID | Description | Class |
| :--- | :--- | :--- |
| **R1** | Board should be initialized with exactly 19 tiles with the correct amount based on the Catan-formula. (4 *forest*, 4 *fields*, 4 *pasture*, 3 *mountains*, 3 *hills*, 1 *desert*). | `Board`, `Tile`, `catanResources` |
| **R2** | User should be able to upload an image (PNG/JPEG/WebP) for every resource-type. | `CardView`, `PageController`, `ImageHandler` |
| **R3** | Uploaded images should be resized and scaled to fit the tiles and cards. | `ImageHandler`, `ImageAdapter` |
| **R4** | System should reject images uploaded twice or unallowed file-types.| `ImageHandler` |
| **R5** | The user should not be offered to genereate a board before the image-uploading is finished. | `CardHandler`, `CardView`, `PageController` |
| **R6** | When the user presses the generate-button it should shuffle the tiles and place them in a 3-4-5-4-3-hexagon. | `Board`, `BoardView`, `PageController` |

---

## Project Structure

Project is divided in clear layers according to the MVC:

```text
catan-creator/
├── src/
│   ├── constants/
│   │   └── catanResources.ts    # Resource-types and their amounts for Catan.
│   ├── controllers/
│   │   └── pageController.ts    # Controlls and ties the domain together. (MVC Controller)
│   ├── models/
│   │   ├── Board.ts             # Handles the 19 tiles, shuffles and mounts the images on the tiles. 
│   │   ├── Card.ts              # Resource-card, holding the image and displaying the resource.
│   │   ├── CardHandler.ts       # Handles the card-collection.
│   │   ├── ImageAdapter.ts      # Adapter for the picture-module, image-processing-module.
│   │   ├── ImageHandler.ts      # Validating images and adding the resource to the processed image from the adapter.
│   │   └── Tile.ts              # The game tile with a resource and an image-holder.
│   ├── view/
│   │   ├── BoardView.ts         # Rendering and placing tiles, using the module midgard-hex-grid
│   │   └── ImageView.ts         # (CardView) Rendering upload-sites and cards
│   └── index.ts                 # Starting point for the app
├── test/                        # Unit tests for each class
│   ├── board.test.ts            
│   ├── cardHandler.test.ts      
│   ├── imageHandler.test.ts     
│   ├── pageController.test.ts   
│   └── tilecard.test.ts         
├── index.html                   # HTML-structure
└── package.json                 
```

---

## Integrerade Moduler

1. **`image-processing-module` (`lab2-ts-module`)**  
   *My own module from Laboration 2.* Used in `ImageAdapter` (`ImageItem` och `ScaleBatch`) to scale them down to squares and formatting them to the type **ImageItem**.
2. **`midgard-hex-grid`**  
   *Third-part moodule developed by another student* Used in `BoardView` to calculate tiles center position (`getCenterPosition`) for every hexagon in a `'x-dominated'` coordinate-system.

---

## Install

### Prerequisites
* **Node.js** (v18 or newer)
* **npm**

### 1. Installing dependencies
Clone the repo and install the required packages:

```bash
cd catan-creator/
npm install
```

### 2. Start the development server
Run Vite in dev-mode with Hot Module Replacement (HMR):

```bash
npm run dev
```
Open the link in the terminal (usually `http://localhost:5173`) in your browser.

### 3. Production build
To compile and package the application to `dist/`-folder:

```bash
npm run build
```

---

## Testing
Project uses **Vitest** and **jsdom** for automated unit-testing. Every domain-model as well as  handling images and controller-logic is tested with mocks and dummy-files for dependency (´vi.mock´ & `vi.fn`).

Run complete test-suite with:
```bash
npm test
```

For a detailed description and documentation of unit tests, see [TEST_REPORT.md](./TEST_REPORT.md). For reflections regarding architecture and *Clean Code*, see [REFLECTION.md](./REFLECTION.md).