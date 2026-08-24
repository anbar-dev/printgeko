# PrintGeko — roadmap di rifacimento

## Obiettivo

Trasformare PrintGeko in un sito piccolo e utile per chi arriva da Reddit con una domanda concreta sulla stampa 3D. La pagina deve dare rapidamente una raccomandazione comprensibile e portare, quando appropriato, al click affiliato Amazon.

Principio editoriale: l'utente non deve sentirsi davanti a un catalogo. Deve percepire che la ricerca è già stata fatta e che gli viene indicata una scelta semplice, con una breve spiegazione del perché.

## Ordine di lavoro

### 1. Definire le categorie di acquisto — COMPLETATO

Per la prima versione scegliamo categorie basate su un bisogno riconoscibile e su una decisione d'acquisto concreta. La ricerca di mercato e le domande ricorrenti nelle community distinguono soprattutto beginner/budget, resin e miniature, grandi formati e multicolore; non serve trasformare ogni caratteristica tecnica in una pagina separata.

#### Categorie principali della v1

| Priorità | Categoria | Domanda a cui risponde | Tecnologia prevalente |
|---|---|---|---|
| 1 | Best first 3D printer | “Qual è la stampante più facile per iniziare?” | FDM |
| 2 | Best budget 3D printer | “Qual è la scelta migliore con un budget limitato?” | FDM |
| 3 | Best 3D printer for miniatures | “Voglio dettagli fini: FDM o resin?” | Resin, con confronto FDM quando utile |
| 4 | Best multicolor 3D printer | “Voglio stampare a più colori senza complicarmi la vita?” | FDM con sistema multicolore |
| 5 | Best large-format 3D printer | “Voglio stampare cosplay, oggetti grandi o pezzi voluminosi?” | FDM |
| 6 | Best 3D printer for functional parts | “Voglio pezzi resistenti o materiali più difficili?” | FDM enclosed / high-temperature |

#### Categorie secondarie della v1

| Categoria | Funzione |
|---|---|
| Parts & maintenance | Aiuta chi possiede già una stampante a trovare filamento, ugelli/hotend, build plate, tubi PTFE e kit di manutenzione. |
| Resin starter setup | Accompagna la scelta resin con wash & cure, resina, guanti e altri elementi necessari per usare la stampante in modo responsabile. |

Le categorie secondarie non devono competere con la scelta della stampante nella home. Saranno una sezione separata per catturare traffico Reddit del tipo “what do I need with my printer?” e “what replacement part should I buy?”.

#### Categorie rimandate

- “Fastest 3D printer”: la velocità sarà un criterio dentro le pagine, non una pagina autonoma nella v1;
- education/schools: domanda più stretta e requisiti diversi;
- professional prototyping: da trattare dentro “functional parts” finché non ci sarà traffico sufficiente;
- singole pagine per marche o modelli;
- guide generiche su slicer, calibrazione e troubleshooting.

Da evitare nella prima versione: troppe marche, confronti interminabili, pagine per specifiche tecniche isolate e prodotti senza un ruolo preciso nel percorso di scelta.

### 2. Ricercare e verificare i prodotti Amazon — BASELINE COMPLETATA

È stata preparata una prima shortlist comparativa per tutte le categorie v1 e per le due categorie secondarie. Il dettaglio è nel file [PRODUCT_RESEARCH.md](PRODUCT_RESEARCH.md).

La ricerca ha usato Amazon.com, pagine ufficiali dei produttori, community Reddit e test editoriali. Il marketplace è ora fissato su Amazon.com e i link canonici verificati sono nel registro [AMAZON_LINKS.md](AMAZON_LINKS.md). Prezzi, disponibilità e venditore vanno comunque ricontrollati poco prima della pubblicazione.

Per ogni categoria bisogna creare una shortlist, poi verificare manualmente la disponibilità su Amazon nel mercato di riferimento prima di pubblicare i link.

Per ogni prodotto raccogliere:

