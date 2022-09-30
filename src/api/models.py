from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()        

class Favorites(db.Model):
    pokemon_id = db.Column(db.Integer, primary_key=True, unique=True) #Mejor que esto yo pondria una unica pero sin relacion y otra linea que especifique a que pertenece
    pokemontype = db.Column(db.String(2), nullable=False, unique=False)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), unique=False, nullable=False )

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True, unique=True)
    username = db.Column(db.String(30), nullable=False, unique=True)
    first_name = db.Column(db.String(30), nullable=False, unique=False)
    last_name = db.Column(db.String(30), nullable=False, unique=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
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
class Pokemon(db.Model):
    pokemon_id = db.Column(db.Integer, primary_key=True, unique= True) #aqui igual que el de la pokedex
    name = db.Column(db.String(120), nullable=False, unique=False)
    atk = db.Column(db.Integer, unique=False, nullable=False)
    defe = db.Column(db.Integer, unique=False, nullable=False)
    sDf = db.Column(db.Integer, unique=False, nullable=False)
    
    def __repr__(self):
        return self.name

    def serialize(self):
        return {
           
            }

class Pokemon_Fusion(db.Model):
    pokemon_id = db.Column(db.Integer, primary_key=True, unique= True) 
    name = db.Column(db.String(120), nullable=False, unique=False)
    pokemon_rostro_id = db.Column(db.Integer, db.ForeignKey("pokemon.pokemon_id"), unique=False, nullable=False )
    pokemon_cuerpo_id = db.Column(db.Integer, db.ForeignKey("pokemon.pokemon_id"), unique=False, nullable=False )
    atk = db.Column(db.Integer, unique=False, nullable=False)
    defe = db.Column(db.Integer, unique=False, nullable=False)
    sDf = db.Column(db.Integer, unique=False, nullable=False)
    
    def __repr__(self):
        return self.name

    def serialize(self):
        return {
           
            }



