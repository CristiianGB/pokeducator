from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Favorites, Pokemon, Nature, Pokemon_fusion, Moves, Pokemon_Move, Ability, Item, Pokemon_Ability, Pokemon_Fusion_Nature, Pokemon_Fusion_Move, Pokemon_Fusion_Ability, Votes, Equipo, Favorites
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from sqlalchemy import inspect

api = Blueprint('api', __name__)



@api.route("/addequipo", methods=["POST"])
def addequipo():
    user_id = request.json.get("user_id", None)
    pokemon_id = request.json.get("pokemon_id", None)
    num = request.json.get("num", None)

    prub = Equipo.query.filter_by(user_id=user_id, linea=num).first()
    if(prub):
        db.session.delete(prub)
        db.session.commit()
    equipo = Equipo(user_id=user_id, pokemon_id=pokemon_id, linea=num)

    db.session.add(equipo)
    db.session.commit()
    return jsonify({"equipo": "equipo"}), 200

@api.route("/addequipofus", methods=["POST"])
def addequipofus():
    user_id = request.json.get("user_id", None)
    pokemon_fusion_id = request.json.get("pokemon_fusion_id", None)
    num = request.json.get("num", None)

    prub = Equipo.query.filter_by(user_id=user_id, linea=num).first()
    if(prub):
        db.session.delete(prub)
        db.session.commit()
    equipo = Equipo(user_id=user_id, pokemon_fusion_id=pokemon_fusion_id, linea=num)

    db.session.add(equipo)
    db.session.commit()
    return jsonify({"equipo": "equipo"}), 200

@api.route("/votes", methods = ["GET"])
def pokemon_votados():
  

    votes = Pokemon_fusion.query.order_by(Pokemon_fusion.votes.desc()).limit(3)
    votes = list(map(lambda x: x.serialize(), votes ))

    teams = Equipo.query.distinct(Equipo.user_id).limit(3)
    teams = list(map(lambda x: x.serialize(), teams ))
    team1 = [] 
    team2 = [] 
    team3 = []
    count = 0
    for i in teams:


        equip = Equipo.query.filter_by(user_id=i["user_id"])
        equip = list(map(lambda x: x.serialize(), equip ))

        for i in equip:

            if(i["pokemon_id"] ):
                pokemon = Pokemon.query.filter_by(id=i["pokemon_id"]).first().serialize()
                if(count == 0):
                    team1.append(pokemon)
                elif(count == 1):
                    team2.append(pokemon)
                else:
                    team3.append(pokemon)
            else:
                pokemon = Pokemon_fusion.query.filter_by(pokemon_id=i["pokemon_fusion_id"]).first().serialize()
                if(count == 0):
                    team1.append(pokemon)
                elif(count == 1):
                    team2.append(pokemon)
                else:
                    team3.append(pokemon)
        
        count = count + 1
            
   


    return jsonify({"votes":votes,"team1":team1,"team2":team2,"team3":team3})

@api.route("/lastvotes", methods = ["GET"])
@jwt_required()
def lastvotes():
  
    current_user_id = get_jwt_identity()
    votes = Votes.query.filter_by(user_id=current_user_id).order_by(Votes.id.desc()).limit(3)
    votes = list(map(lambda x: x.serialize(), votes ))

    pokemons = []
    for i in votes:
        pokemon = Pokemon_fusion.query.filter_by(pokemon_id=i["pokemon_id"]).first().serialize()
        pokemons.append(pokemon)
        print(pokemon)
    return jsonify({"pokemons":pokemons})

@api.route("/distinctteam", methods = ["GET"])
def distinctteam():
  
    teams = Equipo.query.distinct(Equipo.user_id).limit(3)
    teams = list(map(lambda x: x.serialize(), teams ))
    team1 = [] 
    team2 = [] 
    team3 = []
    count = 0
    for i in teams:


        equip = Equipo.query.filter_by(user_id=i["user_id"])
        equip = list(map(lambda x: x.serialize(), equip ))

        for i in equip:

            if(i["pokemon_id"] ):
                pokemon = Pokemon.query.filter_by(id=i["pokemon_id"]).first().serialize()
                if(count == 0):
                    team1.append(pokemon)
                elif(count == 1):
                    team2.append(pokemon)
                else:
                    team3.append(pokemon)
            else:
                pokemon = Pokemon_fusion.query.filter_by(pokemon_id=i["pokemon_fusion_id"]).first().serialize()
                if(count == 0):
                    team1.append(pokemon)
                elif(count == 1):
                    team2.append(pokemon)
                else:
                    team3.append(pokemon)
        
        count = count + 1
            
   
    return jsonify({"team1":team1,"team2":team2,"team3":team3})