- nome esatto e variante esatta;
- URL Amazon e tag affiliato corretto;
- prezzo o fascia di prezzo, senza promettere un prezzo stabile;
- disponibilità e venditore, se rilevanti;
- volume di stampa;
- velocità dichiarata e velocità realistica;
- materiali supportati;
- livello di assemblaggio e facilità di avvio;
- sistema multicolore, se presente;
- punti di forza;
- limiti o tipo di utente per cui non è adatto;
- ricambi/accessori compatibili;
- data dell'ultima verifica.

Output previsto: un foglio interno con una riga per prodotto e una scheda editoriale breve. Non inserire prodotti solo perché sono popolari: ogni prodotto deve avere un ruolo preciso nel percorso di scelta.

Nota: prezzi, disponibilità e versioni Amazon cambiano. Il sito dovrà usare formule come “check current price” e prevedere una revisione periodica dei link.

### 3. Disegnare il tree minimo del sito — COMPLETATO

Il tree v1 e gli slug sono stati definiti in [SITE_ARCHITECTURE.md](SITE_ARCHITECTURE.md). La struttura finale resta piccola e separa le sei domande principali dalle due aree accessori:

```text
/
├── Home — scelta rapida della stampante
├── 3D Printers
│   ├── Best first 3D printer
│   ├── Best budget 3D printer
│   ├── Best 3D printer for miniatures
│   ├── Best multicolor 3D printer
│   ├── Best large-format 3D printer
│   └── Best 3D printer for functional parts
├── Parts & Accessories
│   ├── Parts & maintenance
│   └── Resin starter setup
├── About
├── Affiliate Disclosure
└── Privacy / Terms / Cookie Policy
```

La struttura è intenzionalmente piccola. Ogni pagina categoria avrà una scelta principale e un'alternativa, usando il registro dei link Amazon.com verificati in [AMAZON_LINKS.md](AMAZON_LINKS.md).

### 4. Progettare il funnel della home — COMPLETATO

Il funnel e il wireframe testuale sono stati definiti in [SITE_ARCHITECTURE.md](SITE_ARCHITECTURE.md). La home deve rispondere entro pochi secondi a tre domande:

1. “Questo sito mi può aiutare?”
2. “Quale categoria descrive il mio caso?”
3. “Qual è la scelta consigliata?”

Schema della home:

```text
Hero
└── “Tell me what you want to print”
    └── breve promessa: ricerca già fatta, scelta semplificata

Scelta rapida
└── 5–7 casi d'uso con link alle pagine categoria

Raccomandazioni principali
└── una scelta per categoria, con “Why this one” e CTA Amazon

Se possiedi già una stampante
└── accessori/ricambi più comuni

Metodo e trasparenza
└── come vengono scelti i prodotti + disclosure affiliate
```

La home non deve contenere una lunga lezione introduttiva prima delle raccomandazioni. Il percorso principale è: intento Reddit → categoria pertinente → scelta principale → CTA Amazon.

### 5. Definire il modello delle pagine prodotto/categoria — PROTOTIPO COMPLETATO

Ogni pagina dovrà seguire sempre lo stesso formato:

1. risposta diretta in alto;
2. prodotto consigliato;
3. motivazione in 2–4 frasi;
4. limite principale o chi dovrebbe scegliere altro;
5. bottone Amazon ben visibile;
6. alternativa più economica o più semplice;
7. mini-confronto solo con i dati utili;
8. accessori necessari, se davvero necessari;
9. disclosure affiliate.

La CTA deve essere esplicita e coerente, per esempio “Check today’s Amazon price”. Non usare il click sull'intera scheda come unico meccanismo di navigazione.

I primi sei prototipi concreti sono [best-first-3d-printer.html](best-first-3d-printer.html), [best-3d-printer-for-miniatures.html](best-3d-printer-for-miniatures.html), [best-3d-printer-for-functional-parts.html](best-3d-printer-for-functional-parts.html), [best-budget-3d-printer.html](best-budget-3d-printer.html), [best-multicolor-3d-printer.html](best-multicolor-3d-printer.html) e [best-large-format-3d-printer.html](best-large-format-3d-printer.html). Le rispettive card della home ora puntano alle pagine locali; gli accessori restano placeholder fino alla loro costruzione.

