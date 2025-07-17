import os
import requests
from dotenv import load_dotenv
from groq import Groq
from flask import Flask, request, jsonify, render_template
from flask_cors import CORS

load_dotenv()
api_key = os.getenv("GROQ_API_KEY")
client = Groq(api_key=api_key)

headers = {
    "Authorization": f"Bearer {api_key}",
    "Content-Type": "application/json"
}

app = Flask(__name__)
CORS(app)

def chat_with_groq(user_input):
    url = "https://api.groq.com/openai/v1/chat/completions"
    payload = {
        "model": "meta-llama/llama-4-scout-17b-16e-instruct",
        "messages": [
            {
                "role": "system",
                "content": (
                    "You are KrishiMitra, the official chatbot of HaritSetu – an eco-friendly platform that connects farmers and buyers "
                    "to reduce crop waste and support sustainable agriculture. Answer politely and clearly. Only give information related to HaritSetu features, usage, and process."
                )
            },
            {
                "role": "user",
                "content": "How do I login or sign up?"
            },
            {
                "role": "assistant",
                "content": (
                    "Click on 'Get Started' at the top right. If you already have an account, login with your email and password. "
                    "If not, click 'Sign Up' and fill all the required fields to register."
                )
            },
            {
                "role": "user",
                "content": "How do I list my crop residue?"
            },
            {
                "role": "assistant",
                "content": (
                    "Click on the Crop Listing Form and fill the following details:\n"
                    "- Farmer Name (किसान का नाम)\n"
                    "- Phone Number (फोन नंबर - 10 अंक)\n"
                    "- Crop Type (फसल का प्रकार)\n"
                    "- Residue Type (अवशेष प्रकार)\n"
                    "- Quantity in Kilograms (मात्रा - किलोग्राम)\n"
                    "- Location (गाँव/शहर + पिन कोड)\n"
                    "- Preferred Price ₹ (वांछित मूल्य, वैकल्पिक)\n"
                    "- Available From (dd-mm-yyyy)\n"
                    "- Notes for Buyers\nThen click on Submit."
                )
            },
            {
                "role": "user",
                "content": "How can a buyer search for crop residue?"
            },
            {
                "role": "assistant",
                "content": (
                    "Buyers can go to Crop Listing to view all available listings. For a specific area or residue type, use the Quick Filter, "
                    "select the location and residue type, then click Search."
                )
            },
            {
                "role": "user",
                "content": "How to use the Price Trends feature?"
            },
            {
                "role": "assistant",
                "content": (
                    "Go to the Price Trends section. Enter:\n"
                    "- Crop Type\n- Residue Type\n- State\n- District\n- Month\n- Quantity in kg\n"
                    "Then click Predict to view the AI-based estimated market price per kg."
                )
            },
            {
                "role": "user",
                "content": "What are the uses of crop residues?"
            },
            {
                "role": "assistant",
                "content": (
                    "Crop residues like husk, straw, stalk, and banana pseudostem are used for making compost, cattle feed, biofuel, bioplastics, paper pulp, and more. "
                    "HaritSetu helps in listing and selling them responsibly."
                )
            },
            {
                "role": "user",
                "content": user_input
            }
        ],
        "temperature": 0.5,
        "max_tokens": 500
    }

    try:
        response = requests.post(url, headers=headers, json=payload)
        response.raise_for_status()
        return response.json()['choices'][0]['message']['content']
    except Exception as e:
        return f"❌ Error: {e}"

@app.route('/')
def home():
    return render_template("index.html")

@app.route('/chat', methods=['POST'])
def chat():
    data = request.get_json()
    user_input = data.get("message")
    reply = chat_with_groq(user_input)
    return jsonify({"reply": reply})

if __name__ == '__main__':
    app.run(debug=True)
