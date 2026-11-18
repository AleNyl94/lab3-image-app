# Test Report

## Summary

*Briefly describe how you tested your application – manually through its interface, automatically, or both – clearly enough that someone else could carry out the same tests. What was hardest to test, and why?*

Answer: 
Applikationen har testats genom en kombination av automatiserade enhetstester i **Vitest** (med `jsdom`-miljö) och manuella systemtester direkt i webbgränssnittet. De automatiserade enhetstesterna fokuserar på domänmodellerna (`Board`, `Tile`, `Card`, `CardHandler`), bildhanteringen (`ImageHandler` med mockad `ImageAdapter`) samt kontrollern (`PageController` med mockade vyer som `BoardView` och `CardView`). Genom att isolera enheterna med hjälp av testdubblar (`vi.mock` och `vi.fn`) verifieras affärslogik, tillståndsförändringar och interaktioner mellan MVC-lagren automatiskt vid varje körning av `npm test`. Manuella tester utfördes för att verifiera det visuella gränssnittet i webbläsaren, såsom att CSS-klippningen och den geometriska positioneringen av de 19 hexagonerna i `#board` renderas korrekt utifrån koordinaterna från `midgard-hex-grid`.

Det svåraste att testa automatiskt var gränssnittet mellan kontrollern, vyerna och webbläsarens DOM/Web API:er (såsom `File`, `blob:`-URL:er och DOM-element i `BoardView` respektive `CardView`), samt den visuella layouten av hexagonbrädet. Eftersom vyerna direkt manipulerar DOM-trädet och läser av elementdimensioner (`clientWidth`/`clientHeight`) krävdes noggrann mockning av vy-konstruktorerna i `pageController.test.ts` samt mockning av `ImageAdapter` i `imageHandler.test.ts` för att undvika att testerna blev beroende av verklig bildrendering eller fullständig HTML-struktur.

## Test Results

| Test case | Requirement | Input | Expected outcome | Actual outcome |
| --------- | ----------- | ----- | ---------------- | -------------- |
| Initialize standard Catan board & distribution | R1 / Board | `new Board()` | Brädet skapas med exakt 19 brickor (`Tile`) med rätt resursfördelning (4 forest, 4 fields, 4 pasture, 3 mountains, 3 hills, 1 desert). | ✅ As expected (verified via `test/board.test.ts`). |
| Apply resource image to matching board tiles | R2 / Board | `board.applyImage(mockResourceImage)` för resursen `'desert'`. | Alla brickor av den angivna resurstypen uppdateras med den nya bild-URL:en (`blob:desert-img`). | ✅ As expected (verified via `test/board.test.ts`). |
| Preserve tiles when shuffling board | R3 / Board | `board.shuffleTiles()` | Ordningen slumpas men samtliga 19 brickor och deras resurstyper bevaras intakta. | ✅ As expected (verified via `test/board.test.ts`). |
| Manage resource cards and track completion state | R4 / CardHandler | `new CardHandler(RESOURCE_TYPES)` följt av `applyImage()` för respektive resurs. | `hasAllImages()` returnerar `false` initialt och slår om till `true` först när alla 6 resurstyper har tilldelats en bild. | ✅ As expected (verified via `test/cardHandler.test.ts`). |
| Process uploaded image file via adapter | R5 / ImageHandler | `imageHandler.processFile(fakeFile, 'forest')` med en giltig PNG-fil. | `ImageAdapter.resizeToSquare()` anropas med filen och ett `ResourceImage`-objekt med rätt resurs och `blob:`-URL returneras. | ✅ As expected (verified via `test/imageHandler.test.ts`). |
| Initialize controller and disable generate button | R6 / PageController | `controller.init()` | Uppladdningsfält renderas via `CardView.renderUploads()` och genereringsknappen är inaktiverad (`enableGenerateButton(false)`). | ✅ As expected (verified via `test/pageController.test.ts`). |
| Trigger board generation via controller | R7 / PageController | Trigga callbacken registrerad via `CardView.bindGenerateButton()`. | Brädet blandas och `BoardView.renderBoard()` anropas en gång med en lista på 19 brickor. | ✅ As expected (verified via `test/pageController.test.ts`). |
| Visual hexagon grid layout and clipping | R8 / UI | Ladda upp 6 resursbilder i webbläsaren och klicka på "Generate Board". | De 19 hexagonerna positioneras centrerat i Catan-formation med `hexDiameter = 120` utan visuell förvrängning. | ✅ As expected (verified manually). |

## Known Issues in Third-Party Modules

*List any flaws you found in the other student's module that affected your application, how they show up, and how you handled them (e.g. a workaround, or a link to an issue you filed in the module's repository). Write "None found" if there weren't any.*

Answer: 
Modulen `midgard-hex-grid` tillhandahåller beräkning av mittpunkter (`getCenterPosition`) utifrån ett koordinatsystem (`x-dominated`), men saknar inbyggt stöd för att automatiskt generera eller centrera en specifik brädesform som ett klassiskt Catan-bräde. För att hantera detta skapades en tydlig avgränsning i `BoardView` med en hårdkodad, oföränderlig koordinatstruktur (`catanCoordinates`) samt en egen centreringsberäkning (`offsetX` och `offsetY` baserat på mittbrickan `{ x: 4, y: 2 }`) så att brädet alltid centreras korrekt i `#board`-elementet.