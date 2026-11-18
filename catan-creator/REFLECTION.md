# Reflektion: Laboration 3 – Skriv en applikation med din modul

<!--
    Komplettera filen och lämna in den tillsammans med din Merge Request.
    Du får skriva på svenska eller engelska.

    Avsnitt 1–10 innehåller de tio reflektioner som uppgiften kräver, en per ämne. Skriv cirka
    4–6 meningar per ämne om hur principerna har – eller inte har – påverkat din kod. Använd
    bokens terminologi och illustrera varje reflektion med konkreta exempel från din egen kod,
    gärna som kodblock. Kod från både applikationen och din modul räknas.

    Läsanvisningar för båda upplagorna av Clean Code finns på kurssidan.

    Avsnitt 11–13 besvarar du också.
-->

## 1. Meningsfulla namn

Svar: I enlighet med *Clean Code* har jag strävat efter *Intention-Revealing Names* så att klasser, metoder och variabler omedelbart kommunicerar sitt syfte för en utomstående utvecklare utan att kräva förklarande kommentarer. Jag har även tillämpat *Solution Domain Names* (som `PageController`, `BoardView`, `ImageAdapter`) så att en utvecklare som kan designmönster som MVC och Adapter direkt förstår arkitekturen, kombinerat med *Problem Domain Names* från Catan-domänen (`Tile`, `ResourceType`, `catanCoordinates`). Dessutom följer metodnamnen principen att klasser och variabler är substantiv medan metoder är verb eller predikat, exempelvis `shuffleTiles()`, `applyImage()` och det booleska predikatet `hasAllImages()`. För att undvika desinformation (*Avoid Disinformation*) skiljer jag tydligt mellan råa `File`-objekt vid uppladdning, bearbetade `ResourceImage`-objekt och strängbaserade `imageUrl`-värden.

```typescript
public hasAllImages(): boolean {
  return this.cards.every(card => Boolean(card.getImage()))
}
```

## 2. Funktioner

Svar: Enligt principen *Do One Thing* ska funktioner vara små, göra en enda sak och göra den väl på en och samma abstraktionsnivå (*One Level of Abstraction per Function*). I `BoardView` tillämpade jag *Stepdown Rule* genom att bryta ned `renderBoard()` i mindre, privata hjälpmetoder: `renderBoard()` ansvarar på hög nivå för att iterera över brickorna, `createTileElement()` skapar själva DOM-elementet och `positionTileElement()` beräknar och sätter de geometriska koordinaterna. Detta gör att man kan läsa klassen uppifrån och ned i fallande abstraktionsnivå utan att blanda DOM-skapande med matematiska offset-beräkningar i samma funktion. Jag har även hållit antalet argument lågt (monadiska och dyadiska funktioner som `applyImage(resourceImage)` och `createTileElement(tile, coord)`) för att göra metoderna lätta att förstå och testa i isolering.

```typescript
public renderBoard(tiles: ReadonlyArray<Tile>): void {
  this.board.innerHTML = ''

  tiles.forEach((tile, index) => {
    const coord = this.catanCoordinates[index]
    if (!coord) {
      return
    }

    const tileElement = this.createTileElement(tile, coord)
    this.board.appendChild(tileElement)
  })
}
```

## 3. Kommentarer

Svar: Robert C. Martin betonar att kommentarer ofta är ett symtom på att vi misslyckats med att uttrycka oss i själva koden (*"Comments Do Not Make Up for Bad Code"*), och att fokus i stället bör ligga på att låta koden förklara sig själv (*Explain Yourself in Code*). I den nya TypeScript-arkitekturen har jag därför eliminerat överflödiga och brusiga kommentarer genom att ersätta dem med uttrycksfulla metodnamn och starka typdefinitioner som `ResourceImage` och `ResourceType`. Istället för att skriva en kommentar som `// Check if all cards have an image before enabling button` uttrycks samma logik direkt genom metodanrop som `this.cardHandler.hasAllImages()` och `this.cardView.enableGenerateButton(...)`. På så sätt undviker jag risken för *misleading comments* som snabbt blir utdaterade när koden refaktoreras.

