# Server (SERVERS)

## GET /SERVERS/

### Authentifizierung

- AUTH-Token (Projekt-Spezifisch)

### Benötigte Berechtigungen

- Keine Beschränkung vorhanden

### Beispielhafter Anfragetext

```json
{
  	"server_id": "abcdefgh"
}
```

### Beispielhafter Antworttext

```json
{
  	"server_id": "abcdefgh",
	"server_name": "Server Name"
}
```

## PATCH /SERVERS/

### Authentifizierung

- AUTH-Token (Projekt-Spezifisch)

### Benötigte Berechtigungen

- Keine Beschränkung vorhanden

### Beispielhafter Anfragetext

```json
{
    "server_id": "abcdefgh",
    "changes": [
      {"server_name": "New Server Name"}
    ]
}
```