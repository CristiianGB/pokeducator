import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import "../../styles/pokeducatorPerfilStyles.css"
import { Link } from "react-router-dom";


const PokeducatorPerfil = () => {
	const { store, actions } = useContext(Context);
	const [user, setUser] = useState({})
	let navigate = useNavigate()
	
	useEffect(()=>{
		if(!store.token){
		navigate("/login")
	}
	else{
		actions.getProfile()
	}
	},[])
	
	const logOut = () => {
		localStorage.removeItem("token")
	}

	const iconoTrue="icono fas fa-check-circle"
	const iconoFalse="icono far fa-check-circle"

	return (
		<section className="seccion-perfil-usuario ">
        <div className="perfil-usuario-header">
            <div className="perfil-usuario-portada">
                <div className="perfil-usuario-avatar">
                    <img src="https://i.pinimg.com/550x/f7/da/98/f7da9864a7c3079df7c26173520d18fc.jpg" alt="img-avatar"/>
                    <button type="button" className="boton-avatar">
                        <i className="far fa-image"></i>
                    </button>
                </div>
                <a href="/login" className="boton-portada"  onClick={logOut()}>
                    <i className="fas fa-sign-out-alt"></i>Cerrar sesión
                </a>
            </div>
        </div>
        <div className="perfil-usuario-body">
            <div className="perfil-usuario-bio">
                <h3 className="titulo"></h3>
                <p className="texto">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="perfil-usuario-footer">
                <ul className="lista-datos">
                    <li><i className="icono fas fa-user"></i>{store?.user?.username}</li>
                    <li><i className="icono fas fa-envelope"></i>{store?.user?.email}</li>
                </ul>
				
                <ul className="lista-datos">
                    <li><i className="icono fas fa-key"></i>Contraseña: <a href="#">mostrar</a> </li>
                    <li><i className="icono fas fa-user-check"></i>Activo:<i className={store?.user?.is_active?iconoTrue:iconoFalse}></i></li>
                </ul>
            </div>
            <div className="redes-sociales">
                <a href="" className="boton-redes facebook fab fa-facebook-f"><i className="icon-facebook"></i></a>
                <a href="" className="boton-redes twitter fab fa-twitter"><i className="icon-twitter"></i></a>
                <a href="" className="boton-redes instagram fab fa-instagram"><i className="icon-instagram"></i></a>
            </div>
        </div>
    </section>
	)
		
					
			
};

export default PokeducatorPerfil;