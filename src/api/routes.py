"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Favorites, Pokemon, Nature, Pokemon_Fusion, Moves, Pokemon_Move, Ability, Item, Pokemon_Ability
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from sqlalchemy import inspect

api = Blueprint('api', __name__)




@api.route("/signup", methods=["POST"])
def sign_up():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    username = request.json.get("username", None)
    first_name = request.json.get("first_name", None)
    last_name = request.json.get("last_name", None)

    user = User(username=username, first_name=first_name,
                last_name=last_name, email=email, password=password)
    json = request.get_json()

    db.session.add(user)
    db.session.commit()
    return jsonify([]), 200


@api.route("/createPokemon", methods=["POST"])
def createPokemon():
    replacements = (
        ("á", "a"),
        ("é", "e"),
        ("í", "i"),
        ("ó", "o"),
        ("ú", "u"),
        ("ñ", "n")
    )

    name = request.json.get("name", None)
    img = request.json.get("img", None)
    type = request.json.get("type", None)
    url = request.json.get("url", None)
    id = request.json.get("id", None)
    order = request.json.get("order", None)
    description = request.json.get("description", None)
    shiny = request.json.get("shiny", None)
    weight = request.json.get("weight", None)
    height = request.json.get("height", None)
    atk = request.json.get("atk", None)
    sp_atk = request.json.get("sp_atk", None)
    defens = request.json.get("defens", None)
    sp_defens = request.json.get("sp_defens", None)
    ps = request.json.get("ps", None)
    spd = request.json.get("spd", None)
    learning = request.json.get("learning", None)
    group_name = request.json.get("group_name", None)
    for a, b in replacements:
        if (description):
            description = description.replace(
                a, b).replace(a.upper(), b.upper())
            description = description.replace("\n", " ")

    pokemon = Pokemon(id=id, name=name, ps=ps, atk=atk, sp_atk=sp_atk, spd=spd, defens=defens, sp_defens=sp_defens, img=img,
                      type=type, url=url, order=order, description=description, shiny=shiny, weight=weight, height=height, group_name=group_name)
    db.session.add(pokemon)

    db.session.commit()


    #if (learning):
    #    
    #    for i in learning:
    #        move = db.session.query(Moves).filter_by(id=i).first().findone()
    #        pokemon = db.session.query(Pokemon).filter_by(name=name).first().findone()
    #        pokemove = Pokemon_Move(pokemon_id=pokemon["pokemon_id"], move_id=move["move_id"])
    #        db.session.add(pokemove)
    #        db.session.commit()
    return jsonify({"pokemon": "a"}), 200


@api.route("/createMove", methods=["POST"])
def createMove():
    replacements = (
        ("á", "a"),
        ("é", "e"),
        ("í", "i"),
        ("ó", "o"),
        ("ú", "u"),
        ("ñ", "n")
    )

    name = request.json.get("name", None)
    id = request.json.get("id", None)
    generation = request.json.get("generation", None)
    description = request.json.get("description", None)
    accuracy = request.json.get("accuracy", None)
    pp = request.json.get("pp", None)
    type = request.json.get("type", None)
    damage_class = request.json.get("damage_class", None)
    power = request.json.get("power", None)
    priority = request.json.get("priority", None)
    learning = request.json.get("learning", None)

    for a, b in replacements:
        if (description):
            description = description.replace(
                a, b).replace(a.upper(), b.upper())
            description = description.replace("\n", " ")

    move = Moves(id=id, name=name, description=description, generation=generation, accuracy=accuracy,
                 pp=pp, type=type, damage_class=damage_class, power=power, priority=priority)
    db.session.add(move)
    db.session.commit()


    if (learning):
        move = db.session.query(Moves).filter_by(
        name=name).first().findone()
        print(move)
        for i in learning:
            pokemon = db.session.query(Pokemon).filter_by(
                    name=i).first().findone()
            pokemove = Pokemon_Move(
                pokemon_id=pokemon["pokemon_id"], move_id=move["move_id"])
            db.session.add(pokemove)
            db.session.commit()
   


    return jsonify({"move": "a"}), 200


@api.route("/createAbility", methods=["POST"])
def createAbility():
    replacements = (
        ("á", "a"),
        ("é", "e"),
        ("í", "i"),
        ("ó", "o"),
        ("ú", "u"),
        ("ñ", "n")
    )

    name = request.json.get("name", None)
    id = request.json.get("id", None)
    generation = request.json.get("generation", None)
    description = request.json.get("description", None)
    learning = request.json.get("learning", None)

    for a, b in replacements:
        if (description):
            description = description.replace(a, b).replace(a.upper(), b.upper())
            description = description.replace("\n", " ")

    ability = Ability(id=id, name=name,
                      description=description, generation=generation)
    db.session.add(ability)
    db.session.commit()

    if (learning):
        ability = db.session.query(Ability).filter_by(
            name=name).first().findone()
        for i in learning:
            pokemon = db.session.query(Pokemon).filter_by(
                name=i).first().findone()
            pokeability = Pokemon_Ability(
                pokemon_id=pokemon["pokemon_id"], ability_id=ability["ability_id"])
            db.session.add(pokeability)
            db.session.commit()
    return jsonify({"ability": "ability"}), 200


