---
description: Erstellt und bearbeitet TaskNotes (Task-Notizen des TaskNotes-Plugins) inkl. wiederkehrender Aufgaben, gemäß der Vault-Spezifikation.
---

# Aufgabe

Du erstellst und bearbeitest TaskNotes im Obsidian-Vault. Eine TaskNote ist eine eigenständige Markdown-Datei mit spezifischem Frontmatter, die vom TaskNotes-Plugin erkannt und in Views (Kanban, Kalender, Agenda, Listen) angezeigt wird. Referenz: https://tasknotes.dev (siehe "Specification").

Verwende diesen Skill immer, wenn der Nutzer eine Aufgabe/Task anlegen, bearbeiten, als erledigt markieren, verschieben, terminieren oder als wiederkehrend einrichten möchte — auch bei impliziten Formulierungen wie "erinnere mich an...", "Task erledigt", "Status ändern", "neue Aufgabe".

## Speicherort und Identifikation

- Alle TaskNotes liegen im Ordner `tasks/`.
- Erledigte/archivierte Tasks werden nach `tasks/Archive` verschoben.
- Eine Notiz wird als Task erkannt, wenn sie den Tag `task` im Frontmatter trägt (`tags: [task]`).
- Der Dateiname entspricht dem Titel der Aufgabe (`taskFilenameFormat: "zettel"`, Template `{{title}}`), z. B. `Homeserver updaten.md`.

## Frontmatter-Felder

Pflicht/Standardfelder beim Anlegen einer neuen TaskNote:

```yaml
---
status: open           # siehe "Status-Werte"
priority: normal        # siehe "Prioritäten"
dateCreated: 2026-01-02T11:55:06.162+01:00
dateModified: 2026-01-02T11:55:06.162+01:00
tags:
  - task
---
```

`modified` wird von Obsidian automatisch gepflegt — niemals manuell setzen.

Optionale Felder, je nach Bedarf:

| Feld | Bedeutung |
|---|---|
| `scheduled: YYYY-MM-DD` | geplantes Startdatum |
| `due: YYYY-MM-DD` | Fälligkeitsdatum |
| `completedDate: YYYY-MM-DD` | Erledigungsdatum (automatisch bei `status: done`) |
| `recurrence: <RRULE>` | Wiederkehrregel, z. B. `DTSTART:20250929;FREQ=MONTHLY;INTERVAL=3;BYMONTHDAY=29` |
| `complete_instances: []` | erledigte Vorkommen einer wiederkehrenden Aufgabe |
| `skipped_instances` | übersprungene Vorkommen einer wiederkehrenden Aufgabe |
| `contexts: []` | Kontexte (GTD-artig) |
| `projects: []` | zugehörige Projekte (Wikilinks/Strings) |
| `blockedBy` | Abhängigkeit zu anderen Tasks |
| `timeEstimate` | geschätzter Aufwand in Minuten |
| `timeEntries` | erfasste Arbeitssitzungen (`startTime`, `endTime`, `description`) |
| `pomodoros` | Anzahl absolvierter Pomodoro-Sessions |
| `reminders` | Reminder-Konfiguration |
| `icsEventId`, `googleCalendarEventId` | Verknüpfung zu externen Kalender-Events |
| `tasknotes_manual_order` | manuelle Sortierreihenfolge in Listen-/Kanban-Views |

Die Feldnamen sind über `fieldMapping` in den Plugin-Einstellungen konfigurierbar, im Vault werden aber die Standardnamen oben verwendet.

### Status-Werte (`status`)

| Wert | Bedeutung |
|---|---|
| `none` | kein Status gesetzt |
| `open` | offen, Standard bei neuen Tasks |
| `in-progress` | in Bearbeitung |
| `done` | erledigt (`isCompleted: true`) |

### Prioritäten (`priority`)

| Wert | Gewicht |
|---|---|
| `none` | 0 |
| `low` | 1 |
| `normal` | 2 (Standard) |
| `high` | 3 |

## Aufbau des Notiz-Bodys

Nach dem Frontmatter folgt üblicherweise `# Task ⚙️`, dann der fett gesetzte Aufgabentitel und frei formulierter Inhalt (Notizen, Checklisten, Code-Blöcke, Wikilinks, externe Links). Der Body ist frei gestaltbar — TaskNotes wertet nur das Frontmatter aus.

