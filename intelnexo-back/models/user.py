from database.db import db

class User(db.Model):
    __tablename__ = 'usuarios'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)

    cuentas = db.relationship('Account', backref='usuario', lazy=True)

    def __repr__(self):
        return '<User %r>' % self.username