### 6. Preparare i contenuti per Reddit — BASELINE COMPLETATA

Creare una tabella di intenti Reddit con:

- domanda o problema tipico;
- risposta breve da dare su Reddit;
- pagina PrintGeko da collegare;
- prodotto o categoria consigliata;
- eventuale cautela da dichiarare;
- UTM o altro metodo di tracciamento, se compatibile con le regole del sito e del programma affiliate.

Esempi di intenti:

- “What is the easiest 3D printer for a beginner?”;
- “Which 3D printer should I buy for miniatures?”;
- “What printer can print large cosplay parts?”;
- “Is multicolor worth it?”;
- “What do I need to replace on my printer?”

La tabella degli intenti, le risposte brevi e il collegamento pagina-per-pagina sono nel [REDDIT_PLAYBOOK.md](REDDIT_PLAYBOOK.md). Il primo percorso è già testabile con [best-first-3d-printer.html](best-first-3d-printer.html).

La risposta Reddit deve essere utile anche senza click; il link deve portare a una pagina che continua esattamente la stessa promessa.

### 7. Sistemare fiducia, conformità e precisione

- correggere il naming incoerente “PrintGeko/Prinkgeko”;
- dichiarare chiaramente i link affiliati vicino alle raccomandazioni;
- usare il tag Amazon Associates confermato: `pgk87-20`;
- non presentare come test personali verifiche che non sono state fatte personalmente;
- verificare che i link e le immagini rispettino le regole del programma Amazon;
- controllare cookie banner, privacy e tracking;
- aggiungere data di revisione alle selezioni;
- definire chi aggiorna prezzi, modelli e link non più validi.

### 8. Implementare in WordPress

Solo dopo l'approvazione di categorie, prodotti e tree:

- scegliere se mantenere il tema attuale o sostituire il layout;
- ridurre header, hero e spazio vuoto;
- rendere la prima CTA visibile senza scroll su mobile;
- creare componenti riutilizzabili per le schede;
- collegare correttamente i pulsanti Amazon;
- ottimizzare immagini, performance e responsive;
- verificare accessibilità e testo dei link;
- mantenere URL semplici e stabili.

### 9. Misurare e migliorare

Metriche minime:

- click Amazon per pagina;
- click Amazon per categoria;
- click su mobile vs desktop;
- provenienza Reddit e pagina di atterraggio;
- scroll fino alla prima CTA;
- prodotti/categorie che ricevono click ma non convertono.

Dopo un primo periodo di dati, eliminare le categorie che non ricevono interesse e rafforzare quelle che corrispondono alle domande Reddit più frequenti.

## Deliverable della prima fase

Prima di modificare WordPress, produrre questi elementi:

1. shortlist dei prodotti Amazon per categoria;
2. tabella di verifica prodotti/link/prezzi;
3. tree definitivo del sito;
4. wireframe testuale di home e pagina categoria;
5. elenco delle prime risposte Reddit da collegare;
6. decisione su lingua, mercato Amazon e programma affiliate;
7. elenco delle modifiche WordPress approvate.

Il primo prototipo HTML della home è disponibile in [index.html](index.html). È un artefatto di layout e funnel: i link Amazon principali sono già taggati, mentre le pagine interne restano placeholder fino alla loro creazione.

## Decisioni da prendere insieme

- lingua principale: inglese o italiano;
- mercato Amazon: **Amazon.com confermato**;
- presenza iniziale di ricambi/accessori;
- numero massimo di categorie nella prima versione;
- tono: più personale (“I researched…”) oppure più editoriale;
- livello di trasparenza sul fatto che il sito monetizza tramite affiliate link.

## Prima attività concreta successiva

Le categorie v1, il tree, il funnel e la shortlist Amazon.com sono ora definiti. Il prossimo passo è approvare i contenuti e implementare il layout in WordPress, usando il registro link verificati e ricontrollando disponibilità/prezzo al momento della pubblicazione.
