from database.db import db
from models.account import Account

class User(db.Model):
    __tablename__ = 'usuarios'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)

    cuentas = db.relationship('Account', backref='usuario', lazy=True)

    def get_cuenta(self, cuenta_id):
        return Account.query.filter_by(user_id=self.id, id=cuenta_id).first()


    def __repr__(self):
        return '<User %r>' % self.username
    
    