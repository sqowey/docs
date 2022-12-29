---
sidebar_position: 1
title: OAuth2
description: This Document explains, how you can use sqoweys OAuth2 Endpoints.
---

## OAuth2
OAuth2 allows you (as an developer) to build your applications using our services for authentication and user data. You can find more information in the [RFC-Document 6749](https://www.rfc-editor.org/rfc/rfc6749). We use the *Authorization Code Grant* OAuth2 Flow and for Webhooks and Bots we use other proprietary flows.

### URLs
URL | Use
--- | ---
https://api.sqowey.de/oauth2/auth | Authorization base URL
https://api.sqowey.de/oauth2/token | Token URL
https://api.sqowey.de/oauth2/token/revoke | Token revocation URL

### Scopes
Our OAuth2-Endpoint supports many scopes:

Scope | Description
--- | ---
identity | allows to get the user-object


## Creating 

## How it works

### Creating and setting up an Application
To create an application just log into the developer portal under [dev.sqowey.de](https://dev.sqowey.de).

There you can hit the "*Create Application*" button.

We recommend giving your application a name that you can easily recognize.  

Now you need to input at least one domain which is used as the redirect back url, after the user has logged in.
:::note Domain limit
You can specify up to 3 Redirect domains.
:::

## *Authorization Code Grant*-link

This Method works as follows:
1. Your application redirects the user to our auth-server
2. The user accepts the request
3. An access code is generated
4. The user is redirected back to your application
5. Your application (immediately) sends a request to our auth-server to get access to the user

:::info Access Code lifetime
The Access Code has a general lifetime of 5 minutes.  
If any personal details are a scope of the request, the lifetime shortens to 90 seconds.  
:::

:::note
The Client (the User) of your application can't get access to the direct token.  
This happens, because the access code is immediately revoked after usage.
:::

### Request URL Example
```url
https://api.sqowey.de/oauth2/auth?client_id=1e8bb53916d1&scope=identify%bot&state=59174eb5c8c8ca4f303f3bdbf9&redirect_uri=https://cool.page/sqowey/auth_redir/&response_type=code
```
`https://api.sqowey.de/oauth2/auth` is our base authentication URL.  
The `client_id` is your applications ID.  
The `scope` is a list of scopes you want the user to accept to.  
The `state` is a identifier you use that identifies your server.  
The `redirect_uri` is a link to your applications auth_redirection-page.   

:::info
- The `scope` parameters are seperated by spaces
- The `state` could be something like a session cookie id (HASHED)
- The `redirect_uri` must match one of the (in the Application) configured URLs
:::

### Response URL Example
```url
https://cool.page/sqowey/auth_redir/?code=abz2UHAa9sz7dgIGad89a9dgGg&state=59174eb5c8c8ca4f303f3bdbf9
```
`https://cool.page/sqowey/auth_redir` is the redirect_uri you specified in the request.
The `code` is the access code you need to get the access token.
The `state` is the same as in the request.

:::warning State change
If the state changes, the request is invalid and means your connection to our servers could be compromised.
:::

### Getting the access token
To get the access token, you need to send a POST request to our token endpoint.

#### Example Request  

Here is a example for python:
```python
import requests

def getAccessToken(auth_code):
    headers = {
        "Content-Type": "application/x-www-form-urlencoded"
    }
    data = {
        "client_id": "1e8bb53916d1",
        "client_secret": "CuvTM1syTHIQCqdvLSCsnY3GAzVT2aESMMZsIwY3sviwEJTZTdjcttr2ppsUilsU",
        "grant_type": "authorization_code",
        "code": auth_code
    }
    req = requests.post("https://api.sqowey.de/oauth2/token", data=data, headers=headers)
    req.raise_for_status()
    return req.json()

getAccessToken("abz2UHAa9sz7dgIGad89a9dgGg")
```
As you might see, you need to make a `POST-Request` our token-endpoint with the following data: Your `client_id` (Your applications ID), your `client_secret` (Your applications secret), the `grant_type` (Is just "authorization_code") and `code` (Which is the authentication code you recieved).

#### Example Response

You will get a response something like this: 
```json 
{
    "access_token": "abz2UHAa9sz7dgIGad89a9dgGg",
    "token_type": "Bearer",
    "expires_in": 3600,
    "refresh_token": "tGzv3JOkF0XG5Qx2TlKWIA"
}
```

### Refreshing the access token
Because the access token is revoked after some time, you need to refresh it.  
To refresh the access token, you need to make another `POST-Request` to our token-endpoint but this time replacing `grant_type`'s value with "refresh_token", removing the `code`-parameter and adding a `refresh_token`-parameter which value is the refresh token.  

The code could now look something like this:
```python
import requests

def refreshAccessToken(refresh_token):
    headers = {
        "Content-Type": "application/x-www-form-urlencoded"
    }
    data = {
        "client_id": "1e8bb53916d1",
        "client_secret": "CuvTM1syTHIQCqdvLSCsnY3GAzVT2aESMMZsIwY3sviwEJTZTdjcttr2ppsUilsU",
        "grant_type": "refresh_token",
        "refresh_token": refresh_token
    }
    req = requests.post("https://api.sqowey.de/oauth2/token", data=data, headers=headers)
    req.raise_for_status()
    return req.json()

refreshAccessToken("tGzv3JOkF0XG5Qx2TlKWIA")
```


> You now have a access token, with which you can use our API