# Mamifad Familien-Ausflugs-Packliste

Eine eigenständige, lokale Web-App für Familien in Österreich. Aus Wetter, Ausflugsdauer und Altersgruppe entsteht eine passende Packliste zum Abhaken und Drucken.

## Funktionen

- individuelle Packliste aus drei Angaben
- lokale Speicherung bereits abgehakter Punkte
- Filter für noch offene Punkte
- druckfreundliche Ausgabe
- responsives und barrierearmes Interface
- keine Cookies, Tracker, Analyse-Tools oder externen JavaScript-Abhängigkeiten

## Lokal starten

Da `app.js` als ES-Modul geladen wird, sollte die App über einen einfachen lokalen Webserver geöffnet werden:

```sh
python3 -m http.server 8080
```

Danach `http://localhost:8080` im Browser öffnen.

## Tests

Voraussetzung ist Node.js 18 oder neuer.

```sh
node tests.mjs
```

Die Tests prüfen deterministisch die Listenlogik, Deduplizierung, Fallbacks, Canonical- und Robots-Angaben, die Mamifad-Links sowie den Verzicht auf entfernte Skripte und Stylesheets.

## Veröffentlichung

Das Asset ist für GitHub Pages unter folgender kanonischer URL vorbereitet:

`https://stefanploskov.github.io/mamifad-packliste/`

Mamifad: [Familienaktivitäten in Österreich](https://www.mamifad.at/)
