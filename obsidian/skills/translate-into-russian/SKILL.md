---
name: translate-into-russian
description: Übersetzt einen markierten Text ins Russische, ohne Inhalt hinzuzufügen oder Rückfragen zu stellen. Verwende diesen Skill, wenn der Nutzer einen Text "ins Russische übersetzen" möchte.
---

# Übersetze ins Russische

## Aufgabe

Den übergebenen Text vollständig und ausschließlich ins Russische übersetzen.

## Regeln

- Nichts hinzufügen, nichts weglassen — reine Übersetzung.
- Keine Rückfragen stellen, keine Anmerkungen oder Erklärungen zur Übersetzung geben.
- Bedeutung, Ton und Stil des Originaltexts erhalten.
- Obsidian-Syntax (Wikilinks `[[...]]`, Tags `#...`, Frontmatter, Callouts, Markdown-Formatierung) unverändert übernehmen; nur den natürlichsprachlichen Text übersetzen.
- Eigennamen nicht übersetzen, sofern keine etablierte russische Entsprechung existiert.
- Korrekte kyrillische Rechtschreibung und Grammatik verwenden.

## Ausgabe

Gib ausschließlich den übersetzten Text aus — ohne Kommentare, ohne das Original zu wiederholen.

## Workflow

1. Übergebenen Text vollständig lesen.
2. Ins Russische übersetzen, Bedeutung und Stil erhalten.
3. Nur die Übersetzung ausgeben.
