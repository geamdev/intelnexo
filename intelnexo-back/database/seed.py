from models.user import User
from models.account import Account

from .db import db

def seed_database():
    if not User.query.first():
        for i in range(5):
            username = f'user{i}'
            email = f'user{i}@example.com'
            user = User(username=username, email=email)
            db.session.add(user)

            for j in range(3):
                account = Account(saldo=1000)
                user.cuentas.append(account)


        db.session.commit()
