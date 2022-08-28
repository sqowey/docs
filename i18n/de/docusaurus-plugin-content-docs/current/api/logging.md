# API Protokollierung

Aktuell protokollieren wir bei API-Aufrufen:

- Zeitpunkt des API-aufrufs
- Entwickler-Account der genutzt wurde
- App-ID die genutzt wurde
- Endpunkt der Anfrage
- Die vollständige HTTP Anfrage
- HTTP Antwort-Code

Wir protokollieren all dies um unsere Leistung zu verbessern und Fehler zu finden.

### Abweichende Regeln:

#### Authentifizierung:

- Zeitpunkt des API-aufrufs
- Genutzte HTTP Methode
- HTTP Antwort
- Authentifications-Token

#### Applikationen:

- Zeitpunkt des API-aufrufs
- App-ID die genutzt wurde
- Genutzte HTTP Methode
- HTTP Antwort
- Authentifications-Token