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

Svar:

## 2. Funktioner

Svar:

## 3. Kommentarer

Svar:

## 4. Formatering

Svar:

## 5. Objekt och datastrukturer

Svar:

## 6. Felhantering

Svar:

## 7. Gränser

Svar:

## 8. Enhetstester

Svar:

## 9. Klasser

Svar:

## 10. System

Svar:

## 11. Din modul i en ny roll

Svar: Jag förändrade readme:n och gjorde den mer förklarande, samt gjorde en index-fil för alla export. Jag förändrade ingenting i modulen som den var, men såklart uppstod tankar om hur den kan förbättras när jag använde modulen i en applikation, t ex. behövde jag parera att den skalar om bildens mått men i praktiken skulle jag då behöva skapa ett canvas element för att få den att faktiskt förändra bilden. Jag gjorde om det i komponenten [ImageUploader](./board-designer/src/components/imageUploader.tsx) istället, men det hade sett mycket renare ut att faktiskt ha det färdigt i modulens funktioner.

## 12. Att använda någon annans modul

Svar: Jag hade lite svårt att tolka modulen men README:n gav ganska bra exempel och jag lärde mig en del vid färdigställningen som gjorde att jag behövde kompromissa en del med slutprodukten av appen. Har inte jobbat med svg och geometriska former förut så jag har lärt mig en hel del om det ämnet.

## 13. AI-samarbete


Svar: Resonerade med Google Gemini om lite ansvarsfördelning och problemsökte en del i importerna av modulerna. Frågade också om att konvertera filer till url:er och att jobba med blobs, samt hur koden skulle fungera för att mappa ut hexagonerna.


Svar: Ja eftersom koden var lite mer komplex så frågade jag den om lite mer lösningar
på problem som uppstod eller att formatera text för att spara tid och skapa en högre kvalitet på textdokument som README:n för krav och vision (under övervakning såklart).
