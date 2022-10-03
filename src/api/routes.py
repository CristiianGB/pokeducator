"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Favorites, Pokemon, Pokemon_Fusion
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import JWTManager, create_access_token,jwt_required, get_jwt_identity

api = Blueprint('api', __name__)

@api.route("/signup", methods=["POST"])
def sign_up():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    username = request.json.get("username", None)
    first_name = request.json.get("first_name", None)
    last_name = request.json.get("last_name", None)

    user = User(username=username, first_name=first_name, last_name=last_name, email=email, password=password)
    json= request.get_json()

    db.session.add(user)
    db.session.commit() 
    return jsonify([]), 200


@api.route("/login", methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    print(email, password)
    user = User.query.filter_by(email=email, password=password).first()
    if user is None:
        return jsonify({"msg": "Bad username or email"}), 401
    
    access_token = create_access_token(identity=user.id)
    return jsonify({ "token": access_token, "user_id": user.id })

 
@api.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)
    
    return jsonify({"id": user.id, "email": user.email}), 200




