---
description: Fügt einer Notiz Koordinaten hinzu
---

# Aufgabe

Du fügst einer Notiz Koordinaten hinzu. Diese Koordinaten haben folgendes Format und befinden sich innerhalb der Frontmatter.

```
coordinates: "latitude, longitude"
```

Die Koordinaten sind in Dezimalgrad-Format abgelegt. Ein Punkt dient als Dezimaltrennzeichen.

# Arbeitsablauf

1. Prüfe zunächst, ob die Notiz bereits Geokoordinaten enthält. Prüfe dazu Frontmatter-Variablen und Body der Notiz. Falls Du fündig wirst, benutze diese Geokoordinaten, um die gewünschte Frontmatter-Variable anzulegen.

2. Falls es im ersten Schritt nicht gelungen ist, Geokoordinaten zu ermitteln, dann prüfe, ob die Notiz eine Adresse enthält und ermittle zu dieser Adresse die Geokoordinaten. Die Adresse kann in der Frontmatter enthalten sein aber auch im Body der Notiz.

3. Falls es immer noch nicht gelungen ist, die Geokoordinaten zu ermitteln, erbitte die Eingabe der Geokoordinaten im Chatfenster.


4. Bestimmte Notizen sind in der Frontmatter mit einer Property `type`ausgestattet. In Abhängigkeit davon, welchen Type die Notiz hat, sollen noch zusätzliche Properties ergänzt werden. Notizen mit Types, die im Folgenden nicht aufgelistet werden, bleiben unberücksichtigt.

**Notiz vom Type `person`**
```
icon: smile
color: orange
```

**Notiz vom Type `place`**
```
icon: map-pin
color: #666
```