@api.route("/createItem", methods=["POST"])
def createItem():
    replacements = (
        ("á", "a"),
        ("é", "e"),
        ("í", "i"),
        ("ó", "o"),
        ("ú", "u"),
        ("ñ", "n")
    )

    name = request.json.get("name", None)
    id = request.json.get("id", None)
    cost = request.json.get("cost", None)
    description = request.json.get("description", None)
    img = request.json.get("img", None)

    if(id):
        for a, b in replacements:
                if (description):
                    description = description.replace(a, b).replace(a.upper(), b.upper())
                    description = description.replace("\n", " ")

        item = Item(id=id, name=name, description=description, cost=cost, img=img)
        db.session.add(item)

        db.session.commit()
        
    return jsonify({"item": "item"}), 200


@api.route("/createNature", methods=["POST"])
def createNature():
    
    name = request.json.get("name", None)
    id = request.json.get("id", None)
    decrease_stat = request.json.get("decrease_stat", None)
    increase_stat = request.json.get("increase_stat", None)
    
    nature = Nature(id=id, name=name, decrease_stat=decrease_stat,
                    increase_stat=increase_stat)
    db.session.add(nature)
    db.session.commit()
    return jsonify({"nature": "nature"}), 200


@api.route("/login", methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    print(email, password)
    user = User.query.filter_by(email=email, password=password).first()
    if user is None:
        return jsonify({"msg": "Bad username or email"}), 401

    access_token = create_access_token(identity=user.id)
    return jsonify({"token": access_token, "user_id": user.id})


@api.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)

    return jsonify({"id": user.id, "email": user.email}), 200


@api.route("/all", methods=["GET"])
def all():

 #   pokemon = Pokemon.query.order_by(Pokemon.id.asc())
  #  pokemon = list(map(lambda x: x.serialize(), pokemon))
    # print(pokemon)
    all = Pokemon_Move.query.filter_by(pokemon_id=1)
    all = list(map(lambda x: x.serialize(), all))
    return jsonify(all), 200


@api.route("/allmovabi/<int:pokemon_id>", methods=["GET"])
def allmoves(pokemon_id):
    moves = []
    rows = Pokemon_Move.query.filter_by(pokemon_id=pokemon_id)
    rows = list(map(lambda x: x.serialize(), rows))
    for i in rows:
        move = Moves.query.filter_by(move_id=i["move_id"]).first().serialize()
        moves.append(move)
    print(moves)
    pokemon = Pokemon.query.filter_by(id=pokemon_id).first().serialize()
    pokeid = Pokemon.query.filter_by(id=pokemon_id).first().findone()
    abilities = []
    print(pokeid["pokemon_id"])
    rows = Pokemon_Ability.query.filter_by(pokemon_id=pokeid["pokemon_id"])
    rows = list(map(lambda x: x.serialize(), rows))
    print(rows)
    for i in rows:
        ability = Ability.query.filter_by(
            ability_id=i["ability_id"]).first().serialize()
        
        abilities.append(ability)
    return jsonify({"pokemon":pokemon, "abilities": abilities, "moves":moves}), 200

@api.route("/item/<int:item_id>", methods=["GET"])
def item(item_id):
    item = Item.query.filter_by(id=item_id).first().serialize()
    return jsonify({"item":item}), 200

@api.route("/move/<int:move_id>", methods=["GET"])
def move(move_id):
    move = Moves.query.filter_by(id=move_id).first().serialize()
    return jsonify({"move":move}), 200

@api.route("/ability/<int:ability_id>", methods=["GET"])
def ability(ability_id):
    ability = Ability.query.filter_by(id=ability_id).first().serialize()
    pokemons = []
    rows = Pokemon_Ability.query.filter_by(ability_id=ability["ability_id"])
    rows = list(map(lambda x: x.serialize(), rows))
    for i in rows:
        pokemon = Pokemon.query.filter_by(
            pokemon_id=i["pokemon_id"]).first().serialize()
        
        pokemons.append(pokemon)
    return jsonify({"ability":ability, "pokemons":pokemons}), 200


@api.route("/store", methods=["GET"])
def store():
    moves = Moves.query.order_by(Moves.id.asc())
    moves = list(map(lambda x: x.serialize(), moves))
    abilities = Ability.query.order_by(Ability.id.asc())
    abilities = list(map(lambda x: x.serialize(), abilities))
    items = Item.query.order_by(Item.id.asc())
    items = list(map(lambda x: x.serialize(), items))
    natures = Nature.query.order_by(Nature.id.asc())
    natures = list(map(lambda x: x.serialize(), natures))
    pokemons = Pokemon.query.order_by(Pokemon.id.asc())
    pokemons = list(map(lambda x: x.serialize(), pokemons))


    
    return jsonify({"pokemons": pokemons, "abilities": abilities, "moves": moves, "items": items, "natures": natures}), 200
