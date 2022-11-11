  
import os
from flask_admin import Admin
from .models import db, User, Favorites, Pokemon, Nature, Pokemon_fusion, Equipo, Moves, Pokemon_Move, Ability, Item, Pokemon_Ability, Pokemon_Fusion_Nature, Pokemon_Fusion_Move, Pokemon_Fusion_Ability, Votes, Favorites
from flask_admin.contrib.sqla import ModelView

def setup_admin(app):
    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
    admin = Admin(app, name='4Geeks Admin', template_mode='bootstrap3')

    
    # Add your models here, for example this is how we add a the User model to the admin
    admin.add_view(ModelView(User, db.session))
    admin.add_view(ModelView(Pokemon, db.session))
    admin.add_view(ModelView(Moves, db.session))
    admin.add_view(ModelView(Pokemon_Move, db.session))
    admin.add_view(ModelView(Pokemon_Ability, db.session))
    admin.add_view(ModelView(Ability, db.session))
    admin.add_view(ModelView(Item, db.session))
    admin.add_view(ModelView(Nature, db.session))
    admin.add_view(ModelView(Pokemon_Fusion_Ability, db.session))
    admin.add_view(ModelView(Pokemon_Fusion_Move, db.session))
    admin.add_view(ModelView(Pokemon_Fusion_Nature, db.session))
    admin.add_view(ModelView(Pokemon_fusion, db.session))
    admin.add_view(ModelView(Votes, db.session))
    admin.add_view(ModelView(Favorites, db.session))
    admin.add_view(ModelView(Equipo, db.session))
    # You can duplicate that line to add mew models
    # admin.add_view(ModelView(YourModelName, db.session))