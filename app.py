from flask import Flask, redirect
import requests

IP_ADDRESS_TO_TRANSACTIONS = 'http://127.0.0.1:18000/v1/transactions'
IP_ADDRESS_TO_HOSTING_SITE = 'http://34.29.209.247'


app = Flask(__name__)

@app.route('/')
def home():
    response = requests.get(IP_ADDRESS_TO_TRANSACTIONS)
    with open('/var/www/html/ResDB-Chain-Analyzer/Finecharts/js/settings/transactions.json', 'w') as f:
        f.write("jsonfile = \'" + response.text + "\';")
    return redirect(IP_ADDRESS_TO_HOSTING_SITE + 
                    "/ResDB-Chain-Analyzer/ResDB-Chain-Analyzer/index.html")

if __name__ == '__main__':
    app.run(host='0.0.0.0')