## 4. Formatering

Svar: Konsekvent vertikal och horisontell formatering är avgörande för att koden ska vara lättläst och följa *The Newspaper Metaphor*, där läsaren möts av en tydlig översikt överst i filen och detaljer längre ned. Jag har använt *Vertical Openness Between Concepts* genom att separera fältdeklarationer, konstruktor, publika metoder och privata hjälpmetoder med tomrader, samtidigt som nära besläktade rader hålls tätt ihop (*Vertical Density* och *Conceptual Affinity*). Exempelvis i `BoardView` deklareras konstanter och egenskaper samlat högst upp, följt av den publika `renderBoard` och därefter de privata hjälpmetoderna som den anropar direkt under (*Vertical Ordering*). Horisontellt hålls raderna korta och tydligt indenterade, där exempelvis `catanCoordinates`-arrayen formaterats visuellt i fem rader som speglar Catan-brädets faktiska 3-4-5-4-3-struktur.

```typescript
private readonly catanCoordinates: ReadonlyArray<{ x: number; y: number }> = [
  { x: 2, y: 0 }, { x: 4, y: 0 }, { x: 6, y: 0 },
  { x: 1, y: 1 }, { x: 3, y: 1 }, { x: 5, y: 1 }, { x: 7, y: 1 },
  { x: 0, y: 2 }, { x: 2, y: 2 }, { x: 4, y: 2 }, { x: 6, y: 2 }, { x: 8, y: 2 },
  { x: 1, y: 3 }, { x: 3, y: 3 }, { x: 5, y: 3 }, { x: 7, y: 3 },
  { x: 2, y: 4 }, { x: 4, y: 4 }, { x: 6, y: 4 }
] as const
```

## 5. Objekt och datastrukturer

Svar: I *Clean Code* beskrivs antitesen mellan objekt och datastrukturer (*Data/Object Anti-Symmetry*): objekt döljer sina interna data bakom abstraktioner och exponerar funktioner som opererar på dessa data, medan datastrukturer exponerar sina data utan nämnvärd logik. I projektet har jag skapat en tydlig hybriduppdelning där klasser som `Board`, `CardHandler`, `Tile` och `Card` agerar som äkta objekt med `private`-inkapslade tillstånd och publika beteenden (`shuffleTiles()`, `applyImage()`, `getResource()`, `setImage()`), samt `ReadonlyArray` för att förhindra att anropande kod muterar interna listor. För dataöverföring mellan lagren använder jag däremot rena datastrukturer (DTO/interface) såsom `ResourceImage` och `Coordinate`, vars enda uppgift är att transportera värden mellan `ImageHandler`, `PageController` och domänmodellerna. Detta upprätthåller *Law of Demeter* genom att kontrollern slipper gräva i modellernas interna struktur.

```typescript
export class Tile {
  private readonly resource: ResourceType
  private imageUrl?: string

  public constructor(resource: ResourceType) {
    this.resource = resource
  }

  public getResource(): ResourceType {
    return this.resource
  }

  public getImage(): string | undefined {
    return this.imageUrl
  }

  public setImage(url: string): void {
    this.imageUrl = url
  }
}
```

## 6. Felhantering

Svar: En central princip i boken är *Use Exceptions Rather Than Return Codes* och *Don't Return Null*, eftersom null-returer tvingar anropande kod att strössla med defensiva null-kontroller. I både `BoardView` och `CardView` har jag kapsla in DOM-uppslagningar i en generisk hjälpmetod `getElement<T>(selector)` som kastar ett explicit undantag (`throw new Error('Element was not found')`) om ett nödvändigt HTML-element saknas, istället för att returnera `null`. Likaså kastar `ImageHandler.processFile()` tydliga undantag vid ogiltiga filformat eller om samma fil laddas upp två gånger, vilket fångas i `PageController` med `try/catch` utan att grumla den normala affärslogiken. På så sätt hålls huvudflödet rent och fel fångas tidigt (*Fail Fast*) med kontextrika felmeddelanden.

