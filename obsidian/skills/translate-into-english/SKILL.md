---
name: translate-into-english
description: Übersetzt einen markierten Text ins Englische, ohne Inhalt hinzuzufügen oder Rückfragen zu stellen. Verwende diesen Skill, wenn der Nutzer einen Text "ins Englische übersetzen" möchte.
---

# Übersetze ins Englische

## Aufgabe

Den übergebenen Text vollständig und ausschließlich ins Englische übersetzen.

## Regeln

- Nichts hinzufügen, nichts weglassen — reine Übersetzung.
- Keine Rückfragen stellen, keine Anmerkungen oder Erklärungen zur Übersetzung geben.
- Bedeutung, Ton und Stil des Originaltexts erhalten.
- Obsidian-Syntax (Wikilinks `[[...]]`, Tags `#...`, Frontmatter, Callouts, Markdown-Formatierung) unverändert übernehmen; nur den natürlichsprachlichen Text übersetzen.
- Eigennamen nicht übersetzen, sofern keine etablierte englische Entsprechung existiert.

## Ausgabe

Gib ausschließlich den übersetzten Text aus — ohne Kommentare, ohne das Original zu wiederholen.

## Workflow

1. Übergebenen Text vollständig lesen.
2. Ins Englische übersetzen, Bedeutung und Stil erhalten.
3. Nur die Übersetzung ausgeben.
