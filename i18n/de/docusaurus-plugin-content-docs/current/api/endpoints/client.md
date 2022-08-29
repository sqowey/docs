# App-Client (CLIENT)

## GET /CLIENT/

### Authentifizierung

- AUTH-Token (Project-Specific)

### Benötigte Berechtigungen

- Keine Beschränkung vorhanden

### Beispielhafter Anfragetext

Kein Anfragetext nötig

### Beispielhafte Antwort Body

```json
{
	"Authentifizierung": {
	  "authenticated": "2022-08-22 17:36:50",
	  "auth_valid": false
    },
    "app_name": "ThisIsApp",
    "app_id": "abcdefghijkl",
    "status": 2
}
```

## PATCH /CLIENT/

### Authentifizierung

- AUTH-Token (Projekt-Spezifisch)

### Benötigte Berechtigungen

- Keine Beschränkung vorhanden

### Beispielhafter Anfragetext

```json
{
  "status": 1
}
```

## POST /CLIENT/

Der Client-Post-Endpunkt ist ein Endpunkt um befehle zu senden, damit der Server weiß, was der Client tut.

### Authentifizierung

- AUTH-Token (Projekt-Spezifisch)

### Benötigte Berechtigungen

- Keine Beschränkung vorhanden

### Beispielhafter Anfragetext

```json
{
	"action": "close_connection"
}
```

## DELETE /CLIENT/

Der Client-Delete-Endpunkt ist ein Endpunkt, mit dem der Client Zurückgesetzt wird.
Wenn erfolgreich ausgeführt, passiert folgendes:

- Der AUTH-Token wird sofort ungültig gemacht
- APP-Secret wid zurückgesetzt
- Alle Berechtigungen werden zurückgezogen

Weil die Auswirkungen der Nutzung so drastisch sind, empfehlen wir, den Delete-Endpunkt NUR IM NOTFALL zu verwenden!  

:::warning
Die App wird dadurch nicht gelöscht!
:::

### Authentifizierung

- AUTH-Token (Projekt-Spezifisch)

### Benötigte Berechtigungen

- Keine Beschränkung vorhanden
