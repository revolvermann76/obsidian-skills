---
name: picture
description: Organisiert eine Markdown-Datei und ihre dazugehörigen Bild-Ressourcen im Vault
---
# Arbeitsschritte

1. Prüfe, ob sich die aktuelle Datei in einem Ordner befindet mit einem gleichlautenden Namen

zum Beispiel: "mein-Bild.md" => "mein-Bild"

2. Falls das nicht der Fall ist, dann erzeuge einen Ordner mit entsprechendem Namen und verschiebe die Datei da hinein.

3. Ermittle alle Bild-Dateien, die in der aktuellen Datei verlinkt sind

4. verschiebe diese Bilddateien in den Ordner. Wenn dabei irgendwelche Links in anderen Markdown-Dateien brechen, ist das irrelevant. 

5. Benenne die Bilddateien einheitlich um. Orientiere Dich dabei am Namen des aktuellen Dokuments und füge eine fortlaufende Nummer an.
Löse eventuelle Namenskonflikte einfach durch Erhöhen der fortlaufenden Nummer. Korrigiere die Links im Markdown-Dokument. Es sollen Links im ![[Wikilink.jpg]] Format genutzt werden. Dabei wird im Link nur der Dateiname und nicht der Pfad.

**Beispiel:**

Das aktuelle Dokument heißt "mein-Bild.md". Es sind zwei Bilddateien verlinkt "lirum.jpg" und "larum.jpg". Dann werden diese wie folgt umbenannt:

"lirum.jpg" => "mein-Bild-1.jpg"
"larum.jpg" => "mein-Bild-2.jpg"