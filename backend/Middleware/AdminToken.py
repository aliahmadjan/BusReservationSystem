from flask import request, jsonify
from functools import wraps
import jwt
from pymongo import MongoClient
from datetime import datetime
from bson import ObjectId

def TokenAdmin(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        #Add your mongodb URL here
        client = MongoClient('mongodb+srv://muhammaddanish155:mongodbprog123@tms.xpsuglx.mongodb.net/?retryWrites=true&w=majority')

        #client = MongoClient('')
        db = client['BusReservationSystem']
        admins = db['admins']
        authorization = request.headers.get('Authorization')
        if not authorization:
            return jsonify({'error': 'Unauthorized'}), 401

        token = authorization.replace("Bearer ", "")
       
        #print(token)
        try:
            #print("HELLO WORLD")
            decoded_token = jwt.decode(token, "HELLOUSER123", algorithms=['HS256'])
            #print(decoded_token)
            admin_id = decoded_token['sub']
            #print(admin_id)
            admin_data = admins.find_one({'_id': ObjectId(admin_id)})
            #print(admin_data)
            if not admin_data:
                return jsonify({'error': 'Invalid user'}), 401

            request.admins = admin_data

            return f(*args, **kwargs)
        except jwt.ExpiredSignatureError:
            return jsonify({'error': 'Token has expired'}), 401
        except jwt.InvalidTokenError:
            return jsonify({'error': 'Invalid token'}), 401

    return decorated_function