```typescript
private getElement<T extends HTMLElement>(selector: string): T {
  const element = document.querySelector<T>(selector)
  if (!element) {
    throw new Error('Element was not found')
  }
  return element
}
```

## 7. Gränser

Svar: Kapitel 8 i *Clean Code* handlar om att hantera tredjepartskod genom tydliga gränssnitt (*Clean Boundaries*) så att resten av applikationen inte blir direkt beroende av externa paket eller deras interna datatyper. I detta projekt integreras två externa moduler: min egen `image-processing-module` (`lab2-ts-module`) och en medstudents `midgard-hex-grid`. För att skydda applikationen mot förändringar i bildmodulen implementerade jag **Adapter-mönstret** via klassen `ImageAdapter`, som kapslar in anropen till `GetImageDetails` och `ScaleBatch` och översätter dem till applikationens egna metod `resizeToSquare(file)`. Likaså är `midgard-hex-grid` helt isolerad inuti `BoardView`, vilket innebär att varken `Board`, `Tile` eller `PageController` har någon kännedom om tredjepartsbiblioteket.

```typescript
// ImageHandler pratar enbart med vår egen ImageAdapter, aldrig direkt med tredjepartsmodulen:
const processedImage = await this.adapter.resizeToSquare(file)
this.uploadedFiles.push(file.name)
```

## 8. Enhetstester

Svar: Enligt *Clean Code* är testkoden lika viktig som produktionskoden och bör följa **F.I.R.S.T.**-principerna (*Fast, Independent, Repeatable, Self-Validating, Timely*) samt mönstret *Build-Operate-Check* (Arrange-Act-Assert). Genom att bryta ut applikationen i rena TypeScript-klasser och använda mockar (`vi.mock` och `vi.fn`) i Vitest är alla 14 tester i de 5 testfilerna helt oberoende av varandra (`beforeEach` nollställer tillstånd och mockar) och exekverar på några tiotals millisekunder. Varje test fokuserar på ett enda koncept (*Single Concept per Test*), exempelvis att `Board` fördelar exakt rätt antal resurser eller att `PageController` triggar `BoardView.renderBoard` med 19 brickor när genereringsknappens callback anropas. Genom att mocka `ImageAdapter` i `imageHandler.test.ts` och vyerna i `pageController.test.ts` kan testerna köras upprepade gånger i alla miljöer utan beroende av riktiga bildfiler eller webbläsarrendering.

```typescript
it('should apply image to all tiles of the specified resource', () => {
  const resourceDesert: ResourceType = 'desert'
  const mockResourceImage: ResourceImage = {
    height: 100,
    width: 100,
    bytesPerPixel: 3,
    imageUrl: 'blob:desert-img',
    resource: resourceDesert
  }
  board.applyImage(mockResourceImage)

  const desertTiles = board.getTiles().filter(t => t.getResource() === 'desert')
  expect(desertTiles.every(t => t.getImage() === 'blob:desert-img')).toBe(true)
})
```

## 9. Klasser

Svar: Efter att ha skrivit om applikationen från funktionella React-komponenter till objektorienterad TypeScript har **Single Responsibility Principle (SRP)** och hög *Cohesion* (sammanhållning) varit vägledande för klassdesignen. Varje klass har en enda anledning att ändras: `Board` ansvarar uteslutande för de 19 brickornas tillstånd och blandning, `CardHandler` ansvarar för resurskorten, `ImageHandler` ansvarar för filvalidering och dubblettkontroll, `ImageAdapter` ansvarar för kommunikationen med bildmodulen, och `BoardView`/`CardView` ansvarar enbart för DOM-rendering. `PageController` agerar koordinator mellan modell och vy utan att själv innehålla bildbehandlings- eller DOM-logik. Klasserna har hög sammanhållning eftersom nästan samtliga metoder i exempelvis `BoardView` arbetar mot klassens privata fält (`board`, `hexGrid`, `hexDiameter`, `catanCoordinates`).

