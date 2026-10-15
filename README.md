# Hex Settlers Board Designer

A web application for designing your own custom theme for Catan – the board and the cards – and viewing the result directly in the browser.

## Vision

Hex Settlers Designer lets board game enthusiasts create their own custom theme for Catan: design the board, upload their own artwork for terrain tiles and cards, and see the complete result, the board and the card deck, presented directly in the browser.

The setup for the tiles that are being made are;
- 4 Forest
- 4 Pasture
- 4 Fields
- 3 Hills
- 3 Mountains
- 1 Desert

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

- **R1:** The user can choose pictures for the different terrains/resources, total 6. 
- **R2:** The user can preview a display of the board with the tiles set up randomly.
- **R3:** The application .

### Cards

- **R4:** The user can create resource cards (5 types).
- **R5:** The user can upload an image for a card, and the image is automatically adapted to the card format without being distorted.
- **R6:** The user can upload custom images for the terrain types, and the images are adapted to fit the hexagon tiles.

### Presentation and quality

- **R7:** The user can view all the resource-cards.
- **R8:** The application warns the user if an uploaded image is uploaded twice.
- **R9:** The user receives a clear error message when uploading an unsupported file type.


## Scope limitations

- Each card uses a fixed template: frame, image, title and text. There is no free-form layout editor.
- All cards of the same type share one image – the user uploads one image per card type, not per card.
- The application ships with default images or colours, so it works immediately without any uploads.

## Testing

All requirements are verified through test cases documented in [TEST_REPORT.md](./TEST_REPORT.md), with at least one test case per requirement.

## Disclaimer

Catan is a registered trademark of CATAN GmbH. This is an unofficial fan project created for educational purposes and is not affiliated with or endorsed by CATAN GmbH.
