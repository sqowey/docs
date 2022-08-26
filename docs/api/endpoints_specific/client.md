# Client

## GET /CLIENT/

### Authentication

- AUTH-Token (Project-Specific)

### Permissions

- Everyone

### Example Request Body

No body needed

### Example Response Body

```json
{
	"authentication": {
	  "authenticated": "2022-08-22 17:36:50",
	  "auth_valid": false
    },
    "app_name": "ThisIsApp",
    "app_id": "abcdefghijkl",
    "status": 2
}
```

## PATCH /CLIENT/

### Authentication

- AUTH-Token (Project-Specific)

### Permissions

- Everyone

### Example Request Body

```json
{
  "status": 1
}
```

## POST /CLIENT/

The CLIENT-Post-Endpoint will be an Endpoint to issue Commands to the API Server so that the API knows, what you are doing.

### Authentication

- AUTH-Token (Project-Specific)

### Permissions

- Everyone

### Example Request Body

```json
{
	"action": "close_connection"
}
```

## DELETE /CLIENT/

The CLIENT-DELETE-Endpoint is a Shortcut that will “Reset” the Client.
When issued, the following actions are done:

- AUTH-Token will get deleted immediately
- APP-Secret is regenerated
- All PATCH-Permissions are being revoked

Because of those drastic actions, we just recommend using the DELETE-Endpoint if you think someone got access to your APP-Secret or AUTH-Token!

IT WILL NOT DELETE THE APPLICATION!

### Authentication

- AUTH-Token (Project-Specific)

### Permissions

- Everyone
