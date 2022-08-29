# Nachrichten (MESSAGES)

## GET /MESSAGES/

### Authentifizierung

- AUTH-Token (Projekt-Spezifisch)

### Benötigte Berechtigungen

- Keine Beschränkung vorhanden
- AUTH-Token (Projekt-Spezifisch)
### Beispielhafter Anfragetext

```json
{
    "message_id": "A1B2C3D4"
}
```

### Beispielhafter Antworttext

```json
{
    "message_id": "A1B2C3D4",
    "message_text": "Hello, i am a cute little message, thanks for reading the docs!",
    "sent_timestamp": "2023-05-16 15:22:19",
    "sender_id": "5negptb-lt6v-9qos-ws1a-1s5qxe36k3op",
    "recipient_id": "abcdefgh-ijkl-mnop-qrst-uvwxyz123456"
}
```

## POST /MESSAGES/

### Authentifizierung

- AUTH-Token (Projekt-Spezifisch)

### Benötigte Berechtigungen

- Keine Beschränkung vorhanden

### Beispielhafter Anfragetext

```json
{
	"recipient_id": "5negptb-lt6v-9qos-ws1a-1s5qxe36k3op",
    "message_text": "Hello, i am a cute little message, thanks for reading the docs!"
}
```

## PATCH /MESSAGES/

### Authentifizierung

- AUTH-Token (Projekt-Spezifisch)

### Benötigte Berechtigungen

- Keine Beschränkung vorhanden

### Beispielhafter Anfragetext

```json
{
    "message_id": "A1B2C3D4",
    "message_text": "Hello, i am a cute little message, thanks for reading the docs!"
}
```

### Response

Die Antwort ist ein 200-HTTP-Statuscode und ein leerer Antworttext

## DELETE /MESSAGES/

### Authentifizierung

- AUTH-Token (Projekt-Spezifisch)

### Benötigte Berechtigungen

- Keine Beschränkung vorhanden

### Beispielhafter Anfragetext

```json
{
    "message_id": "A1B2C3D4"
}
```

## POST /MESSAGES/

### Authentifizierung

- AUTH-Token (Projekt-Spezifisch)

### Benötigte Berechtigungen

- Keine Beschränkung vorhanden

### Beispielhafter Anfragetext

```json
{
    "app_name": "TestApp"
}
```

### Beispielhafte Antwort Body

```json
{
    "app_id": "a3c60129635c"
}
```
