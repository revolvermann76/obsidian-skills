---
name: note-to-pdf
description: Konvertiert eine Obsidian-Notiz (Markdown, inkl. YAML-Frontmatter, Tabellen und LaTeX-Formeln in $...$/$$...$$) in ein PDF und legt es im selben Ordner unter gleichem Dateinamen ab (nur .pdf statt .md). Verwende diesen Skill, wenn der Nutzer ein PDF aus einer Notiz erstellen oder eine Notiz exportieren/drucken möchte.
---

# Note to PDF

Erzeugt aus einer Markdown-Notiz ein sauber formatiertes PDF — inklusive korrekt gerenderter LaTeX-Formeln und Tabellen. Das PDF landet immer neben der Quellnotiz, mit gleichem Dateinamen (`.md` → `.pdf`).

## Funktionsweise

`convert.js` (in diesem Skill-Ordner) rendert die Notiz über eine Node.js-Pipeline:

1. **markdown-it** + **markdown-it-texmath** + **katex** wandeln Markdown inkl. `$...$`/`$$...$$`-Formeln in HTML um.
2. YAML-Frontmatter wird abgetrennt; nur `title` fließt in den HTML-`<title>` ein, der Rest erscheint nicht im PDF.
3. Wikilinks (`[[Ziel]]`, `[[Ziel|Alias]]`) werden zu reinem Text, da sie im PDF nicht klickbar sein können.
4. CSS sorgt für saubere Formatierung (Schrift, Tabellen mit Rahmen, graue Kopfzeile) und kontrollierte Seitenumbrüche (Tabellenzeilen und Überschriften werden nicht mitten im Umbruch zerrissen).
5. **puppeteer-core** steuert ein bereits lokal installiertes Edge/Chrome an (kein Chromium-Download nötig) und druckt die HTML-Seite als PDF (A4, feste Ränder).

Die npm-Abhängigkeiten liegen persistent in `node_modules/` innerhalb dieses Skill-Ordners — kein Neuinstallieren bei jedem Aufruf.

## Nutzung

Einmalig, falls `node_modules/` in diesem Skill-Ordner noch fehlt (z. B. nach frischem Checkout):

```bash
cd .claude/skills/note-to-pdf
npm install
```

Danach für jede Konvertierung:

```bash
node ".claude/skills/note-to-pdf/convert.js" "<absoluter-pfad-zur-notiz.md>" "<absoluter-zielpfad.pdf>"
```

- Beide Pfade müssen **absolute** Pfade sein (Vault-Root + relativer Notizpfad kombinieren).
- Zielpfad = gleicher Ordner wie die Notiz, gleicher Dateiname, Endung `.pdf` statt `.md`.
- Node löst `node_modules` automatisch relativ zum Skript-Pfad auf (kein `NODE_PATH` nötig), solange `convert.js` an seinem Ort im Skill-Ordner bleibt.

### Beispiel

Für `incoming/Wurzelgesetze.md` im Vault `<VAULT>`:

```bash
node "<VAULT>\.claude\skills\note-to-pdf\convert.js" "<VAULT>\incoming\Wurzelgesetze.md" "<VAULT>\incoming\Wurzelgesetze.pdf"
```

## Voraussetzungen

- Lokal installiertes Microsoft Edge oder Google Chrome. `convert.js` prüft folgende Pfade der Reihe nach:
  - `C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe`
  - `C:\Program Files\Microsoft\Edge\Application\msedge.exe`
  - `C:\Program Files\Google\Chrome\Application\chrome.exe`
  - Ist keiner davon vorhanden, bricht das Skript mit einer klaren Fehlermeldung ab — dann ggf. Pfad in `convert.js` ergänzen.

## Grenzen

- Feste Konfiguration: Papierformat A4, Ränder 20mm/18mm. Nicht per Parameter änderbar (bewusst einfach gehalten).
- Verarbeitet eine einzelne Notiz pro Aufruf, kein Batch-Modus für ganze Ordner.
- Eingebettete lokale Bilder (`![[bild.png]]`) und externe Markdown-Erweiterungen (Callouts, Dataview-Ausgaben) werden nicht speziell behandelt — nur Standard-Markdown, Tabellen und LaTeX-Formeln sind getestet.
