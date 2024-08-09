from os import getenv
from dotenv import load_dotenv
from flask import Flask, jsonify
from authlib.integrations.flask_oauth2 import ResourceProtector
from validator import Auth0JWTBearerTokenValidator
from flask_cors import CORS

require_auth = ResourceProtector()

load_dotenv()

env = getenv('FLASK_ENV', 'development')

debug = False
if env == 'development':
    debug = True
    print(getenv("AUTH0_DOMAIN"))
    print(getenv("API_IDENTIFIER"))

print(f'Starting {env} server, please wait ...')

validator = Auth0JWTBearerTokenValidator(
    getenv("AUTH0_DOMAIN"),
    getenv("API_IDENTIFIER")
)
require_auth.register_token_validator(validator)

APP = Flask(__name__)
CORS(APP, resources={r"/*": {
    "origins": [
        r"https://prod2-\d+\.(southeastasia|eastasia)\.logic\.azure\.com", 
        "http://localhost:3000"
    ]
}})

@APP.route("/api/public")
def public():
    """No access token required."""
    response = (
        "Public endpoint. You don't need to be"
        " authenticated to see this."
    )
    return jsonify(message=response)


@APP.route("/api/private")
@require_auth(None)
def private():
    """A valid access token is required."""
    response = "OK"
    return jsonify(status=response)


@APP.route("/api/private-scoped")
@require_auth("read:messages")
def private_scoped():
    """A valid access token and scope are required."""
    response = (
        "Private endpoint. You need to be"
        " authenticated and have a scope of read:messages to see"
        " this."
    )
    return jsonify(message=response)

if __name__ == "__main__":
    APP.run(host="0.0.0.0", port=5000, debug=debug)
