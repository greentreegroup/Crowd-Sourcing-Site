# jwt-validate


JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.

This guide demonstrates how to integrate Auth0 with any new or existing Python API built with Flask. We're going to use a library called Authlib to create a `ResourceProtector`, which is a type of Flask decorator that protects our resources (API routes) with a given validator.

The validator will validate the Access Token that we pass to the resource by checking that it has a valid signature and claims.

We can use AuthLib's `JWTBearerTokenValidator` validator with a few tweaks to make sure it conforms to our requirements on validating Access Tokens.

To create our `Auth0JWTBearerTokenValidator` we need to pass it our domain and audience (API Identifier). It will then get the public key required to verify the token's signature and pass it to the `JWTBearerTokenValidator` class.

We'll then override the class's `claims_options` to make sure the token's expiry, audience and issue claims are validated according to our requirements.

Follow this for exact steps: [auth0 flask](https://auth0.com/docs/quickstart/backend/python/interactive)
