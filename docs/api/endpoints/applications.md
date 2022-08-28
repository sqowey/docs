# Applications

## POST /APPLICATIONS/

### Authentication

- DEV-Token (Project-Specific)

### Permissions

- Everyone

### Example Request Body

```json
{
  	"app_name": "TestApp"
}
```

### Example Response

If you have free Apps left, you will recieve a 201 (Created) Status code and Recieve this Body:

```json
{
  	"app_id": "a3c60129635c"
}
```

## GET /APPLICATIONS/

### Authentication

- DEV-Token (Project-Specific)

### Permissions

- Everyone

### Example Request Body

```json
{
  	"app_id": "a3c60129635c"
}
```

### Example Response Body

```json
{
	"owner": "abcdefgh-ijkl-mnop-qrst-uvwxyz123456",
		"authentication": {
			"app_secret": "BWZmHlU0hfKQ6BdIYuW3yJ16LcIVS8QH5vpwPkqqXQ4oJA0QIeQKj039TEXT3DaG",
			"auth_token": {
			"requested": "2021-11-13 16:07:08",
				"token": "P15wKRUeZEAajiRUaHIy6QKptfxTHaPjh7zuPqYT2UNFecq"
			}
	},
		"last_opened_in_devportal": "2021-11-13 16:07:08",
	"app_name": "ThisIsApp",
	"app_id": "abcdefghijkl",
	"status": 2,
	"app_level": "B1",
	"tokens_left": 1582,
	"app_created": "2022-08-22 13:59:38"
}
```

## PATCH /APPLICATIONS/

### Authentication

- DEV-Token (Project-Specific)

### Permissions

- Everyone

### Example Request Body

```json
{
    "app_id": "a3c60129635c",
    "app_name": "ThisIsApp"
}
```

## DELETE /APPLICATIONS/

### Authentication

- DEV-Token (Project-Specific)

### Permissions

- Everyone

### Example Request Body

```json
{
  	"app_id": "a3c60129635c"
}
```