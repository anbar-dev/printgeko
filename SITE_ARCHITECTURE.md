# PrintGeko — tree definitivo e funnel minimo

**Obiettivo:** aiutare una persona proveniente da Reddit a riconoscere il proprio caso, vedere una scelta già filtrata e arrivare alla CTA Amazon con il minimo attrito.

## 1. Tree v1

```text
/
├── Home — Choose the right 3D printer
├── 3D Printers
│   ├── /best-first-3d-printer/
│   ├── /best-budget-3d-printer/
│   ├── /best-3d-printer-for-miniatures/
│   ├── /best-multicolor-3d-printer/
│   ├── /best-large-format-3d-printer/
│   └── /best-3d-printer-for-functional-parts/
├── Accessories
│   ├── /3d-printer-maintenance/
│   └── /resin-starter-kit/
├── About
├── Affiliate Disclosure
├── Privacy Policy
├── Terms
└── Cookie Policy
```

## 2. Cosa deve comparire nel menu

Desktop:

```text
PrintGeko     3D Printers ▾     Accessories     About
```

Mobile:

```text
PrintGeko     Menu
```

Nel menu a tendina “3D Printers” entrano solo le sei domande d'acquisto. Disclosure, privacy, termini e cookie policy restano nel footer, senza rubare spazio alla prima CTA.

## 3. Funnel della home

```text
Reddit post
    ↓
Pagina PrintGeko pertinente
    ↓
Risposta diretta in alto
    ↓
Una scelta principale + limite dichiarato
    ↓
CTA “Check today’s Amazon price”
    ↓
Alternativa solo se il primo prodotto non è adatto
```

La home non deve essere un catalogo. Deve essere un selettore rapido che rimanda alla categoria corretta.

### Hero

Testo proposto in inglese:

> **Need a 3D printer? I already narrowed it down.**  
> Tell me what you want to print and I’ll point you to the best fit — without making you compare 40 models.

CTA primaria: **Choose by what you want to print**  
CTA secondaria: **I already own a printer**

La frase “I already narrowed it down” comunica ricerca già fatta senza affermare test personali non eseguiti.

### Scelta rapida

Sei card, ordinate per intenzione:

| Card | Microcopy | Destinazione |
|---|---|---|
| I’m a beginner | I want the easiest first printer | `/best-first-3d-printer/` |
| I have a small budget | I want the best value without buying junk | `/best-budget-3d-printer/` |
| I print miniatures | I care about fine detail | `/best-3d-printer-for-miniatures/` |
| I want multiple colors | I want color without a complicated setup | `/best-multicolor-3d-printer/` |
| I need large prints | Cosplay, props and oversized parts | `/best-large-format-3d-printer/` |
| I need strong parts | Functional parts and tougher materials | `/best-3d-printer-for-functional-parts/` |

Sotto le card: **Already have a printer? Find filament, replacement parts and resin gear →** `/3d-printer-maintenance/` oppure `/resin-starter-kit/`.

### Raccomandazioni in home

La home mostra al massimo tre blocchi, non tutte le alternative:

1. **Best first printer:** Bambu Lab A1 Mini;
2. **Best for miniatures:** ELEGOO Mars 5 Ultra;
3. **Best functional printer:** QIDI Q2.

Ogni blocco contiene solo: prodotto, destinatario, tre motivi, un limite e CTA Amazon. Le altre categorie vengono raggiunte dalle card.

## 4. Struttura di ogni pagina categoria

```text
Breadcrumb
H1: domanda dell'utente
Answer strip: “Short answer: choose …”
Product card principale
  ├── prodotto e variante precisa
  ├── 3 motivi concreti
  ├── “Skip this if …”
  └── CTA Amazon
Alternative card
Mini confronto: solo 3–5 dati utili
What you also need
How this pick was made
Affiliate disclosure + last reviewed
```

Esempio di apertura:

> **Short answer: choose the ELEGOO Mars 5 Ultra.**  
> It is the compact resin pick when miniature detail matters most. Skip it if you do not want gloves, washing, curing and resin handling.

La CTA deve comparire prima del primo scroll lungo su mobile e ripetersi una sola volta dopo il confronto.

## 5. Regole editoriali per il funnel

- Una pagina = una domanda d'acquisto.
- Una scelta principale = un solo bottone Amazon principale.
- L'alternativa serve a evitare un acquisto sbagliato, non ad aprire un confronto infinito.
- I prezzi non vanno scritti nella grafica: cambiano rapidamente.
- Usare sempre la variante esatta e il link del registro in `AMAZON_LINKS.md`.
- Dichiarare i limiti vicino alla CTA: open-frame, resin workflow, volume, materiali o scarti multicolore.
- Non chiamare “tested by us” prodotti che non sono stati testati personalmente.
- La disclosure affiliate deve essere visibile nella pagina, non nascosta solo nel footer.