@api.route("/login/<string:username>/<string:password>", methods = ["GET"])
def login(username,password):

    user = User.query.filter_by(username=username, password=password).first()

    if user:
        access_token = create_access_token(identity=user.id)
        votes = Votes.query.filter_by(user_id=user.id)
        votes = list(map(lambda x: x.serialize(), votes))
        favorites = Favorites.query.filter_by(user_id=user.id)
        favorites = list(map(lambda x: x.serialize(), favorites))

        return jsonify({ "token": access_token, "user_id": user.id, "favorites":favorites, "votes":votes  })
        

@api.route("/signup", methods = ["POST"])
def signup():
    username = request.json.get("username", None)
    first_name = request.json.get("first_name", None)
    last_name = request.json.get("last_name", None)
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user_already_exists = User.query.filter_by(username=username).filter_by(email=email).first()
    if user_already_exists : 
        return jsonify({"msg" : "mismo usuario o email"}), 401
    else: 
        new_user = User( username=username, first_name=first_name, last_name=last_name, email=email, password= password)
        db.session.add(new_user)
        db.session.commit()
        return jsonify({"user":new_user.serialize()})
   
@api.route("/protected", methods=["GET"])
@jwt_required()
def token_access():
   
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)
    
    return jsonify(user.serialize()), 200

@api.route("/getId", methods=["POST"])
@jwt_required()
def getId():
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)
    
    return jsonify(user.serialize()), 200

@api.route("/updateProfilePicture", methods=["PUT"])
@jwt_required()
def updateProfilePicture():
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)
    img = request.json.get("img", None)
    user.img = img

    db.session.commit()
    return jsonify(user.serialize()), 200

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
    evolution = request.json.get("evolution", None)
    weakness = request.json.get("weakness", None)
    for a, b in replacements:
        if (description):
            description = description.replace(
                a, b).replace(a.upper(), b.upper())
            description = description.replace("\n", " ")

    pokemon = Pokemon(id=id, name=name, ps=ps, atk=atk, sp_atk=sp_atk, spd=spd, defens=defens, sp_defens=sp_defens, img=img,
                      type=type, url=url, order=order, description=description, shiny=shiny, weight=weight, height=height, group_name=group_name, evolution=evolution, weakness=weakness)
    db.session.add(pokemon)

    db.session.commit()

    # if (learning):
    #
    #    for i in learning:
    #        move = db.session.query(Moves).filter_by(id=i).first().findone()
    #        pokemon = db.session.query(Pokemon).filter_by(name=name).first().findone()
    #        pokemove = Pokemon_Move(pokemon_id=pokemon["pokemon_id"], move_id=move["move_id"])
    #        db.session.add(pokemove)
    #        db.session.commit()
    return jsonify({"pokemon": "a"}), 200


