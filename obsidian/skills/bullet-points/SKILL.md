---
name: bullet-points
description: Fasst einen Text in Stichpunkten zusammen. Verwende diesen Skill, wenn der Nutzer einen markierten Text oder ein Dokument "in Stichpunkten zusammenfassen", "als Bulletpoints" oder "stichpunktartig zusammenfassen" möchte.
---

# Zusammenfassung in Stichpunkten

## Aufgabe

Den übergebenen Inhalt (markierter Text oder Dokument) prägnant in Stichpunkten zusammenfassen.

## Regeln

- Antworte in der Sprache des übergebenen Textes.
- Nur die zentralen Aussagen und Kernpunkte des Inhalts übernehmen — keine Nebensächlichkeiten.
- Jeder Stichpunkt kurz und eigenständig verständlich.
- Markdown-Listenformat (`- `) verwenden.
- Keine Einleitung, kein Fazit, kein zusätzlicher Kommentar — nur die Stichpunktliste.
- Obsidian-Syntax im Quelltext (Wikilinks, Tags, Callouts) sinngemäß erhalten, falls relevant für die Aussage.

## Ausgabeformat

```markdown
- Kernpunkt 1
- Kernpunkt 2
- Kernpunkt 3
```

## Workflow

1. Übergebenen Inhalt lesen und zentrale Aussagen identifizieren.
2. Aussagen zu kurzen, eigenständigen Stichpunkten verdichten.
3. Als Markdown-Liste ausgeben — ohne weiteren Text davor oder danach.
4. Frage, ob die Stichpunktliste in der Notiz eingefügt werden soll, oder den selektierten Text ersetzen soll.
