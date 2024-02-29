from flask import Blueprint, jsonify, request
from flask_pydantic import validate
import traceback
from models.user import User
from utils.Logger import Logger 
from schemas.payment import PaymentRequest


main = Blueprint('users_blueprint', __name__)

@main.route('/')
def get_users():
    try:
        users = User.query.all()

        user_list = []
        for user in users:
            user_data = {
                'id': user.id,
                'username': user.username,
                'email': user.email,
                'cuentas': [{'id': cuenta.id, 'saldo': cuenta.saldo} for cuenta in user.cuentas]
            }
            user_list.append(user_data)

        return jsonify(user_list)
    except Exception as e:
        Logger.add_to_log('error', str(e))
        Logger.add_to_log('error', traceback.format_exc())
        return jsonify({'message': 'ERROR', 'success': False})

@main.route('/pay', methods=['POST'])
@validate()
def pay(body: PaymentRequest):
    try:
        user_id = body.user_id  
        cuenta_id = body.cuenta_id
        monto = body.monto 

        user = User.query.get(user_id)
        if user is None:
            return jsonify({'message': 'Usuario no existe', 'success': False})

        cuenta = user.get_cuenta(cuenta_id)
        if cuenta is None:
            return jsonify({'message': 'Cuenta no existe', 'success': False})

        if cuenta.saldo <= 0:
            return jsonify({'message': 'Cuenta no tiene deuda', 'success': False})

        if monto <= 0:
            return jsonify({'message': 'Monto debe ser mayor a 0', 'success': False})

        if monto > cuenta.saldo:
            return jsonify({'message': 'Monto mayor a deuda', 'success': False})

        cuenta.saldo -= monto
        cuenta.save()

        return jsonify({'message': 'Pago exitoso', 'saldo': cuenta.saldo, 'success': True})
    except Exception as e:
        Logger.add_to_log('error', str(e))
        Logger.add_to_log('error', traceback.format_exc())
        return jsonify({'message': 'ERROR', 'success': False, "error": str(e), "traceback": traceback.format_exc()})


