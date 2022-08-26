# Auth

## POST /AUTH/

### What’s the AUTH Endpoint?

### Example-Request-Body

```json
{
    "app_id": "1234567890123456",
    "app_secret": "abcdefghijkl-1234-abcd-1234-abcdefgh"
}
```

### Example-Response-Body

```json
{
    "app_id": "1234567890123456",
    "auth_token": "YCoWRvkXLr3uJfmW8yKTyRqKLtGkbFpWNcAKfMxZsbm8pNyyXyiGNx8KcCZfa9Q9"
}
```

### Response Status

Along with a 4**-Response code, instructions are sent, what to do better, but they are also listed here:

| Statuscode | Action | What to do? |
| --- | --- | --- |
| 201 (Created) | Token has been created | - |
| 400 (Bad request) | Missing app_id or app_secret json key in the request body | Check the documentation to see if you use the right Request body |
| 401 (Unauthorized) | Unknown app id | Login to the developer portal to see what the app-id is |
| 403 (Forbidden) | Wrong App Secret! | Login to the developer portal to see what the app-secret is |
