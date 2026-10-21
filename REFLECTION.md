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

Svar: Har tänkt en del på det för att inte bara jag ska minnas vad funktioner eller variabler gör, men jag försöker också tänka som en utomstående uvecklare som ska sätta sig in i projektet men ändå kunna förstå sammanhanget i koden. Svårt var det i `ImageUploader` t ex. när bilden skulle bli en url, sen skalas och bli en url igen. Viktigt var då att försöka distinktera mellan `rawImageUrl`, `imageUrl`, `formattedFile` och `formattedImage`. Men jag tycker att det är ganska tydligen när man ser händelserna och sammanhanget, då namnen också i exemplet beskriver vad som händer med bilden när den processeras i komponenten.

## 2. Funktioner

Svar: Jag har försökt i den mån det går, utan att ta bort sammanhangen och bryta ut för många filer, hålla funktionerna rena. Processen för bild till url kändes relevant i `ImageUploader` men ju mer komplex komponenten blev kändes funktioner som kunde brytas ut nödvändiga att göra det (till `createImgUrl`). Samma sak med `shuffleTiles`, som används men uppgiften att just blanda brickorna är såpass specifik att den lätt kan vara i sin egen fil. 

## 3. Kommentarer

Svar: Boken poängterar att kommentarer ofta är ett misslyckande med att skriva uttrycksfull kod, eftersom god kod till stor del förklarar sig själv. I applikationen har jag därför minimerat antalet kommentarer och i stället strävat efter att använda tydliga namn på variabler och komponenter. Däremot kan jag tycka att tydlighet kan vara eftersträvansvärt så jag kan lägga till kommentarer bara för att de ska understryka vad den här delen av koden ÄR och låter koden förklara sig själv. 

## 4. Formatering

Svar: Konsekvent formatering är avgörande för att koden ska vara lättläst och professionell. Projektet följer strikta regler för vertikal och horisontell formatering med automatisk formatering via verktyg som Prettier och ESLint. Sammanhängande kodrader har grupperats logiskt, och React-komponenter samt SVG-taggar följer en konsekvent camelCase-standard (som clipPath), vilket förhindrar syntaxfel och gör kodbasen enhetlig.

## 5. Objekt och datastrukturer

Svar: En viktig princip är att dölja interna datastrukturer och exponera beteenden, eller att hålla rena datastrukturer öppna. I projektet har detta tillämpats genom att dela upp koden i "dumb components" (presentationskomponenter) som HexagonTile, vilka enbart tar emot rena dataobjekt (props som koordinater och punkter) utan egen affärslogik. Den faktiska tillstånds- och datalogiken kapslas istället in i containerkomponenter eller anropas via avgränsade funktioner.

```typescript
export function CardModal({ imageSrc , type }: CardModalProps & { imageSrc?: string, type?: string }) {

  if(!imageSrc)
    return null

  return (
    <div className="card-modal">
      <div className="image-container">
        {type && <h3>{type} card</h3>}
        <img src={imageSrc} />
      </div>
    </div>
  )
}
```

## 6. Felhantering

Svar: Jag har satt if-satser som felhantering om indatan är ogiltig, enligt boken istället för att returnera null. T ex. i `ImageUploader` hanteras ogiltiga filtyper och dubbletter explicit genom att sätta ett felmeddelande i tillståndet (setError), vilket direkt renderas ut i gränssnittet som ett tydligt meddelande för användaren. Det gör att felen fångas upp tidigt och på ett kontrollerat sätt i stället för att krascha applikationen. 

```typescript
  if (!fileTypes.includes(file.type)) {
    setError('Invalid format, please use JPEG, PNG or WebP')
    return
  }

  if (uploadedFiles.current.includes(file.name)) {
    setError('This file has already been uploaded')
    return
  }
```

## 7. Gränser

