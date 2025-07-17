
import requests
import os
from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from dotenv import load_dotenv
import hashlib
import re
import google.generativeai as genai
import pandas as pd
from sklearn.linear_model import LinearRegression
import numpy as np

load_dotenv()

DEFAULT_INR_RATE = 83

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
if not GEMINI_API_KEY:
    raise ValueError("GEMINI_API_KEY is not set in the environment variables.")
genai.configure(api_key=GEMINI_API_KEY)

app = Flask(__name__)
CORS(app)

ai_suggestions_cache = {}
stock_recommendations_cache = {}
inr_usd_rate = DEFAULT_INR_RATE

def get_usd_to_inr():
    try:
        response = requests.get("https://api.exchangerate-api.com/v4/latest/USD")
        data = response.json()
        return data.get("rates", {}).get("INR", DEFAULT_INR_RATE)
    except requests.RequestException:
        return DEFAULT_INR_RATE

def get_historical_data(salary, spendings):
    if not isinstance(spendings, list):
        spendings = []
    months = np.array([1, 2, 3, 4, 5, 6]).reshape(-1, 1)
    savings_history = [salary - sum(spendings) * (1 + i * 0.05) for i in range(6)]
    return months, savings_history

def clean_text(text):
    if not text:
        return ""
    cleaned_text = re.sub(r'[*#]', '', text)
    return cleaned_text

def extract_stock_symbols(stocks):
    # Extract symbols like 'NSE:RELIANCE' from 'NSE:RELIANCE - Reliance Industries - ₹2500'
    symbols = []
    for stock in stocks:
        match = re.match(r'(NSE:[A-Za-z]+)', stock)
        if match:
            symbols.append(match.group(1))
    return symbols

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/calculate_savings', methods=['POST'])
def calculate_savings():
    data = request.json
    salary = data.get('salary', 0)
    spendings = data.get('spendings', [])
    total_spendings = sum(spendings)
    savings = salary - total_spendings
    return jsonify({"savings": savings, "message": "Savings calculated successfully."})

@app.route('/ai_suggestions', methods=['POST'])
def ai_suggestions():
    data = request.json
    savings = data.get('savings', 0)
    cache_key = hashlib.md5(f"{savings}".encode()).hexdigest()

    if cache_key in ai_suggestions_cache:
        return jsonify({"suggestions": ai_suggestions_cache[cache_key]})

    try:
        model = genai.GenerativeModel('gemini-1.5-flash')
        prompt = f"I have ₹{savings} in savings each month. Please suggest financial planning ideas, including savings, investment, and expense reduction. Make it simple for example I do not know much about finance. Give response in less than 210 words."
        response = model.generate_content(prompt)
        suggestion = response.text if response and hasattr(response, 'text') else "No AI response."
        cleaned_suggestion = clean_text(suggestion)
        ai_suggestions_cache[cache_key] = cleaned_suggestion
        return jsonify({"suggestions": cleaned_suggestion})
    except Exception as e:
        print(f"AI Suggestion Error: {e}")
        return jsonify({"error": f"AI suggestion failed: {str(e)}"}), 500

@app.route('/get_investment_recommendations', methods=['POST'])
def get_investment_recommendations():
    data = request.json
    savings = data.get('savings', 0)
    cache_key = hashlib.md5(f"{savings}".encode()).hexdigest()

    if cache_key in stock_recommendations_cache:
        return jsonify({"stocks": stock_recommendations_cache[cache_key]})

    try:
        model = genai.GenerativeModel('gemini-1.5-flash')
        prompt = f"List 5 affordable Indian stocks I can buy with ₹{savings} savings. Provide only the stock names and approximate prices in INR in the format 'Stock Name - ₹Price', one per line. Do not include any additional text, paragraphs, disclaimers, or explanations. Just the list."
        response = model.generate_content(prompt)
        stock_text = response.text if response and hasattr(response, 'text') else "No stock recommendations."
        cleaned_stock_text = clean_text(stock_text)
        stocks = [stock.strip() for stock in cleaned_stock_text.split('\n') if stock.strip()]
        stock_recommendations_cache[cache_key] = stocks
        print(f"Gemini stock recommendations: {stocks}")
        return jsonify({"stocks": stocks})
    except Exception as e:
        print(f"Stock Recommendation Error: {e}")
        return jsonify({"error": f"Stock recommendation failed: {str(e)}"}), 500

