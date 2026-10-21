# Test Report

## Summary

*Briefly describe how you tested your application – manually through its interface, automatically, or both – clearly enough that someone else could carry out the same tests. What was hardest to test, and why?*

Answer: 
Applikationen har testats genom en kombination av automatiserade enhetstester (med Vitest och React Testing Library) och manuella tester direkt i webbgränssnittet. Automatiska tester användes för kodens funktionalitet och användbarhet, såsom filtypsvalidering och dubbletthantering eller hur den hanterar bildmontering. Manuella tester utfördes för att verifiera det visuella gränssnittet, såsom brädgenerering och bildanpassning i hexagoner. 

Det svåraste att testa var kraven på systemet från ett användarperspektiv, att testa hela applikationen och få en leverans. Hade kunnat göra ett mer omfattande systemtest om mer tid hade funnits vilket säkerligen hade kunnat bocka av fler krav.

## Test Results

| Test case | Requirement | Input | Expected outcome | Actual outcome |
| --------- | ----------- | ----- | ---------------- | -------------- |
| Upload valid image file | R1 | Selected a valid PNG/JPEG image via the upload input. | The image is accepted and successfully passed to the application state. | ✅ As expected. |
| Warn on duplicate image upload | R8 | Uploaded the exact same image file twice in a row. | An error message stating that the file has already been uploaded is displayed. | ✅ As expected (verified via automated unit test). |
| Reject invalid file format | R9 | Uploaded a `.txt` file instead of an accepted image format. | The file is rejected and an error/validation message is shown. | ✅ As expected. |
| Generate board | R3 | Initialized the application view and triggered board generation. | Hexagon tiles are correctly laid out with proper SVG geometry and aspect ratios. | ✅ As expected (verified manually). |
| Handle tile rendering and scaling | R5 / R6 | Rendered image tiles inside the hexagon grid. | Images scale and clip properly inside the tiles without distortion (`clipPath`). | ✅ As expected (verified manually). |

## Known Issues in Third-Party Modules

*List any flaws you found in the other student's module that affected your application, how they show up, and how you handled them (e.g. a workaround, or a link to an issue you filed in the module's repository). Write "None found" if there weren't any.*

Answer: 
Förväntade mig att rutnätet skulle vara någorlunda anpassningsbart, så Catan-brädet kunde inte presenteras som önskat. Det kanske går att lösa på något sätt med modulens funktioner, men jag hittade dock inga anvisningar om det i modulens dokumentation. En beskrivning av modulens samtliga funktioner och metoder hade kanske varit till hjälp.