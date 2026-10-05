---
name: text-to-table
description: Wandelt einen Text mit tabellarisch strukturierbarem Inhalt in eine Markdown-Tabelle um. Verwende diesen Skill, wenn der Nutzer einen markierten Text oder Dokumentinhalt "in eine Tabelle umwandeln" oder "als Tabelle darstellen" möchte.
---

# Text in Tabelle umwandeln

## Aufgabe

Den übergebenen Inhalt in eine sinnvoll strukturierte Markdown-Tabelle umwandeln.

## Regeln

- Antworte in der Sprache des übergebenen Textes.
- Spaltenstruktur aus dem Inhalt selbst ableiten (sinnvolle, zum Inhalt passende Spaltenüberschriften wählen).
- Nur die Tabelle ausgeben — keine Einleitung, kein Kommentar, keine Erklärung davor oder danach.
- Keine inhaltlichen Informationen hinzuerfinden; nur vorhandene Informationen strukturieren.
- Valides Markdown-Tabellenformat verwenden.

## Ausgabeformat

```markdown
| Spalte A | Spalte B |
| -------- | -------- |
| Wert     | Wert     |
```

## Workflow

1. Übergebenen Inhalt auf wiederkehrende, vergleichbare Merkmale prüfen.
2. Passende Spaltenüberschriften ableiten.
3. Inhalt zeilenweise in die Tabelle übertragen.
4. Ausschließlich die fertige Tabelle ausgeben.