Svar: Förutom uppgiftens krav 2 moduler har jag försökt hålla ute externa bibliotek från applikationen för att som boken säger, ha mer kontroll över den kod du kan påverka, än den du inte kan påverka. Jag har använt förutom ramverk som react/next.js;
- Vitest (för enhetstester)
- Image Prcosseing Module
- Midgard Hex Grid


## 8. Enhetstester

Svar: Jag har använt både reacts inbyggda bibliotek och vitest för enhetstesterna där
komponenterna har testats utifrån kraven jag skrev upp för applikationen. Alla krav är däremot inte möjliga att bekräfta utifrån bara enhetstester eftersom de kan behöva optiskt bedömas för att testas. 
Testerna har kopplats till krav för att tydligare visa vad de gör och varför de finns och förhindra "dirty tests" som tillslut bara gör att man ändrar testerna för att passa koden och vice versa. Kopplar man testerna till kraven så blir de svårare att gå runt och kärnan av deras uppgift måste testas och implementeras i koden.
```typescript
it('R8 warns when an image is loaded again', async () => {
  const file = new File(['dummy content'], 'shared.png', { type: 'image/png' })
  fireEvent.change(input, { target: { files: [file] } })
  fireEvent.change(input, { target: { files: [file] } })
  const errorMessage = await screen.findByText(/already been uploaded/i)
  expect(errorMessage).toBeDefined()
})
```

## 9. Klasser

Svar: Jag har inte använt mig av klasser, men har delat upp applikationen i komponenter som enligt Single Responsibility bara ansvarar för sin egen kod och ansvar. Till exempel `HexagonTile` monterar inte sin egen bild eller vet något om brädet eller ens andra tiles. Den vet bara om sin form och att den har en bild. Ansvaret för brickorna som helhet har `BoardGrid` som håller brickor och sätter ut dem, `ImageUploader` monterar bilden som användaren ger till den och `page` skapar brädet när villkoret uppfyllts att alla resurser har varsin bild. Detta gör att komponenterna blir modulära, lätta att återanvända och enkla att underhålla över tid.

## 10. System

Svar: Ett välstrukturerat system separerar konfiguration och byggprocess från affärslogiken. Applikationen är byggd med Next.js och konfigurerad för automatisk driftsättning via Vercel, vilket skiljer min utvecklingsmiljö från produktionsmiljön.
Jag har tänkt på det när jag byggde systemet som helhet att försöka separera affärslogiken från att läcka ut i hela systemet vilket påverkar skalbarheten och läsbarheten när koden ska bedömas. 

## 11. Din modul i en ny roll

Svar: Jag förändrade readme:n och gjorde den mer förklarande, samt gjorde en index-fil för alla export. Jag förändrade ingenting i modulen som den var, men såklart uppstod tankar om hur den kan förbättras när jag använde modulen i en applikation, t ex. behövde jag parera att den skalar om bildens mått men i praktiken skulle jag då behöva skapa ett canvas element för att få den att faktiskt förändra bilden. Jag gjorde om det i komponenten [ImageUploader](./board-designer/src/components/imageUploader.tsx) istället, men det hade sett mycket renare ut att faktiskt ha det färdigt i modulens funktioner.

## 12. Att använda någon annans modul

Svar: Jag hade lite svårt att tolka modulen men README:n gav ganska bra exempel och jag lärde mig en del vid färdigställningen som gjorde att jag behövde kompromissa en del med slutprodukten av appen. Har inte jobbat med svg och geometriska former förut så jag har lärt mig en hel del om det ämnet.

## 13. AI-samarbete


Svar: Resonerade med Google Gemini om lite ansvarsfördelning och problemsökte en del i importerna av modulerna. Frågade också om att konvertera filer till url:er och att jobba med blobs, samt hur koden skulle fungera för att mappa ut hexagonerna.


Svar: Ja eftersom koden var lite mer komplex så frågade jag den om lite mer lösningar
på problem som uppstod eller att formatera text för att spara tid och skapa en högre kvalitet på textdokument som README:n för krav och vision (under övervakning såklart).
