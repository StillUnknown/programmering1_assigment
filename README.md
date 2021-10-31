## Projekt

Vi har fått i uppgift att göra en fullt fungerande webbshop där man ska kunna köpa album.

En applikation med en kundkorg, där man ska kunna

* Visa vilka album som finns
* Lägga till album i en kundkorg
* Ta bort album i en kundkorg
* Uppdatera antalet album i en kundkorg

Dessa funktioner ska finnas:

* När användaren ändrar antalet album så ska summan uppdateras med en gång
* Det ska inte vara möjligt att skriva in felaktiga värden så som negativa värden i "antalet album boxarna"
* Kundkorgen ska vara tillgänglig från bilden på en kundkorg samt knappen "Checkout"
* Om ordern är på mer än 259kr (eller lika med) så ska det vara fri frakt. Om summan för fri frakt inte uppnåtts så visa
  hur långt (skillnaden) det är kvar till fri frakt

Precis som sist kommer projektplaneringen att ske via Trello.

## Dokumentation

I sann Christoffer Knaving anda gav jag mig på detta på fel sätt, likt projektet med vår hemsida.  
Istället för att bryta ner projektet i småbitar snurrade tankarna att jag ville göra allt på en gång.  
Men jag började med att göra layouten för sidan. Inspiration kom från den bild vi fick se när projektet gavs till oss.  
Att bygga själva hemsidan var inte så svårt när man väl kom igång, även om det kändes att det gått några veckor sedan vi
jobbade med HTML och CSS sist.

## Hemsidan

Hemsidan är som sagt en inspiration från bilden vi fick se. Jag byggde hemsidan som jag trodde att det var uppbyggt i
HTML och var faktiskt väldigt nöjd redan efter första gången. Hade lite problem att få till det här med FR, men det
löste sig tillslut.  
Jag började med att välja ut vilka album jag ville ha med och croppade de albumen från CDON.com. Sedan la jag dessa i
HTML-filen då det var det enda sättet jag visste hur man fick ut bilderna på hemsidan. Lars tipsade att han har lagt
sina album, navbar och footer i en egna JS-filer och på så sätt hållit HTML-filen mer clean. Jag valde att flytta mina
album, navbar och footer och la de i varsin JS-fil och visst, HTML-filen blir betydligt renare utan all den koden.

## Kundkorgen

Jag valde medvetet att hålla denna ganska simpel nu när stylingen inte var ett krav. Sen efter att ha sett Carins så
blir man såklart avundsjuk och vill göra mer med den men allt funkar som det ska så jag vill inte lägga ner mer tid på
den.  
  
<hr>

### Beskriv lite olika lösningar du gjort

Som jag skrev ovan, jag började med att lägga allt jag kunde i HTML-filen men efter Lars tips flyttade jag mina album,
navbar och footer till separata JS-filer. Det gjorde att HTML-filen såg mycket renare ut och det var lättare att hitta
det jag letade efter när jag skulle ha ID och class-namnen.  
Jag började även med att lägga all javascript i samma fil men insåg rätt snabbt att det skulle bli rätt mycket kod och
valde att även bryta upp den i flera olika (borträknat navbar och footer).  
Jag valde först att lägga mina album i varsin funktion och skriva ut till hemsidan för att se att det funkade som jag
tänkt. När det funkade valde jag att skapa en ny array där jag la in alla mina albumfunktioner och skrev bara ut den
arrayfunktionen istället. Efter tips från Michaela om att Lars lagt sina album i en constructor så valde jag att göra
likadant då det blev lättare att loopa med alla knappar direkt än att skapa dom var för sig. Dessutom får dom med sig
all den info jag vill ha med till kundkorgen.

### Beskriv något som var besvärligt att få till

