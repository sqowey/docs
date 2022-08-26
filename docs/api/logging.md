# API logging

Currently we log following informations from API calls:

- Time of the API call
- Developer account used for the API call
- Application-ID used for the API call
- Endpoint of the Request
- Request Body
- HTTP Response code

We do this to improve performance and find bugs.

This logging rules are used on every Endpoint except the AUTH-Endpoint which logs the following informations:

- Time of the API call
- App-ID used
- HTTP Method used
- HTTP Response code
- First and last 8 digits of the auth token