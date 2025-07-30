from flask import Flask, request, jsonify
import requests
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

GPT_SERVICE_URL = "http://localhost:5005/gpt"

@app.route('/api/optimize', methods=['POST'])
def optimize_code():
    data = request.json
    code = data.get("code", "")

    payload = {
        "system_prompt": "Optimize the following code for efficiency and readability. Return only the improved version.",
        "user_prompt": code
    }

    try:
        gpt_response = requests.post(GPT_SERVICE_URL, json=payload)
        return jsonify(gpt_response.json())
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(port=5012)
