# Authentifizierung (AUTH)

## POST /AUTH/

:::info Was ist der AUTH Endpunkt?
- Jede Stunde muss ein neuer Authentifizierungs-Token angefordert werden.
- Um einen Authentifizierungs-Token anzufordern, muss die APP-ID und das APP-SECRET an den AUTH-API-Endpunkt gesendet werden.
- Wenn die APP-ID und das APP-SECRET übereinstimmen, antwortet der AUTH-API-Endpunkt mit einem neuen Authentifizierungs-Token.
- Nach einer Stunde wird der Authentifizierungs-Token wieder zurückgezogen und funktioniert nicht mehr.
:::


### Beispielhafter Anfragetext

```json
{
    "app_id": "1234567890123456",
    "app_secret": "abcdefghijkl-1234-abcd-1234-abcdefgh"
}
```

### Beispielhafter Antworttext

```json
{
    "app_id": "1234567890123456",
    "auth_token": "YCoWRvkXLr3uJfmW8yKTyRqKLtGkbFpWNcAKfMxZsbm8pNyyXyiGNx8KcCZfa9Q9"
}
```

### Antwortstatus (HTTP)

| Statuscode | Aktion | Was tun? |
| --- | --- | --- |
| 201 (Created) | Token wurde erstellt | - |
| 400 (Bad request) | Fehlerhafte Anfrage | Dokumentation überprüfen |
| 401 (Unauthorized) | Unbekannte APP-ID | Logge dich in's Entwicklerportal ein, um zu gucken wie die passende APP-ID ist |
| 403 (Forbidden) | Falsches App-Secret! | Logge dich in's Entwicklerportal ein, um zu gucken was dein APP-Secret ist |
