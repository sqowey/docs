---
sidebar_position: 1
title: Overview
description: Overview of the Endpoints
---

# Endpoints - Overview

| Endpoint | Method | Tokens/Request | Permission request | Authentication | Example |
| --- | --- | --- | --- | --- | --- |
| APPLICATIONS | GET | 25 | - | DEV-Secret | Get name of an application |
| APPLICATIONS | POST | - | - | DEV-Secret | Create a Application |
| APPLICATIONS | PATCH | 50 | - | DEV-Secret | Change name of an application |
| APPLICATIONS | DELETE | - | - | DEV-Secret | Delete a Application |
| AUTH | POST | 100 | - | APP-SECRET and APP-ID | Get Authentication Token |
| CLIENT | GET | 10 | - | AUTH-Token | Get Name of the App-Client |
| CLIENT | POST | 10 | - | AUTH-Token | Send App-Client Logout to the Server |
| CLIENT | PATCH | 5 | - | AUTH-Token | Set Status of the App-Client |
| CLIENT | DELETE | 1.000 | - | AUTH-Token OR APP-SECRET and APP-ID | Emergency Reset of the App-Client |
| MESSAGES | GET | 2 | - | AUTH-Token | Get Text of Message |
| MESSAGES | POST | 3 | - | AUTH-Token | Send Message |
| MESSAGES | PATCH | 5 | - | AUTH-Token | Edit Message |
| MESSAGES | DELETE | 5 | - | AUTH-Token | Delete Message |
| SERVERS | GET | 5 | 1-Time Permission request | AUTH-Token | Get Name of Server |
| SERVERS | PATCH | 10 | 6-Month Permission request | AUTH-Token | Set Setting of Server |
| STATISTICS | GET | 2 | - | AUTH-Token | Get Number of registered Users |
| USERS  | GET | 2 | - | AUTH-Token | Get Status of user |
| USERS | PATCH | 5 | 6-Month Permission request | AUTH-Token | Set Status of user |

:::note Difference between /CLIENT/ and /APPLICATIONS/
The /APPLICATIONS/-Endpoint is being Authenticated with the Dev-Token and is planned to get called from outside the Application. 

The /CLIENT/-Endpoint is planned to get called while the Application is running and therefore has more instant-action-options (like status) and is therefore being Authenticated with the AUTH-Token which is generated whilst the application is running.
:::