De mer avancerade funktionerna var svåra, speciellt eftersom jag tycker att vi inte gått igenom dom tillräckligt. Jag
vet att vi har ett eget ansvar att hitta det som saknas men ibland räcker det inte med att säga eget ansvar. Jag tycker
denna kursen varit alldeles för kort om man jämför med Webbutveckling_1.  
Jag kan förklara hur jag vill att en funktion ska se fungera men jag har problem att bygga den.  
Jag har suttit väldigt mycket med Michaela och Aram och framförallt Michaela har hjälpt mig med min kod. Att sitta
tillsammans med henne när hon förklarat sin kod har verkligen hjälpt mig att första funktionerna. Att jag sen gått
igenom dom med Aram hjälpte ytterligare.

### Beskriv hur du felsökt ditt program när det uppstått problem

Mestadels genom console.log. Jag vill ju se vad som faktiskt skrivs ut och vad som inte skrivs ut. För att se att mina
knappar funkar la jag en alert så jag tydligt kunde se att jag har kopplat rätt.

### Vad gick bra

Att skapa hemsidan gick väldigt bra. Det var skönt med lite uppfräschning där. I grundutförandet kunde jag själv skriva
funktioner som fick ut albumen på hemsidan.

### Vad gick dåligt

Jag kände mig väldigt stressad och det hjälpte inte direkt till när det väl kom till att skriva funktioner till
projektet. Att min son blev sjuk hjälpte inte direkt till heller då det tar en hel del tid från studierna.  
Jag vet att vi fick det vi behövde till projektet men jag kände ändå att jag behövde hjälp att få allt att funka. Som
jag skrev längre upp, jag hade gärna sett att denna kursen varit några veckor längre så man hann gå mer in på djupet och
skapa mer avancerade funktioner innan projektet ska lämnas in.

### Vad har du lärt dig

Jag vill säga att jag lärt mig att verkligen bryta ner precis ALLT i små steg. Det gäller bara att jag själv inser det
inför varje framtida inlämning. Som person ger jag mig gärna ut i backen med en gång, utan att först kolla lutning och
svårighetsgrad.  
Jag vill även tro att jag har lättare att läsa vad en funktion gör idag.

### Vilka möjligheter ser du med de kunskaper du fått under kursen

Om jag bara får använda mig av de kunskaper jag lärt mig under denna kursen, rätt begränsade måste jag säga.  
Men ut ett större perspektiv är möjligheterna oändliga. De hemsidor jag sett som är skapade av ren css och javascript är
häpnadsväckande! Sen tror jag inte man använder sig av så mycket ren JS på arbetsmarknaden idag utan det är mer REACT
man använder idag.

### Motivera varför du valt en specifik lösning

Jag valde att använda mig av en constructor när jag skapade mina album. Det blev mycket lättare att loopa ut framförallt
buttons än att behöva skriva ut en egen funktion för varje enskild button. Den funktionen där man skriver ut ett helt
HTML-stycke via constructor är väldigt smidig!

### Lämna förslag på förbättringar av din kod

Men den kunskap iallafall jag besitter är det ganska svårt att ge förbättringsförslag på koden jag använt. Jag att det
hade gått att lägga precis allt i en enda loop så, det är klart att det finns förbättringspotential. Det går säkert att
använda färre funktioner för min sida och helt säkert går det att skriva om några så de blir simplare att läsa.

### Lämna exempel på lösningar du valde att inte implementera

En "Ta bort" knapp i varukorgen som tar bort hela albumet. Som min ser ut idag måste man går ner till noll via inputen
för att albumet ska försvinna från varukorgen. Jag hade tänkt göra min layout likt den Carin gjort på min kundkorg då
allt ligger snyggt åt ena sidan men valde att strunta i det i slutändan då stylingen inte var ett krav och all
funktionalitet som ska finnas, finns.

### Andra tankar och reflektioner

Jag har skrivit det flera gånger här redan men jag känner att denna kursen borde varit flera veckor längre. Att läraren
mer eller mindre behöver lägga ut allt som behövs på github är för mig inget gott betyg. Jag kanske är ensam med dessa
tankar dock. Men det kanske är en bra grej att ta med sig till nästa årskull. Sen ska jag också säga att jag haft sjuka
barn hemma som gjort att jag haft mindre tid på mig vilket har gjort mig stressad och kan säkert påverka mitt omdöme.