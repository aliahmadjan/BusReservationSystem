from flask import request, jsonify
from functools import wraps
import jwt
from pymongo import MongoClient
from datetime import datetime
from bson import ObjectId

def TokenUser(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        client = MongoClient('mongodb+srv://aliahmadjan:12345@cluster0.j5u9lxj.mongodb.net/LearnLive?retryWrites=true&w=majority&ssl=true')
        db = client['BusReservationSystem']
        users = db['users']
        authorization = request.headers.get('Authorization')
        if not authorization:
            return jsonify({'error': 'Unauthorized'}), 401

        token = authorization.replace("Bearer ", "")
       
        print(token)
        try:
            #print("HELLO WORLD")
            decoded_token = jwt.decode(token, "HELLOUSER123", algorithms=['HS256'])
            #print(decoded_token)
            user_id = decoded_token['sub']
            #print(user_id)
            user_data = users.find_one({'_id': ObjectId(user_id)})
            #print(user_data)
            if not user_data:
                return jsonify({'error': 'Invalid user'}), 401

            request.users = user_data

            return f(*args, **kwargs)
        except jwt.ExpiredSignatureError:
            return jsonify({'error': 'Token has expired'}), 401
        except jwt.InvalidTokenError:
            return jsonify({'error': 'Invalid token'}), 401

    return decorated_function
