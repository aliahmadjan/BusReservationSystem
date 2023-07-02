import json
from flask import Flask, request, jsonify
import pickle
import pandas as pd
from datetime import datetime, timedelta
import re
from bson import ObjectId
import os
import numpy as np
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from flask_cors import CORS
from pymongo import MongoClient
from werkzeug.security import check_password_hash , generate_password_hash
from Middleware.UserToken import TokenUser
from Middleware.AdminToken import TokenAdmin
# ...

app = Flask(__name__)
app.config['JWT_SECRET_KEY'] = "HELLOUSER123"  # Change this to your own secret key
jwt = JWTManager(app)
app.debug = True
CORS(app)

# Replace the connection string with your own MongoDB connection string
client = MongoClient('mongodb+srv://aliahmadjan:12345@cluster0.j5u9lxj.mongodb.net/LearnLive?retryWrites=true&w=majority&ssl=true')
db = client['BusReservationSystem']
users = db['users']
admins = db['admins']
buses = db['buses']
routes = db['routes']
drivers = db['drivers']
reservations = db['reservations']
messages = db['messages']
receipts = db['receipts']
# short_reservation = db['shortReservations']


@app.route('/users/adduser', methods=['POST'])
def adduser():
    uniID = request.json.get('uniID')
    name = request.json.get('name')
    password = request.json.get('password')
   

    if not uniID or not name or not isinstance(password, str):    
        return jsonify({'error': 'Please Fill All the Fields'}), 422

    user = users.find_one({'uniID': uniID})
    if user:
        return jsonify({'error': 'Invalid Credentials'})

    # password_hash = generate_password_hash(password)
    user_dict = {
        'uniID': uniID,
        'name' : name,
        'password': password
    }
    users.insert_one(user_dict)

    return jsonify({'message': 'User added successfully'})


@app.route('/users/login', methods=['POST'])
def user_login():
    uniID = request.json.get('uniID')
    password = request.json.get('password')

    user = users.find_one({'uniID': uniID})
    if not user or user['password'] != password:
        return jsonify({'message': 'Invalid Credentials'}), 401

    # Generate new access token
    access_token = create_access_token(identity=str(user['_id']))

    # Create token object with token and expiry time
    expiry = datetime.utcnow() + timedelta(hours=48)
    token_object = {'token': access_token, 'expiry': expiry ,  '_id': ObjectId()}

    # Remove expired tokens from access_tokens array
    users.update_one(
        {'_id': ObjectId(user['_id'])},
        {'$pull': {'access_tokens': {'expiry': {'$lt': datetime.utcnow()}}}}
    )

    # Add the new access token object to the access_tokens array
    users.update_one(
        {'_id': ObjectId(user['_id'])},
        {'$push': {'access_tokens': token_object}}
    )

    # Return the access token to the client
    return jsonify({'message': 'User Logins Successfully'}, access_token), 200   

@app.route('/users/viewuprofile', methods=['GET'])
@TokenUser
def view_user_profile():
    # Access the authenticated user using `request.users`
    user = request.users
    print(user)
    # Perform actions with the user data
    # Serialize the user data into a dictionary or JSON format
    serialized_user = {
        'id': str(user['_id']),
        'name': user['name'],
        # Add other user attributes as needed
    }
    return jsonify(serialized_user), 200


@app.route('/admin/addadmin', methods=['POST'])
def addadmin():
    adminID = request.json.get('adminID')
    name = request.json.get('name')
    password = request.json.get('password')
   

    if not adminID or not name or not isinstance(password, str):    
        return jsonify({'error': 'Please Fill All the Fields'}), 422

    admin = admins.find_one({'adminID': adminID})
    if admin:
        return jsonify({'error': 'Invalid Credentials'})

    # password_hash = generate_password_hash(password)
    admin_dict = {
        'adminID': adminID,
        'name' : name,
        'password': password
    }
    admins.insert_one(admin_dict)

    return jsonify({'message': 'Admin added successfully'})

