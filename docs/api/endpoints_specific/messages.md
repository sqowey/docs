# Messages


## GET /MESSAGES/

### Authentication

- AUTH-Token (Project-Specific)

### Permissions

- Everyone

### Example Request Body

```json
{
    "message_id": "A1B2C3D4"
}
```

### Example Response Body

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

### Authentication

- AUTH-Token (Project-Specific)

### Permissions

- Everyone

### Example Request Body

```json
{
	"recipient_id": "5negptb-lt6v-9qos-ws1a-1s5qxe36k3op",
    "message_text": "Hello, i am a cute little message, thanks for reading the docs!"
}
```

## PATCH /MESSAGES/

### Authentication

- AUTH-Token (Project-Specific)

### Permissions

- Everyone

### Example Request Body

```json
{
    "message_id": "A1B2C3D4",
    "message_text": "Hello, i am a cute little message, thanks for reading the docs!"
}
```

### Response

The only Response will just be a 200 Status code and an empty Body

## DELETE /MESSAGES/

### Authentication

- AUTH-Token (Project-Specific)

### Permissions

- Everyone

### Example Request Body

```json
{
    "message_id": "A1B2C3D4"
}
```

## POST /MESSAGES/

### Authentication

- AUTH-Token (Project-Specific)

### Permissions

- Everyone

### Example Request Body

```json
{
    "app_name": "TestApp"
}
```

### Example Response Body

```json
{
    "app_id": "a3c60129635c"
}
```
