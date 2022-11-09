from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.dialects.postgresql import ARRAY

db = SQLAlchemy()        


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True, unique=True)
    username = db.Column(db.String(30), nullable=False, unique=True)
    first_name = db.Column(db.String(30), nullable=False, unique=False)
    last_name = db.Column(db.String(30), nullable=False, unique=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    img = db.Column(db.String(300), nullable=True)
    is_active = db.Column(db.Boolean(), unique=False, nullable=True, default=True)
    password = db.Column(db.String(80), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email} >'

    def serialize(self):
        return {
            "id": self.id,
            "username": self.username,
            "first_name": self.first_name,
            "last_name" : self.last_name,
            "email": self.email
        }

class Favorites(db.Model):
    pokemon_id = db.Column(db.Integer, primary_key=True, unique=True) #Mejor que esto yo pondria una unica pero sin relacion y otra linea que especifique a que pertenece
    pokemontype = db.Column(db.String(2), nullable=False, unique=False)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), unique=False, nullable=False )



class Pokemon_Fusion(db.Model):
    pokemon_id_fusion = db.Column(db.Integer, primary_key=True, unique=True) 
    id_fusion = db.Column(db.Integer, nullable=False, unique=True) 
    order_fusion = db.Column(db.Integer, nullable=False, unique=False) 
    name_fusion = db.Column(db.String(120), nullable=False, unique=False)
    description_fusion = db.Column(db.String(300), nullable=True, unique=False)
    img_fusion = db.Column(db.String(201), nullable=False, unique=False)
    type_fusion = db.Column(ARRAY(db.String(300)))
    weight_fusion = db.Column(db.Integer, nullable=False, unique=False) 
    height_fusion = db.Column(db.Integer, nullable=False, unique=False) 
    ps_fusion = db.Column(db.Integer, nullable=False, unique=False) 
    spd_fusion = db.Column(db.Integer, nullable=False, unique=False) 
    sp_defens_fusion = db.Column(db.Integer, nullable=False, unique=False) 
    sp_atk_fusion = db.Column(db.Integer, nullable=False, unique=False) 
    defens_fusion = db.Column(db.Integer, nullable=False, unique=False) 
    atk_fusion = db.Column(db.Integer, nullable=False, unique=False) 
    
    def __repr__(self):
        return self.name

    def findone_fusion(self):
        return {
            "pokemon_id_fusion": self.pokemon_id_fusion
        }

    def serialize(self):
        return {
            "id_fusion": self.id_fusion,
            "order_fusion": self.order_fusion,
            "name_fusion": self.name_fusion,
            "description_fusion": self.description_fusion,
            "stats_fusion": {
                "ps_fusion":{
                "name":"ps",
                "base_stat": self.ps,
                },
                "spd_fusion":{
                "name":"spd",
                "base_stat": self.spd,
                },
                "sp_defens_fusion":{
                "name":"sp_defens",
                "base_stat": self.sp_defens,
                },
                "sp_atk_fusion":{
                "name":"sp_atk",
                "base_stat": self.sp_atk,
                },
                "defens_fusion":{
                "name":"defens",
                "base_stat": self.defens,
                },
                "atk_fusion":{
                "name":"atk",
                "base_stat": self.atk,
                },
            },
            "img_fusion": self.img,
            "type_fusion": self.type,           
            "weight_fusion": self.weight,
            "height_fusion": self.height
            }


class Pokemon_Move(db.Model):
    id = db.Column(db.Integer, primary_key=True, unique=True) 
    pokemon_id = db.Column(db.Integer, db.ForeignKey('pokemon.pokemon_id'), unique=False, nullable=False)
    move_id = db.Column(db.Integer, db.ForeignKey('moves.move_id'), unique=False, nullable=False)
    
    def __repr__(self):
        return

    def serialize(self):
        return {
            "pokemon_id": self.pokemon_id,
            "move_id": self.move_id
            }

class Pokemon_Ability(db.Model):
    id = db.Column(db.Integer, primary_key=True, unique=True) 
    pokemon_id = db.Column(db.Integer, db.ForeignKey('pokemon.pokemon_id'), unique=False, nullable=False)
    ability_id = db.Column(db.Integer, db.ForeignKey('ability.ability_id'), unique=False, nullable=False)
    
    def __repr__(self):
        return

    def serialize(self):
        return {
            "pokemon_id": self.pokemon_id,
            "ability_id": self.ability_id
            }

class Ability(db.Model):
    ability_id = db.Column(db.Integer, primary_key=True, unique=True) 
    id = db.Column(db.Integer, nullable=False, unique=True) 
    name = db.Column(db.String(120), nullable=False, unique=False)  
    generation = db.Column(db.String(300), nullable=True, unique=False)
    description = db.Column(db.String(300), nullable=False, unique=False)


    def findone(self):
        return {
            "ability_id": self.ability_id
        }

    def __repr__(self):
        return

    def serialize(self):
        return {
             "ability_id": self.ability_id,
            "id": self.id,
            "name": self.name,
            "generation": self.generation,
            "description" : self.description,
        }