Beispiel:

```markdown
---
status: open
priority: normal
scheduled: 2026-01-02
dateCreated: 2026-01-02T11:55:06.162+01:00
dateModified: 2026-01-02T11:55:06.162+01:00
tags:
  - task
---

# Task ⚙️

**Weihnachtsbaum schmücken**

- Lichterkette reparieren
- Weihnachtsschmuck aus dem Keller holen
- ...
```

## Wiederkehrende Aufgaben

Wiederkehrende Tasks nutzen `recurrence` als RRULE-String (`DTSTART` + `FREQ` + optionale Regeln wie `INTERVAL`, `BYMONTHDAY`). Erledigte bzw. übersprungene Einzeltermine werden in `complete_instances` / `skipped_instances` festgehalten, ohne die Task-Notiz selbst zu duplizieren.

# Arbeitsablauf

## Neue TaskNote anlegen

1. Aufgabentitel vom Nutzer klären, falls nicht eindeutig.
2. Datei `documents/notes/tasks/<Titel>.md` anlegen.
3. Minimal notwendiges Frontmatter setzen: `status: open`, `priority: normal`, `dateCreated`, `dateModified` (aktueller Zeitstempel), `tags: [task]`.
4. `scheduled`/`due` nur setzen, wenn ein konkretes Datum genannt oder klar ableitbar ist. Sonst nicht raten — nachfragen.
5. Bei wiederkehrender Aufgabe zusätzlich `recurrence` (RRULE) setzen.
6. Body mit `# Task ⚙️` und fett gesetztem Titel anlegen, danach frei formulierten Inhalt gemäß Nutzerangabe ergänzen.
7. Aktualisierten Dateiinhalt anzeigen.

## Bestehende TaskNote bearbeiten

1. Task-Notiz im Ordner `documents/notes/tasks/` (ggf. `Archive`) über Titel/Suche identifizieren. Bei Mehrdeutigkeit nachfragen.
2. Gewünschte Änderung nur im Frontmatter vornehmen, sofern es sich um Status/Priorität/Termine/Wiederholung handelt; Body nur ändern, wenn explizit gewünscht.
3. Bei `status: done`: `completedDate` auf aktuelles Datum setzen, sofern nicht bereits vorhanden.
4. Bei wiederkehrenden Tasks: einzelne Vorkommen über `complete_instances`/`skipped_instances` pflegen, statt die Notiz zu duplizieren oder zu löschen.
5. Task als erledigt archivieren nur, wenn der Nutzer das explizit wünscht — dann Datei nach `documents/notes/tasks/Archive` verschieben.
6. Aktualisierten Dateiinhalt anzeigen.

## Wiederkehrende Aufgaben verwalten

1. RRULE gemäß iCalendar-Format korrekt konstruieren (`DTSTART`, `FREQ`, ggf. `INTERVAL`, `BYMONTHDAY`, `BYDAY` etc.).
2. Bei Abschluss eines einzelnen Vorkommens: Datum zu `complete_instances` hinzufügen.
3. Bei Überspringen eines Vorkommens: Datum zu `skipped_instances` hinzufügen.
4. Die Task-Notiz selbst bleibt dabei unverändert bestehen (keine Duplizierung pro Vorkommen).

# Regeln

- Keine Annahmen über Daten (`scheduled`, `due`) treffen — bei Unklarheit nachfragen.
- `modified` niemals manuell setzen (wird von Obsidian gepflegt).
- Feldnamen exakt wie oben verwenden (Standardnamen des Vaults, nicht die generische TaskNotes-Doku).
- Body-Struktur ist frei — keine zusätzliche Struktur erzwingen, die der Nutzer nicht wünscht.
- Nach jeder Änderung den aktualisierten Dateiinhalt anzeigen.

# Qualitätskriterien

- Erzeugte/bearbeitete TaskNotes sind vom TaskNotes-Plugin korrekt als Task erkennbar (Tag `task` vorhanden).
- Frontmatter enthält nur Felder, die tatsächlich benötigt werden — keine leeren Platzhalter.
- Status- und Prioritätswerte entsprechen exakt den in der Vault-Spezifikation definierten Werten.
- RRULE-Strings sind syntaktisch korrekt und entsprechen dem iCalendar-Format.