## 10. System

Svar: Boken betonar vikten av *Separation of Concerns* på systemnivå – att skilja applikationens uppstart och konstruktion från dess körningslogik, samt att hålla bygg- och driftsättningskedjan ren. I projektets `src/index.ts` sker endast instansiering av `PageController` och anrop till `init()`, medan all domän- och vylogik är tydligt uppdelad i mapparna `models/`, `view/`, `controllers/` och `constants/`. Vidare har jag migrerat byggsystemet till en renodlad **Vite + TypeScript**-miljö för produktionsbygge och driftsättning på Vercel, samt konverterat lokala submoduler till spårade paket så att byggmiljön i molnet är deterministisk och portabel mellan Windows och Linux. Denna tydliga separation mellan byggkonfiguration (`vite build`), testmiljö (`vitest`) och applikationsarkitektur gör systemet lätt att underhålla och bygga vidare på.

## 11. Din modul i en ny roll

Svar: När jag integrerade min egen modul från Laboration 2 (`lab2-ts-module` / `image-processing-module`) i den nya TypeScript-applikationen insåg jag hur viktigt ett tydligt och plattformsoberoende paketgränssnitt är. Jag skapade en dedikerad `ImageAdapter`-klass i applikationen som wrappar modulens klasser (`GetImageDetails` och `ScaleBatch`) bakom en enkel metod (`resizeToSquare`), vilket gjorde att resten av applikationen slapp känna till hur `HTMLCanvasElement` eller bilddetaljer hanteras internt i modulen. Under driftsättningen på Vercel upptäckte jag även att re-exporterna i modulens `index.ts` var skiftlägeskänsliga på Linux (`./src/getimagedetails.js` kontra faktiska filnamn), vilket gav mig värdefulla insikter i hur man paketerar och exporterar en TypeScript-modul så att den fungerar friktionsfritt för en annan utvecklare och bundler (Vite/Rolldown).

## 12. Att använda någon annans modul

Svar: Att använda medstudentens modul `midgard-hex-grid` i `BoardView` visade styrkan i att delegera geometrisk matematik till en extern modul, men synliggjorde också utmaningarna när en moduls API har ett mer generellt syfte än applikationens domän. Modulen gjorde det enkelt att räkna ut pixelkoordinater via `this.hexGrid.getCenterPosition(coord, this.hexDiameter)` med orienteringen `'x-dominated'`, men jag behövde själv räkna ut hur ett Catan-bräde mappas i dubbla koordinater (`catanCoordinates`) och hur hela rutnätet centreras i container-elementet genom att beräkna offset från mittbrickan `{ x: 4, y: 2 }`. Genom att isolera all denna logik i `BoardView.positionTileElement()` kunde jag dra nytta av modulens beräkningar utan att låta dess koordinatsystem läcka ut till `Board`- eller `Tile`-modellerna.

## 13. AI-samarbete

Svar: Jag har använt Google Gemini som bollplank under utvecklingen, framför allt för felsökning av bygg- och driftsättningskedjan mot Vercel (hantering av inbäddade Git-submoduler, lokal `file:`-paketlänkning i `package.json` och skiftlägeskänsliga importer i Linux-miljö). Utöver det har jag diskuterat hur man bäst konstruerar isolerade enhetstester och klassmockar i Vitest (`vi.mock` och `vi.fn` för `BoardView`, `CardView` och `ImageAdapter`) så att testerna verifierar rätt beteende utan att bli tautologiska eller beroende av DOM-trädet.

Svar: Ja, AI-stödet har sparat mycket tid vid diagnostisering av felmeddelanden från både Vercel/Vite-bundlern och Vitest, samt hjälpt till att strukturera om dokumentationen när projektet gick från en tidigare React/Next.js-prototyp till en renodlad objektorienterad TypeScript/MVC-applikation. All kod och alla tester har dock granskats, anpassats och verifierats manuellt av mig för att säkerställa att de följer kursens krav och principerna i *Clean Code*.