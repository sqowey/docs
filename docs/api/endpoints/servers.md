# Servers


## GET /SERVERS/

### Authentication

- AUTH-Token (Project-Specific)

### Permissions

- Everyone

### Example Request Body

```json
{
  	"server_id": "abcdefgh"
}
```

### Example-Response-Body

```json
{
  	"server_id": "abcdefgh",
	"server_name": "Server Name"
}
```

## PATCH /SERVERS/

### Authentication

- AUTH-Token (Project-Specific)

### Permissions

- Everyone

### Example Request Body

```json
{
    "server_id": "abcdefgh",
    "changes": [
      {"server_name": "New Server Name"}
    ]
}
```