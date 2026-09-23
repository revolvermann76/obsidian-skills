---
name: korrektur
description: Korrigiert Rechtschreibung, Grammatik und Ausdruck in deutschen Texten — insbesondere Notizen im Obsidian-Zettelkasten. Verwende diesen Skill immer dann, wenn der Nutzer einen deutschen Text korrekturlesen, korrigieren, prüfen oder verbessern möchte, auch wenn er nur schreibt "korrigiere das", "bitte Korrektur lesen", "check mal" oder "Fehler korrigieren". Der Skill hält den Stil des Originals bei und gibt die Änderungen transparent in der Konsole aus. Niemals andere Dateien im Projekt anfassen.
---

# Korrektur-Skill

Du korrigierst deutschen Text auf Rechtschreib-, Grammatik- und Ausdrucksfehler. Dein Ziel ist ein fehlerfreier Text, der sich trotzdem liest wie vom Autor selbst geschrieben.

## Grundprinzipien

- **Stil bewahren**: Satzstruktur, Tonalität und Wortwahl des Autors bleiben erhalten. Du glättest keine eigenwilligen, aber korrekten Formulierungen.
- **Nur Fehler korrigieren**: Keine stilistischen Umformulierungen, keine inhaltlichen Ergänzungen, keine Vereinfachungen — ausschließlich sprachlich falsche Stellen beheben.
- **Scope strikt einhalten**: Bearbeite ausschließlich den Text, der dir als Kontext übergeben wird. Greife niemals auf andere Dateien im Projekt zu, öffne sie nicht, schreibe sie nicht um.

## Was du korrigierst

- Rechtschreibfehler (inkl. Komposita, Groß-/Kleinschreibung)
- Grammatikfehler (Kasus, Numerus, Tempus, Kongruenz)
- Zeichensetzung (Kommaregeln, fehlende oder falsche Satzzeichen)
- Offensichtliche Tippfehler
- Falsch verwendete Wörter mit ähnlichem Klang (z. B. „das" vs. „dass")

## Was du nicht veränderst

- Bewusste stilistische Entscheidungen (kurze Sätze, unkonventionelle Struktur)
- Fachbegriffe, Eigennamen, absichtliche Abkürzungen
- Obsidian-spezifische Syntax: `[[Wikilinks]]`, `#Tags`, Frontmatter (`---`), Callouts (`> [!note]`), Embeds (`![[...]]`)
- Markdown-Formatierung: Überschriften, Fettdruck, Kursivschrift, Listen

## Ausgabe

### Im Dokument
Gib **nur den korrigierten Text** aus — ohne Erklärungen, ohne Markierungen, ohne Kommentare. Das Ergebnis soll direkt verwendbar sein.

### In der Konsole (deine Antwort an den Nutzer)
Liste **alle vorgenommenen Änderungen** übersichtlich auf. Format:

```
Änderungen:
1. „falsches Wort" → „richtiges Wort" — [kurze Begründung]
2. „fehlerhafter Satz" → „korrigierter Satz" — [kurze Begründung]
```

Wenn keine Fehler gefunden wurden, schreibe: „Keine Fehler gefunden."

## Workflow

1. Lies den übergebenen Text vollständig.
2. Identifiziere alle sprachlichen Fehler.
3. Erstelle den korrigierten Text (Obsidian-Syntax unverändert lassen).
4. Schreibe die Änderungsliste für die Konsole.
5. Gib zuerst den korrigierten Text aus, dann die Änderungsliste.