@app.route('/admin/login', methods=['POST'])
def adminLogin():
    adminID = request.json.get('adminID')
    password = request.json.get('password')

    admin = admins.find_one({'adminID': adminID})
    if not admin or admin['password'] != password:
        return jsonify({'message': 'Invalid Credentials'}), 401

    # Generate new access token
    access_token = create_access_token(identity=str(admin['_id']))

    # Create token object with token and expiry time
    expiry = datetime.utcnow() + timedelta(hours=48)
    token_object = {'token': access_token, 'expiry': expiry ,  '_id': ObjectId()}

    # Remove expired tokens from access_tokens array
    admins.update_one(
        {'_id': ObjectId(admin['_id'])},
        {'$pull': {'access_tokens': {'expiry': {'$lt': datetime.utcnow()}}}}
    )

    # Add the new access token object to the access_tokens array
    admins.update_one(
        {'_id': ObjectId(admin['_id'])},
        {'$push': {'access_tokens': token_object}}
    )

    # Return the access token to the client
    return jsonify({'message': 'Admin Logins Successfully'}, access_token), 200 

@app.route('/admin/viewaprofile', methods=['GET'])
@TokenAdmin
def view_admin_profile():
    # Access the authenticated user using `request.users`
    admin = request.admins
    #print(admin)
    # Perform actions with the user data
    # Serialize the user data into a dictionary or JSON format
    serialized_admin = {
        'id': str(admin['_id']),
        'name': admin['name'],
        # Add other user attributes as needed
    }
    return jsonify(serialized_admin), 200

@app.route('/users/reservations', methods = ['POST'])
def AddReservations():
    uniID = request.json.get('uniID')
    name = request.json.get('name')
    destination= request.json.get('destination')
    contact = request.json.get('contact')
    startdate = request.json.get('startdate')
    enddate = request.json.get('enddate')
    emergency_contact = request.json.get('emergency_contact')
    reservation_type = request.json.get('reservation_type')

    #Store the inform in the table
    reservation_dict = {
        'uniID' : uniID,
        'name' : name,
        'destination' : destination,
        'contact' : contact,
        'startdate' : startdate,
        'enddate': enddate,
        'emergency_contact' : emergency_contact,
        'reservation_type' : reservation_type
    }

    reservations.insert_one(reservation_dict)

    return jsonify({'message': 'Regular Reservation Added Successfully!'}), 200

@app.route('/admin/getreservations', methods = ['GET'])
def getReservations():
    result = reservations.find({})
    print(result)
    reservations_list = []
    for reservation in result:
        reservations_list.append({
        'uniID': reservation['uniID'],
        'name': reservation['name'],
        'destination': reservation['destination'],
        'contact': reservation['contact'],
        'startdate': reservation['startdate'],
        'enddate': reservation['enddate'],
        'emergency_contact': reservation['emergency_contact'],
        'reservation_type':reservation['reservation_type']
    })

    return jsonify(reservations_list), 200



@app.route('/admin/addbuses', methods = ['POST'])
def AddBuses():
    busID = request.json.get('busID')
    no_of_seats = request.json.get('no_of_seats')
    available_seats = request.json.get('available_seats')
    driverName = request.json.get('driverName')
    
    # Check if the driverName already exists
    existing_bus = buses.find_one({'driverName': driverName})
    if existing_bus:
        return jsonify({'message': 'Driver already exists. Cannot add the bus.'}), 400


    #Store the inform in the table
    bus_dict = {
        'busID' : busID,
        'no_of_seats' : no_of_seats,
        'available_seats' : available_seats,
        'driverName' : driverName
        }
       

    buses.insert_one(bus_dict)

    return jsonify({'message': 'Bus Added Successfully!'}), 200

@app.route('/admin/getbuses', methods = ['GET'])
def GetBuses():
    result = buses.find({})
    #print(result)
    buses_list = []
    for bus in result:
        buses_list.append({
        'busID': bus['busID'],
        'no_of_seats': bus['no_of_seats'],
        'available_seats': bus['available_seats'],
        'driverName': bus['driverName'],
    })

    return jsonify(buses_list), 200




