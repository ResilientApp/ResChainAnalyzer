from flask import Flask, redirect
import requests

app = Flask(__name__)

@app.route('/')
def home():
    response = requests.get('http://127.0.0.1:18000/v1/transactions')
    with open('/var/www/html/ResDB-Chain-Analyzer/ResDB-Chain-Analyzer/Finecharts/js/settings/transactions.json', 'w') as f:
        f.write(response.text)
    return redirect("http://34.29.209.247/ResDB-Chain-Analyzer/ResDB-Chain-Analyzer/index.html")

if __name__ == '__main__':
    app.run(host='0.0.0.0')