class Item(db.Model):
    item_id = db.Column(db.Integer, primary_key=True, unique=True) 
    id = db.Column(db.Integer, nullable=False, unique=True) 
    name = db.Column(db.String(120), nullable=False, unique=False)  
    img = db.Column(db.String(300), nullable=True, unique=False)
    description = db.Column(db.String(300), nullable=True, unique=False)
    cost = db.Column(db.Integer, nullable=True, unique=False) 


    def __repr__(self):
        return

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "img": self.img,
            "description" : self.description,
            "cost" : self.cost,
        }

class Nature(db.Model):
    item_id = db.Column(db.Integer, primary_key=True, unique=True) 
    id = db.Column(db.Integer, nullable=False, unique=True) 
    name = db.Column(db.String(120), nullable=False, unique=False)  
    decrease_stat = db.Column(db.String(120), nullable=True, unique=False) 
    increase_stat = db.Column(db.String(120), nullable=True, unique=False) 
   


    def __repr__(self):
        return

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "decrease_stat": self.decrease_stat,
            "increase_stat" : self.increase_stat,
        }

            

class Moves(db.Model):
          
    move_id = db.Column(db.Integer, primary_key=True, unique=True) 
    id = db.Column(db.Integer, nullable=False, unique=True) 
    name = db.Column(db.String(120), nullable=False, unique=False)
    generation = db.Column(db.String(300), nullable=False, unique=False)
    description = db.Column(db.String(300), nullable=True, unique=False)
    accuracy = db.Column(db.Integer, nullable=True, unique=False) 
    pp = db.Column(db.Integer, nullable=True, unique=False) 
    type = db.Column(db.String(120), nullable=False, unique=False)
    damage_class = db.Column(db.String(120), nullable=True, unique=False)
    power = db.Column(db.Integer, nullable=True, unique=False) 
    priority = db.Column(db.Integer, nullable=True, unique=False) 

    def __repr__(self):
        return self.name

    def findone(self):
        return {
            "move_id": self.move_id
        }

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "generation": self.generation,
            "accuracy": self.accuracy,
            "pp": self.pp,
            "type": self.type,
            "damage_class": self.damage_class,
            "power": self.power,
            "priority": self.priority,
            "description": self.description, 

            }

class Pokemon(db.Model):
    pokemon_id = db.Column(db.Integer, primary_key=True, unique=True) 
    id = db.Column(db.Integer, nullable=False, unique=True) 
    order = db.Column(db.Integer, nullable=False, unique=False) 
    name = db.Column(db.String(120), nullable=False, unique=False)
    description = db.Column(db.String(300), nullable=True, unique=False)
    img = db.Column(db.String(201), nullable=False, unique=False)
    shiny = db.Column(db.String(122), nullable=True, unique=False)
    type = db.Column(ARRAY(db.String(300)))
    group_name = db.Column(ARRAY(db.String(300)))
    url = db.Column(db.String(123), nullable=False, unique=True)
    weight = db.Column(db.Integer, nullable=False, unique=False) 
    height = db.Column(db.Integer, nullable=False, unique=False) 
    ps = db.Column(db.Integer, nullable=False, unique=False) 
    spd = db.Column(db.Integer, nullable=False, unique=False) 
    sp_defens = db.Column(db.Integer, nullable=False, unique=False) 
    sp_atk = db.Column(db.Integer, nullable=False, unique=False) 
    defens = db.Column(db.Integer, nullable=False, unique=False) 
    atk = db.Column(db.Integer, nullable=False, unique=False) 
    
    def __repr__(self):
        return self.name

    def findone(self):
        return {
            "pokemon_id": self.pokemon_id
        }
    
    def serialize(self):
        return {
            "id": self.id,
            "order": self.order,
            "name": self.name,
            "description": self.description,
            "stats": {
                "ps":{
                "name":"ps",
                "base_stat": self.ps,
                },
                "spd":{
                "name":"spd",
                "base_stat": self.spd,
                },
                "sp_defens":{
                "name":"sp_defens",
                "base_stat": self.sp_defens,
                },
                "sp_atk":{
                "name":"sp_atk",
                "base_stat": self.sp_atk,
                },
                "defens":{
                "name":"defens",
                "base_stat": self.defens,
                },
                "atk":{
                "name":"atk",
                "base_stat": self.atk,
                },
            },
            "img": self.img,
            "shiny": self.shiny,
            "type": self.type,           
            "weight": self.weight,
            "height": self.height,
            "url": self.url,
            "group_name": self.group_name,
            
          
            }
    

