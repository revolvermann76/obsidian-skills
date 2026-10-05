---
name: citation
description: Liefert zu einem markierten Text oder Thema ein einzelnes, real existierendes Zitat einer bekannten Person mit inhaltlichem Bezug. Verwende diesen Skill, wenn der Nutzer ein passendes Zitat sucht oder wünscht, z.B. "gib mir ein Zitat dazu", "passendes Zitat finden", "Zitat zum Thema".
---

# Zitat finden

## Aufgabe

Zu einem gegebenen Text oder Thema ein thematisch passendes, tatsächlich existierendes Zitat einer bekannten Person liefern.

## Regeln

- Antworte in der Sprache des übergebenen Textes.
- Liefere **genau ein** Zitat — keine Auswahl, keine Liste.
- Das Zitat muss real existieren. Erfinde oder paraphrasiere keine Zitate. Im Zweifel per Web-Suche verifizieren, bevor das Zitat ausgegeben wird.
- Keine Erklärung, Einordnung oder zusätzlicher Kommentar — nur das Zitat und die Autorenangabe.

## Ausgabeformat

```
> [!CITE] <Namen des Autors>
> <Das eigentliche Zitat>
> <Zitat falls dieses mehrzeilig ist, in der nächsten Zeile fortsetzen>
```

- Das Zitat in doppelten Anführungszeichen.
- Danach ein Gedankenstrich (—), direkt gefolgt vom Namen der Autorin/des Autors.

## Workflow

1. Thema bzw. Kernaussage des übergebenen Textes erfassen.
2. Eine bekannte Person mit passendem, belegbar echtem Zitat dazu finden (bei Unsicherheit über die Echtheit per Web-Suche prüfen).
3. Zitat im vorgegebenen Format ausgeben — ohne weiteren Text davor oder danach.
4. Rückfrage: "Soll das Zitat in die Notiz eingefügt werden, oder den selektierten Text ersetzen?"
