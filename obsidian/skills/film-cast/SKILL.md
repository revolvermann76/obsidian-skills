---
name: film-cast
description: Recherchiert den Cast eines Films per Web-Suche und fügt ihn als Markdown-Tabelle (Schauspieler | Rolle) an die passende Stelle im Dokument ein. Verwende diesen Skill wenn der Nutzer die Besetzung, den Cast oder die Schauspieler eines Films in ein Dokument einfügen möchte.
---

# Film-Cast einfügen

## Aufgabe

Den Cast (Schauspieler und ihre Rollen) eines Films per Web-Suche ermitteln und als Markdown-Tabelle in ein vorhandenes Dokument einfügen.

## Eingaben

- Das Zieldokument (als Kontext mitgeliefert), aus dem Filmtitel und Zielstelle hervorgehen
- Optional: ergänzende Angaben im Prompt (Erscheinungsjahr, Originaltitel)

## Ausgaben

- Eine Markdown-Tabelle mit den Spalten **Schauspieler** und **Rolle**, eingefügt an der richtigen Stelle im Dokument

## Regeln

- Den Filmtitel aus dem mitgelieferten Dokument entnehmen.
- Die Besetzung ausschließlich per Web-Suche ermitteln — keine Daten aus dem Modell-Gedächtnis verwenden.
- Nur Haupt- und wichtige Nebenrollen aufführen; Statistenrollen weglassen.
- Die Tabelle unter einer Überschrift einfügen, die erkennbar für Cast-Informationen vorgesehen ist (z.B. `## Cast`, `## Besetzung`, `## Schauspieler`).
- Falls keine passende Überschrift vorhanden ist, am Ende des Dokuments die Überschrift `## Besetzung` anfügen und die Tabelle darunter einfügen.
- Bestehenden Inhalt im Dokument nicht löschen oder überschreiben.
- Ausschließlich die Spalten **Schauspieler** und **Rolle** verwenden — keine weiteren Spalten.
- Quellen der Web-Suche nicht im Dokument ausgeben.

## Arbeitsablauf

1. Filmtitel aus dem mitgelieferten Dokument auslesen.
2. Web-Suche nach der Besetzung durchführen, z.B.: „[Filmtitel] [Jahr] Cast Besetzung Schauspieler Rollen".
3. Suchergebnis auswerten und Schauspieler-Rollen-Paare extrahieren.
4. Dokument nach einer geeigneten Cast-Überschrift durchsuchen.
5a. Falls vorhanden: Tabelle direkt unter dieser Überschrift einfügen.
5b. Falls nicht vorhanden: Überschrift `## Besetzung` am Dokumentende anfügen und Tabelle darunter einfügen.
6. Dokument speichern.

## Tabellenformat

```markdown
| Schauspieler | Rolle |
| ------------ | ----- |
| Name         | Rolle |
```

## Qualitätskriterien

- Die Besetzungsangaben stammen aus einer aktuellen Web-Suche.
- Schauspieler und Rollen sind korrekt einander zugeordnet.
- Die Tabelle ist valides Markdown.
- Die Tabelle steht an der semantisch richtigen Stelle im Dokument.
- Kein bestehender Dokumentinhalt wurde verändert oder gelöscht.
