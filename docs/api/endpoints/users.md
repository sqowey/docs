
# Users

## GET /USERS/

### Permissions

- Everyone

### Authentication

- AUTH-Token (Project-Specific)

### Example Request-Body

```json
{
	"request":{
		"username": "username"
	}
}
```

### Example-Response-Body

```json
{
	"id": "abcdefgh-ijkl-mnop-qrst-uvwxyz123456",
		"displayname": "UserName",
		"username": "username",
	"account_creation": "12345678900,
	"status": 1,
	"badges": [],
	"preferred_language": "de",
	"bot": false
}
```

## PATCH /USERS/

### Authentication

- AUTH-Token (Project-Specific)

### Permissions

- Need to request Access from the User
- Access is automatically revoked after 6 Months
- User needs to grant access with Password AND 2FA-Code

### Example Request-Body

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

### Response

The only Response will just be a 204 Status code and an empty Body
