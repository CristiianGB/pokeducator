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









@api.route('/contact/all', methods=['GET'])
def get_contacts_all():
    contacts = Contact.query.all()
    serializer = list(map(lambda contact: contact.serialize(), contacts)) 
    
    return jsonify({
        "data": serializer
    }), 200

@api.route('/contact/<int:id>', methods=['GET']) 
def get_contact(id):
    # coger el que coincide exactamente (query.get)
    contact = Contact.query.get(id)
    if contact is not None:
        return jsonify({
            "data": contact.serialize()
            }), 200
    
    return jsonify({"message": "El contacto no existe"}), 404

@api.route('/contact/create', methods=['POST'])
def create_contact():
    data = request.get_json()
    phone = data.get("phone", None)
    name = data.get("name", None)

    if phone is None:
        return jsonify({"message": "El teléfono no puede estar vacío"}), 400
    if name is None:
        return jsonify({"message": "El nombre no puede estar vacío"}), 400

    contact = Contact(
        full_name = name,
        phone = phone,
        address = data.get('address'),
        email = data.get('email'),
        groups = data.get('groups',[])
    )

    db.session.add(contact)
    db.session.commit()

    return jsonify({"data": contact.serialize()}), 201

    
  

@api.route("/products", methods=["GET"])
def get_all_products():
    products = Product.query.all()
    serializer = list(map( lambda product : product.serialize() , products))
    if serializer is None:
        return jsonify({"msg" : "no products to get"}), 400
    return jsonify({"results": serializer , "msg": "all products got"}), 200

#quiero el carts del user que te paso como param 
@api.route("/carts/<int:user_id>", methods=["GET"])
def get_carts_user(user_id):
    carts = Cart.query.filter_by(user_id=user_id)
    serializer = list(map(lambda product: product.serialize(), carts))
    return jsonify({"results": serializer, "msg": "pericopalote"}), 200

@api.route("/newProduct", methods=["POST"])
def create_product():
    new_product_name = request.json.get("name")
    new_product_price = request.json.get("price")
    new_product = Product(
        product_name = new_product_name,
        product_price=new_product_price
    )
    db.session.add(new_product)
    db.session.commit()
    return jsonify({"msg":"new product created", "results": new_product.serialize()}),200