@app.route('/admin/adddrivers', methods = ['POST'])
def AddDrivers():
    driverName = request.json.get('driverName')
    cnic = request.json.get('cnic')
    license_no = request.json.get('license_no')
    driver_status = request.json.get('driver_status')
    
    # Check if the driverName already exists
    existing_driver = drivers.find_one({'driverName': driverName})
    if existing_driver:
        return jsonify({'message': 'Driver already exists. Cannot add the driver.'}), 400


    #Store the inform in the table
    driver_dict = {
        'driverName' : driverName,
        'cnic' : cnic,
        'license_no' : license_no,
        'driver_status': driver_status
        }
       

    drivers.insert_one(driver_dict)

    return jsonify({'message': 'Driver Added Successfully!'}), 200

@app.route('/admin/getdrivers', methods = ['GET'])
def GetDrivers():
    result = drivers.find({})
    #print(result)
    drivers_list = []
    for driver in result:
        drivers_list.append({
        'cnic': driver['cnic'],
        'driverName': driver['driverName'],
        'license_no': driver['license_no'],
        'driver_status': driver['driver_status'],
    })

    return jsonify(drivers_list), 200



@app.route('/admin/addroutes', methods = ['POST'])
def AddRoutes():
    busID = request.json.get('busID')
    driverName = request.json.get('driverName')
    route = request.json.get('route')
    stops = request.json.get('stops')
    
    # Check if the driverName already exists
    existing_route = routes.find_one({'route': route})
    if existing_route:
        return jsonify({'message': 'Route already exists. Cannot add the route.'}), 400


    #Store the inform in the table
    route_dict = {
        'busID' : busID,
        'driverName' : driverName,
        'route' : route,
        'stops' : stops
        }
       

    routes.insert_one(route_dict)

    return jsonify({'message': 'Route Added Successfully!'}), 200


@app.route('/admin/getroutes', methods = ['GET'])
def GetRoutes():
    result = routes.find({})
    #print(result)
    routes_list = []
    for route in result:
        routes_list.append({
        'busID': route['busID'],
        'driverName': route['driverName'],
        'route': route['route'],
        'stops': route['stops'],
    })

    return jsonify(routes_list), 200



@app.route('/users/messages', methods = ['POST'])
def SendMessages():
    name = request.json.get('name')
    regID = request.json.get('regID')
    contact = request.json.get('contact')
    message = request.json.get('message')

    #Store the inform in the table
    message_dict = {
        'name' : name,
        'regID' : regID,
        'contact' : contact,
        'message' : message
        }
       
    messages.insert_one(message_dict)

    return jsonify({'message': 'Message Send Successfully!'}), 200


@app.route('/admin/getmessages', methods = ['GET'])
def getMessages():
    result = messages.find({})
    #print(result)
    messages_list = []
    for message in result:
        messages_list.append({
        'name': message['name'],
        'regID': message['regID'],
        'message': message['message'],
        'contact': message['contact'],
    })

    return jsonify(messages_list), 200

@app.route('/admin/generatereceipt', methods = ['POST'])
def GenerateReceipt():
    services = request.json.get('services')
    seats = request.json.get('seats')
    amount = request.json.get('amount')
 

    #Store the inform in the table
    receipts_dict = {
        'services' : services,
        'seats' : seats,
        'amount' : amount,
        }
       
    receipts.insert_one(receipts_dict)

    return jsonify({'message': 'Message Send Successfully!'}), 200

@app.route('/admin/getreceipt', methods = ['GET'])
def getReceipt():
    result = receipts.find({})
    #print(result)
    receipts_list = []
    for receipt in result:
        receipts_list.append({
        'services': receipt['services'],
        'seats': receipt['seats'],
        'amount': receipt['amount'],
       
    })

    return jsonify(receipts_list), 200



# run the app
if __name__ == '__main__':
    print("working")
    app.run(debug=True , host='0.0.0.0')
    print("working")
