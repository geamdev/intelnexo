from database.db import db

class Account(db.Model):
    __tablename__ = 'cuentas'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('usuarios.id'), nullable=False)
    saldo = db.Column(db.Float, default=0.0)

    def __repr__(self):
        return f'Cuenta(user_id={self.user_id}, saldo={self.saldo})'
