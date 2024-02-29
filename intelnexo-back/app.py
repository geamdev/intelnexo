from flask import Flask
from dotenv import load_dotenv
from flask_cors import CORS, cross_origin


import os
from database.db import db
from database.seed import seed_database
from routes import users

load_dotenv()

app = Flask(__name__)
# CORS(app, resources={r"/users/*": {"origins": ["http://localhost:4200"], "methods": ["GET", "POST", "PUT", "DELETE"]}})
cors = CORS(app, resource={
    r"/":{
        "origins":""
    }
})
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['CORS_HEADERS'] = 'Content-Type'

db.init_app(app)

from models.user import User
from models.account import Account

with app.app_context():
    db.create_all()
    seed_database()

app.register_blueprint(users.main, url_prefix='/users')
    

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