@api.route("/createPokemonFusion", methods=["POST"])
def createPokemonFusion():

    name = request.json.get("name", None)
    img = request.json.get("img", None)
    type = request.json.get("type", None)
    weight = request.json.get("weight", None)
    height = request.json.get("height", None)
    atk = request.json.get("atk", None)
    sp_atk = request.json.get("sp_atk", None)
    defens = request.json.get("defens", None)
    sp_defens = request.json.get("sp_defens", None)
    ps = request.json.get("ps", None)
    spd = request.json.get("spd", None)
    learning = request.json.get("learning", None)
    nature = request.json.get("nature", None)
    ability = request.json.get("ability", None)
    group_name = request.json.get("group_name", None)
    father = request.json.get("father", None)
    mom = request.json.get("mom", None)

    fat = Pokemon.query.filter_by(id=father).first().findone()
    mo = Pokemon.query.filter_by(id=mom).first().findone()

    pokemon = Pokemon_fusion(name=name, ps=ps, atk=atk, sp_atk=sp_atk, spd=spd, defens=defens, sp_defens=sp_defens, img=img,
                             type=type, weight=weight, height=height, group_name=group_name, mom=mo["pokemon_id"], father=fat["pokemon_id"])
    db.session.add(pokemon)

    db.session.commit()

    if (learning):
        fusion = Pokemon_fusion.query.order_by(
            Pokemon_fusion.pokemon_id.desc()).first().findone()

        for i in learning:
            move = db.session.query(Moves).filter_by(
                id=i).first().findone()
            pokemove = Pokemon_Fusion_Move(
                pokemon_id=fusion["pokemon_id"], move_id=move["move_id"])
            db.session.add(pokemove)
            db.session.commit()

    if (nature):
        fusion = Pokemon_fusion.query.order_by(
            Pokemon_fusion.pokemon_id.desc()).first().findone()
        natureFus = db.session.query(Nature).filter_by(
            id=nature).first().findone()
        pokenature = Pokemon_Fusion_Nature(
            pokemon_id=fusion["pokemon_id"], nature_id=natureFus["nature_id"])
        db.session.add(pokenature)
        db.session.commit()
    if (ability):
        fusion = Pokemon_fusion.query.order_by(
            Pokemon_fusion.pokemon_id.desc()).first().findone()
        abilityFus = db.session.query(Ability).filter_by(
            id=ability).first().findone()
        pokeability = Pokemon_Fusion_Ability(
            pokemon_id=fusion["pokemon_id"], ability_id=abilityFus["ability_id"])
        db.session.add(pokeability)
        db.session.commit()

    # if (learning):
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
            description = description.replace(
                a, b).replace(a.upper(), b.upper())
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

    if (id):
        for a, b in replacements:
            if (description):
                description = description.replace(
                    a, b).replace(a.upper(), b.upper())
                description = description.replace("\n", " ")

        item = Item(id=id, name=name, description=description,
                    cost=cost, img=img)
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

@api.route("/addvote", methods=["POST"])
def addvote():
    user_id = request.json.get("user_id", None)
    pokemon_id = request.json.get("pokemon_id", None)

    vote = Votes(pokemon_id=pokemon_id, user_id=user_id)
    pokemon = Pokemon_fusion.query.filter_by(pokemon_id=pokemon_id).first().serialize()
    vot = pokemon["votes"] + 1
    pokemon = Pokemon_fusion.query.filter_by(pokemon_id=pokemon_id).update(dict(votes=vot))


  
    db.session.add(vote)
    db.session.commit()
    return jsonify({"vote": "vote"}), 200

@api.route("/addfavorite", methods=["POST"])
def addfavorite():

    user_id = request.json.get("user_id", None)
    pokemon_id = request.json.get("pokemon_id", None)

    favorite = Favorites(pokemon_id=pokemon_id, user_id=user_id)

    db.session.add(favorite)
    db.session.commit()
    return jsonify({"favorite": "favorite"}), 200



@api.route("/all", methods=["GET"])
def all():

 #   pokemon = Pokemon.query.order_by(Pokemon.id.asc())
  #  pokemon = list(map(lambda x: x.serialize(), pokemon))
    # print(pokemon)
    all = Equipo.query.order_by(Equipo.user_id.asc())
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
 
    pokemon = Pokemon.query.filter_by(id=pokemon_id).first().serialize()
    pokeid = Pokemon.query.filter_by(id=pokemon_id).first().findone()
    abilities = []

    rows = Pokemon_Ability.query.filter_by(pokemon_id=pokeid["pokemon_id"])
    rows = list(map(lambda x: x.serialize(), rows))
  
    for i in rows:
        ability = Ability.query.filter_by(
            ability_id=i["ability_id"]).first().serialize()

        abilities.append(ability)
    return jsonify({"pokemon": pokemon, "abilities": abilities, "moves": moves}), 200

