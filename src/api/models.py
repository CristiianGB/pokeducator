from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.dialects.postgresql import ARRAY

db = SQLAlchemy()        

class Equipo(db.Model):
    id = db.Column(db.Integer, primary_key=True, unique=True) 
    pokemon_fusion_id = db.Column(db.Integer, db.ForeignKey('pokemon_fusion.pokemon_id'), unique=False, nullable=True)
    pokemon_id = db.Column(db.Integer, db.ForeignKey('pokemon.pokemon_id'), unique=False, nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), unique=False, nullable=False)
    linea = db.Column(db.Integer, nullable=False, unique=False) 


    def repr(self):
        return

    def findpoke(self):
        return {
            "pokemon_id": self.pokemon_id,
            }

    def finuser(self):
        return {
            "user_id": self.user_id
            }

    def serialize(self):
        return {
            "pokemon_id": self.pokemon_id,
            "pokemon_fusion_id": self.pokemon_fusion_id,
            "user_id": self.user_id,
            "linea": self.linea,
            }


class Favorites(db.Model):
    id = db.Column(db.Integer, primary_key=True, unique=True) 
    pokemon_id = db.Column(db.Integer, db.ForeignKey('pokemon_fusion.pokemon_id'), unique=False, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), unique=False, nullable=False)

    def repr(self):
        return

    def findpoke(self):
        return {
            "pokemon_id": self.pokemon_id,
            }

    def finuser(self):
        return {
            "user_id": self.user_id
            }

    def serialize(self):
        return {
            "pokemon_id": self.pokemon_id,
            "user_id": self.user_id
            }


class Votes(db.Model):
    id = db.Column(db.Integer, primary_key=True, unique=True) 
    pokemon_id = db.Column(db.Integer, db.ForeignKey('pokemon_fusion.pokemon_id'), unique=False, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), unique=False, nullable=False)

    def repr(self):
        return

    def findpoke(self):
        return {
            "pokemon_id": self.pokemon_id,
            }

    def finuser(self):
        return {
            "user_id": self.user_id
            }

    def serialize(self):
        return {
            "pokemon_id": self.pokemon_id,
            "user_id": self.user_id
            }


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True, unique=True)
    username = db.Column(db.String(30), nullable=False, unique=True)
    first_name = db.Column(db.String(30), nullable=False, unique=False)
    last_name = db.Column(db.String(30), nullable=False, unique=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    img = db.Column(db.String(300), default="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp", nullable=True)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False, default=True)
    password = db.Column(db.String(80), unique=False, nullable=False)

 

    def __repr__(self):
        return f'<User {self.email} >'

    def serialize(self):
        return {
            "id": self.id,
            "username": self.username,
            "first_name": self.first_name,
            "last_name" : self.last_name,
            "email": self.email,
            "img": self.img
        }



class Pokemon_fusion(db.Model):
    pokemon_id = db.Column(db.Integer, primary_key=True, unique=True) 
    group_name = db.Column(ARRAY(db.String(300)))
    name = db.Column(db.String(120), nullable=False, unique=False)
    img = db.Column(db.String(201), nullable=False, unique=False)
    type = db.Column(ARRAY(db.String(300)))
    weight = db.Column(db.Integer, nullable=False, unique=False) 
    height = db.Column(db.Integer, nullable=False, unique=False) 
    ps = db.Column(db.Integer, nullable=False, unique=False) 
    spd = db.Column(db.Integer, nullable=False, unique=False) 
    sp_defens = db.Column(db.Integer, nullable=False, unique=False) 
    sp_atk = db.Column(db.Integer, nullable=False, unique=False) 
    defens = db.Column(db.Integer, nullable=False, unique=False) 
    atk = db.Column(db.Integer, nullable=False, unique=False) 
    votes = db.Column(db.Integer, default=0, nullable=False, unique=False) 
    father = db.Column(db.Integer, db.ForeignKey('pokemon.pokemon_id'), unique=False, nullable=False)
    mom = db.Column(db.Integer, db.ForeignKey('pokemon.pokemon_id'), unique=False, nullable=False)
    
    def __repr__(self):
        return self.name

    def findone(self):
        return {
            "pokemon_id": self.pokemon_id
        }

    def serialize(self):
        return {
            "votes": self.votes,
            "pokemon_id": self.pokemon_id,
            "name": self.name,
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
            "type": self.type,           
            "weight": self.weight,
            "height": self.height,
            "group_name": self.group_name,
            "father": self.father,
            "mom": self.mom
            
          
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

class Pokemon_Fusion_Move(db.Model):
    id = db.Column(db.Integer, primary_key=True, unique=True) 
    pokemon_id = db.Column(db.Integer, db.ForeignKey('pokemon_fusion.pokemon_id'), unique=False, nullable=False)
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

class Pokemon_Fusion_Ability(db.Model):
    id = db.Column(db.Integer, primary_key=True, unique=True) 
    pokemon_id = db.Column(db.Integer, db.ForeignKey('pokemon_fusion.pokemon_id'), unique=False, nullable=False)
    ability_id = db.Column(db.Integer, db.ForeignKey('ability.ability_id'), unique=False, nullable=False)
    
    def __repr__(self):
        return

    def serialize(self):
        return {
            "pokemon_id": self.pokemon_id,
            "ability_id": self.ability_id
            }

class Pokemon_Fusion_Nature(db.Model):
    id = db.Column(db.Integer, primary_key=True, unique=True) 
    pokemon_id = db.Column(db.Integer, db.ForeignKey('pokemon_fusion.pokemon_id'), unique=False, nullable=False)
    nature_id = db.Column(db.Integer, db.ForeignKey('nature.nature_id'), unique=False, nullable=False)
    
    def __repr__(self):
        return

    def serialize(self):
        return {
            "pokemon_id": self.pokemon_id,
            "nature_id": self.nature_id
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
    nature_id = db.Column(db.Integer, primary_key=True, unique=True) 
    id = db.Column(db.Integer, nullable=False, unique=True) 
    name = db.Column(db.String(120), nullable=False, unique=False)  
    decrease_stat = db.Column(db.String(120), nullable=True, unique=False) 
    increase_stat = db.Column(db.String(120), nullable=True, unique=False) 
   
    def findone(self):
        return {
            "nature_id": self.nature_id
        }

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
    weakness = db.Column(ARRAY(db.String(300)))
    evolution = db.Column(ARRAY(db.String(300)))
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
            "evolution": self.evolution,
            "weakness": self.weakness
            }
    

