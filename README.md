# Hex Settlers Board Designer

A web application for designing your own custom theme for Catan – the board and the cards – and viewing the result directly in the browser.

## Vision

Hex Settlers Designer lets board game enthusiasts create their own custom theme for Catan: design the board, upload their own artwork for terrain tiles and cards, and see the complete result – the board and the card deck – presented directly in the browser.

The application does not produce or print any physical items. Everything is created and presented digitally.

## Architecture

The application is built from separate projects. Neither module depends on the application.

| Part | Responsibility |
|---|---|
| **Image Processing Module** (own module, main role) | Crops and scales uploaded images to card format (`scaleToRatio`). Creates display sizes for the card deck – small in the overview, medium in the hand, large in the detail view (`generateThumbnails`). Keeps the whole theme within a memory budget (`scaleBatch`, `weight`). Warns if an image's resolution is too low to look sharp on high-DPI screens (`getImageDetails`). |
| **Midgard Hex Grid** (other student's module) | The board's grid, positions and geometry of each hexagon, and neighbour calculations used for balance checks. |
| **Application** | User interface, rendering of the board and cards, randomization. |

## Requirements

### Board

- **R1:** The user can place terrain types on a 19-tile board, or generate a complete board randomly.
- **R2:** The user can place number tokens (2–12) on the tiles.
- **R3:** The application warns the user if a 6 and an 8 are placed on neighbouring tiles.

### Cards

- **R4:** The user can create resource cards (5 types).
- **R5:** The user can upload an image for a card, and the image is automatically adapted to the card format without being distorted.
- **R6:** The user can upload custom images for the terrain types, and the images are adapted to fit the hexagon tiles.

### Presentation and quality

- **R7:** The user can view the whole card deck in an overview and open a single card in a large detail view.
- **R8:** The application shows how much memory the theme uses, and scales the images down if a chosen limit is exceeded, showing how much memory was saved.
- **R9:** The application warns the user if an uploaded image has too low a resolution to look sharp.
- **R10:** The user receives a clear error message when uploading an unsupported file type.


## Scope limitations

- Each card uses a fixed template: frame, image, title and text. There is no free-form layout editor.
- All cards of the same type share one image – the user uploads one image per card type, not per card.
- The application ships with default images or colours, so it works immediately without any uploads.

## Testing

All requirements are verified through test cases documented in [TEST_REPORT.md](./TEST_REPORT.md), with at least one test case per requirement.

## Disclaimer

Catan is a registered trademark of CATAN GmbH. This is an unofficial fan project created for educational purposes and is not affiliated with or endorsed by CATAN GmbH.
