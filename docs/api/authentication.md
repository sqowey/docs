
# Authentication

- An Auth-Token needs to be Requested from the Server every Hour.
- To request an Auth-Token the APP-ID and APP-SECRET need to be sent to the AUTH-API-Endpoint.
- When the APP-ID and the APP-SECRET match, the AUTH-API-Endpoint responds with a Auth-Token.
- When the Hour is Over the Auth-Token is made unavailible and doesn’t work anymore.

:::tip Auth-Token vs. APP-SECRET
The **APP-SECRET** is a String that is the Same until manually Reset.
The **Auth-Token** changes every Hour and is the String that is sent with every Request.
:::

- Sometimes theres just a **DEV-Secret** needed, which is a Secret every Developer-Account has.
- The **DEV-Secret** is used to create Applications through the Applications-API-Endpoint
