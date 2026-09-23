---
description: Verschiebt eine Notiz in einen neu angelegten Ordner gleichen Namens und fragt optional, ob eingebettete Ressourcen mitverschoben werden sollen.
---

# Aufgabe

Du verschiebst eine Notiz in einen Ordner mit demselben Namen (ohne Dateiendung). Anschließend fragst du den Anwender, ob auch alle in der Notiz eingebetteten Ressourcen (Bilder, PDFs, Anhänge) mit in diesen Ordner verschoben werden sollen.

Beispiel: `XYZ.md` → Ordner `XYZ/` mit `XYZ.md` darin.

# Eingaben

- Die zu verschiebende Notiz (aktuelle/verlinkte Notiz im Kontext, oder eine vom Anwender genannte Datei).

# Ausgaben

- Ein neuer Ordner gleichen Namens am bisherigen Speicherort der Notiz.
- Die Notiz, verschoben in diesen Ordner (Dateiname bleibt unverändert).
- Optional: die eingebetteten Ressourcen der Notiz, ebenfalls in den Ordner verschoben.
- Eine kurze Zusammenfassung, was verschoben wurde.

# Arbeitsablauf

1. Ziel-Notiz bestimmen. Bei Mehrdeutigkeit nachfragen.
2. Prüfen, ob die Notiz bereits in einem Ordner mit exakt ihrem eigenen Namen liegt (z. B. `XYZ/XYZ.md`). Falls ja: Hinweis geben, dass nichts zu tun ist, und abbrechen.
3. Prüfen, ob am Speicherort der Notiz bereits ein Ordner mit dem Zielnamen existiert:
   - Existiert er nicht: anlegen.
   - Existiert er bereits mit anderem Inhalt: Anwender fragen, ob trotzdem hinein verschoben werden soll, bevor irgendetwas passiert.
4. Notiz in den Ordner verschieben. Dateiname bleibt exakt gleich, keine Umbenennung.
5. In der (jetzt verschobenen) Notiz alle eingebetteten Ressourcen ermitteln — also Embeds im Format `![[Datei.ext]]` (Bilder, PDFs, Anhänge etc.). Normale Wikilinks `[[Notiz]]` ohne `!` zu anderen Notizen zählen **nicht** als Ressource und bleiben unangetastet.
6. Für jede gefundene Ressource per Backlink-Suche prüfen, ob sie auch von anderen Notizen im Vault referenziert wird (geteilte Ressource). Bevorzugt Obsidian-MCP-Tools nutzen, sonst `grep` über das Vault.
7. Falls mindestens eine eingebettete Ressource gefunden wurde: den Anwender fragen, ob diese Ressourcen mit in den Ordner verschoben werden sollen. Dabei:
   - alle gefundenen Ressourcen auflisten,
   - bei geteilten Ressourcen ausdrücklich warnen, dass Links in anderen Notizen dadurch brechen könnten.
8. Bei Zustimmung: alle gelisteten Ressourcen (auch geteilte, trotz Warnung) unverändert benannt in den Zielordner verschieben.
9. Bei Ablehnung oder wenn keine Ressourcen gefunden wurden: nur die Notiz bleibt verschoben, an den Ressourcen wird nichts geändert.
10. Abschließend den aktualisierten Inhalt der Notiz anzeigen sowie eine kurze Zusammenfassung, welche Dateien verschoben wurden.

# Regeln

- Nur eingebettete Ressourcen (`![[...]]` oder `[[...]]`) zählen als "verlinkte Ressourcen" im Sinne dieses Skills — keine normalen Notiz-Wikilinks. Verweise auf Markdown-Dateien sind also ausdrücklich ausgeschlossen.
- Ressourcen werden ohne Rückfrage niemals automatisch verschoben — Schritt 7 ist verpflichtend.
- Keine Umbenennung von Notiz oder Ressourcen — nur Verschieben.
- Bei geteilten Ressourcen immer vorab warnen, aber bei Zustimmung trotzdem verschieben (keine automatische Auslassung).
- Existiert bereits ein gleichnamiger Ordner mit fremdem Inhalt, nichts überschreiben ohne vorherige Rückfrage.
- Relative Pfade verwenden, nie absolute Windows-Pfade.

# Qualitätskriterien

- Die Notiz liegt nach Ausführung in einem gleichnamigen Ordner, ihr Dateiname ist unverändert.
- Der Anwender wurde vor dem Verschieben von Ressourcen explizit gefragt; geteilte Ressourcen wurden klar benannt.
- Keine Datei wurde ungefragt überschrieben oder verschoben.
- Der aktualisierte Dateiinhalt der Notiz wird nach Abschluss angezeigt (Vault-Konvention).