@app.route('/financial_analysis', methods=['POST'])
def financial_analysis():
    data = request.json
    salary = data.get('salary', 0)
    spendings = data.get('spendings', [])
    savings = data.get('savings', 0)
    cache_key = hashlib.md5(f"{salary}{spendings}{savings}".encode()).hexdigest()

    if cache_key in ai_suggestions_cache:
        return jsonify({"analysis": ai_suggestions_cache[cache_key]})

    try:
        months, savings_history = get_historical_data(salary, spendings)
        model = LinearRegression()
        model.fit(months, savings_history)
        next_month = np.array([[7]])
        predicted_savings = model.predict(next_month)[0]

        model_ai = genai.GenerativeModel('gemini-1.5-flash')
        prompt = (
            f"Analyze this financial data: Monthly salary ₹{salary}, monthly spendings {spendings}, "
            f"current savings ₹{savings}. Predict savings for next month is ₹{predicted_savings:.2f}. "
            f"Provide 3 simple insights for someone new to finance in less than 150 words."
        )
        response = model_ai.generate_content(prompt)
        analysis = clean_text(response.text) if response and hasattr(response, 'text') else "No analysis available."
        ai_suggestions_cache[cache_key] = analysis
        return jsonify({
            "analysis": analysis,
            "predicted_savings": f"₹{predicted_savings:.2f}"
        })
    except Exception as e:
        print(f"Financial Analysis Error: {e}")
        return jsonify({"error": f"Analysis failed: {str(e)}"}), 500

@app.route('/financial_dashboard', methods=['POST'])
def financial_dashboard():
    data = request.json
    salary = data.get('salary', 0)
    spendings = data.get('spendings', [])
    cache_key = hashlib.md5(f"{salary}{spendings}".encode()).hexdigest()

    if cache_key in ai_suggestions_cache:
        return jsonify(ai_suggestions_cache[cache_key])

    try:
        # Calculate savings
        total_spendings = sum(spendings)
        savings = salary - total_spendings

        # AI Suggestions
        model_suggest = genai.GenerativeModel('gemini-1.5-flash')
        suggestion_prompt = f"I have ₹{savings} in savings each month. Please suggest financial planning ideas, including savings, investment, and expense reduction. Make it simple for example I do not know much about finance. Give response in less than 210 words."
        suggestion_response = model_suggest.generate_content(suggestion_prompt)
        suggestions = clean_text(suggestion_response.text) if suggestion_response and hasattr(suggestion_response, 'text') else "No suggestions."

        # Investment Recommendations
        model_invest = genai.GenerativeModel('gemini-1.5-flash')
        invest_prompt = f"List 5 affordable Indian stocks I can buy with ₹{savings} savings. Provide the stock ticker symbol (e.g., NSE:RELIANCE) and full name (e.g., Reliance Industries) with approximate prices in INR in the format 'NSE:SYMBOL - Full Name - ₹Price', one per line. No additional text including disclaimers and warnings."
        invest_response = model_invest.generate_content(invest_prompt)
        invest_text = clean_text(invest_response.text) if invest_response and hasattr(invest_response, 'text') else "No recommendations."
        stocks = [stock.strip() for stock in invest_text.split('\n') if stock.strip()]
        stock_symbols = extract_stock_symbols(stocks)  # Extract symbols like 'NSE:RELIANCE'

        # Financial Analysis
        months, savings_history = get_historical_data(salary, spendings)
        model_lr = LinearRegression()
        model_lr.fit(months, savings_history)
        next_month = np.array([[7]])
        predicted_savings = model_lr.predict(next_month)[0]

        model_analyze = genai.GenerativeModel('gemini-1.5-flash')
        analysis_prompt = (
            f"Analyze this financial data: Monthly salary ₹{salary}, monthly spendings {spendings}, "
            f"current savings ₹{savings}. Predict savings for next month is ₹{predicted_savings:.2f}. "
            f"Provide 3 simple insights for someone new to finance in less than 150 words."
        )
        analysis_response = model_analyze.generate_content(analysis_prompt)
        analysis = clean_text(analysis_response.text) if analysis_response and hasattr(analysis_response, 'text') else "No analysis."

        dashboard_data = {
            "savings": savings,
            "suggestions": suggestions,
            "stocks": stocks,
            "stock_symbols": stock_symbols,  # Add stock symbols to response
            "analysis": analysis,
            "predicted_savings": f"₹{predicted_savings:.2f}"
        }
        ai_suggestions_cache[cache_key] = dashboard_data
        return jsonify(dashboard_data)
    except Exception as e:
        print(f"Dashboard Error: {e}")
        return jsonify({"error": f"Dashboard generation failed: {str(e)}"}), 500

if __name__ == '__main__':
    app.run(debug=True)