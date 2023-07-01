from flask import request, jsonify
from functools import wraps
import jwt
from pymongo import MongoClient
from datetime import datetime
from bson import ObjectId

def TokenAdmin(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        client = MongoClient('mongodb+srv://aliahmadjan:12345@cluster0.j5u9lxj.mongodb.net/LearnLive?retryWrites=true&w=majority&ssl=true')
        db = client['BusReservationSystem']
        admin = db['admin']
        authorization = request.headers.get('Authorization')
        if not authorization:
            return jsonify({'error': 'Unauthorized'}), 401

        token = authorization.replace("Bearer ", "")
       
        #print(token)
        try:
            #print("HELLO WORLD")
            decoded_token = jwt.decode(token, "MYNAMEIS", algorithms=['HS256'])
            print(decoded_token)
            admin_id = decoded_token['sub']
            #print(user_id)
            admin_data = admin.find_one({'_id': ObjectId(admin_id)})
            print(admin_data)
            if not admin_data:
                return jsonify({'error': 'Invalid user'}), 401

            request.admin = admin_data

            return f(*args, **kwargs)
        except jwt.ExpiredSignatureError:
            return jsonify({'error': 'Token has expired'}), 401
        except jwt.InvalidTokenError:
            return jsonify({'error': 'Invalid token'}), 401

    return decorated_function
