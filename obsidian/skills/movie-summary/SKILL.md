---
name: movie-summary
description: Erstellt eine Inhaltszusammenfassung eines Films oder einer Serie (max. 200 Worte) per Web-Recherche und fügt sie ins Dokument ein. Verwende diesen Skill, wenn der Nutzer eine Zusammenfassung, Inhaltsangabe oder Handlung eines Films/einer Serie wünscht.
---

# Film-Zusammenfassung einfügen

## Aufgabe

Den Inhalt eines Films oder einer Serie recherchieren und in maximal 200 Worten zusammenfassen.

## Eingaben

- Das Zieldokument (als Kontext mitgeliefert), aus dem der Film-/Serientitel hervorgeht
- Optional: ergänzende Angaben im Prompt (Erscheinungsjahr, Originaltitel, Staffel)

## Ausgaben

- Ein Fließtext von maximal 200 Worten, der den Inhalt zusammenfasst — eingefügt an der passenden Stelle im Dokument

## Regeln

- Den Titel aus dem mitgelieferten Dokument entnehmen.
- Inhaltsangabe per Web-Suche recherchieren — keine Daten aus dem Modell-Gedächtnis ohne Abgleich verwenden.
- Maximal 200 Worte, reiner Fließtext (keine Stichpunkte, keine Tabelle).
- Keine Wertung, keine Rezension — nur die Handlung/den Inhalt zusammenfassen.
- Unter einer erkennbaren Überschrift einfügen (z.B. `## Zusammenfassung`, `## Inhalt`, `## Summary`). Falls keine passende Überschrift existiert, am Dokumentende `## Zusammenfassung` anfügen.
- Bestehenden Inhalt im Dokument nicht löschen oder überschreiben.
- Quellen der Web-Suche nicht im Dokument ausgeben.

## Workflow

1. Titel aus dem mitgelieferten Dokument auslesen.
2. Web-Suche nach der Handlung/Inhaltsangabe durchführen.
3. Inhalt in maximal 200 Worten zusammenfassen.
4. Dokument nach einer geeigneten Überschrift durchsuchen und Text dort einfügen (sonst neue Überschrift anlegen).
5. Dokument speichern.
