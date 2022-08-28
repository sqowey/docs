
# Benutzer (USERS)

## GET /USERS/

### Benötigte Berechtigungen

- Keine Anfrage für Berechtigungen nötig

### Authentifizierung

- Authentifizierungs-Token (Projektspezifisch)

### Beispielhafter Anfragetext

```json
{
	"request":{
		"username": "username"
	}
}
```

### Beispielhafter Antworttext

```json
{
	"id": "abcdefgh-ijkl-mnop-qrst-uvwxyz123456",
		"displayname": "NutzerName",
		"username": "nutzername",
	"account_creation": "12345678900",
	"status": 1,
	"badges": [],
	"preferred_language": "de",
	"bot": false
}
```

## PATCH /USERS/

### Authentifizierung

- Authentifizierungs-Token (Projektspezifisch)

### Benötigte Berechtigungen

- Nutzer muss einmal alle 6 Monate um Berechtigung gebeten werden.

### Beispielhafter Anfragetext

```json
{
	"request":{
		"username": "USERNAME",
		"action":{
			"operation": "language",
			"value": "en"
		}
	}
}
```

### Antwort

Die antwort wird ein HTTP-Status code 204 sein, gefolgt von einem Leeren antworttext