@api.route("/allmovabifus/<int:pokemon_id>", methods=["GET"])
def allmovabifus(pokemon_id):
    moves = []
    rows = Pokemon_Fusion_Move.query.filter_by(pokemon_id=pokemon_id)
    rows = list(map(lambda x: x.serialize(), rows))
    for i in rows:
        move = Moves.query.filter_by(move_id=i["move_id"]).first().serialize()
        moves.append(move)
    pokemon = Pokemon_fusion.query.filter_by(pokemon_id=pokemon_id).first().serialize()
    ability = Pokemon_Fusion_Ability.query.filter_by(pokemon_id=pokemon_id).first().serialize()
    ability = Ability.query.filter_by(ability_id=ability["ability_id"]).first().serialize()
    nature = Pokemon_Fusion_Nature.query.filter_by(pokemon_id=pokemon_id).first().serialize()
    nature = Nature.query.filter_by(nature_id=nature["nature_id"]).first().serialize()
    father = Pokemon.query.filter_by(pokemon_id=pokemon["father"]).first().serialize()
    mom = Pokemon.query.filter_by(pokemon_id=pokemon["mom"]).first().serialize()
    return jsonify({"pokemon": pokemon, "ability": ability, "moves": moves, "nature":nature, "father":father, "mom":mom}), 200

@api.route("/item/<int:item_id>", methods=["GET"])
def item(item_id):
    item = Item.query.filter_by(id=item_id).first().serialize()
    return jsonify({"item": item}), 200


@api.route("/move/<int:move_id>", methods=["GET"])
def move(move_id):
    move = Moves.query.filter_by(id=move_id).first().serialize()
    return jsonify({"move": move}), 200


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
    return jsonify({"ability": ability, "pokemons": pokemons}), 200


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
    pokemonsfusion = Pokemon_fusion.query.order_by(Pokemon_fusion.pokemon_id.asc())
    pokemonsfusion = list(map(lambda x: x.serialize(), pokemonsfusion))


    return jsonify({"pokemons": pokemons, "abilities": abilities, "moves": moves, "items": items, "natures": natures, "pokemonsfusion":pokemonsfusion}), 200

@api.route("/storeid/<int:user_id>", methods=["GET"])
def storeid(user_id):

    votes = Votes.query.filter_by(user_id=user_id)
    votes = list(map(lambda x: x.serialize(), votes))
    favorites = Favorites.query.filter_by(user_id=user_id)
    favorites = list(map(lambda x: x.serialize(), favorites))
    equipos = Equipo.query.filter_by(user_id=user_id)
    equipos = list(map(lambda x: x.serialize(), equipos))
    equiposall = []
    for i in equipos:
    
        if(i["pokemon_fusion_id"] != None):

            equipo = Pokemon_fusion.query.filter_by(pokemon_id=i["pokemon_fusion_id"]).first().serialize()
            equiposall.append({"equipo":equipo, "linea":i["linea"]})
        if(i["pokemon_id"] != None):
            equipo = Pokemon.query.filter_by(id=i["pokemon_id"]).first().serialize()
      
            equiposall.append({"equipo":equipo, "linea":i["linea"]})




    return jsonify({"favorites": favorites, "votes": votes, "equipos":equiposall}), 200

@api.route("/deletevote/<int:pokemon_id>/<int:user_id>")
def deletevote(user_id, pokemon_id):


   
    votes = Votes.query.filter_by(user_id=user_id, pokemon_id=pokemon_id).first()
    db.session.delete(votes)
    db.session.commit()
    votes = Votes.query.filter_by(user_id=user_id)
    votes = list(map(lambda x: x.serialize(), votes))
    pokemon = Pokemon_fusion.query.filter_by(pokemon_id=pokemon_id).first().serialize()
    vot = pokemon["votes"] - 1
    pokemon = Pokemon_fusion.query.filter_by(pokemon_id=pokemon_id).update(dict(votes=vot))
    db.session.commit()


    return jsonify({"votes": votes}), 200

@api.route("/deletefavorite/<int:pokemon_id>/<int:user_id>")
def deletefavorite(user_id, pokemon_id):


   
    favorites = Favorites.query.filter_by(user_id=user_id, pokemon_id=pokemon_id).first()
    db.session.delete(favorites)
    db.session.commit()
    favorites = Favorites.query.filter_by(user_id=user_id)
    favorites = list(map(lambda x: x.serialize(), favorites))


    return jsonify({"favorites": favorites}), 200


