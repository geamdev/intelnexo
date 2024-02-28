from flask import Flask, jsonify
from dotenv import load_dotenv
import os
from database.db import db
from database.seed import seed_database
from routes import users

load_dotenv()

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False


db.init_app(app)

from models.user import User
from models.account import Account

with app.app_context():
    db.create_all()
    seed_database()


app.register_blueprint(users.main, url_prefix='/users')
    

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
