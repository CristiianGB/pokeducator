import React, { useState, useEffect } from "react";
import getState from "./flux.jsx";

// Don't change, here is where we initialize our context, by default it's just going to be null.
export const Context = React.createContext(null);

// This function injects the global store to any view/component where you want to use it, we will inject the context to layout.js, you can see it here:
// https://github.com/4GeeksAcademy/react-hello-webapp/blob/master/src/js/layout.js#L35
const injectContext = PassedComponent => {
	const StoreWrapper = props => {
		//this will be passed as the contenxt value
		const [state, setState] = useState(
			getState({
				getStore: () => state.store,
				getActions: () => state.actions,
				setStore: updatedStore =>
					setState({
						store: Object.assign(state.store, updatedStore),
						actions: { ...state.actions }
					})
			})
		);

		useEffect(() => {
			/**
			 * EDIT THIS!
			 * This function is the equivalent to "window.onLoad", it only runs once on the entire application lifetime
			 * you should do your ajax requests or fetch api requests here. Do not use setState() to save data in the
			 * store, instead use actions, like this:
			 **/
			 let typeDataStorage = JSON.parse(localStorage.getItem("type_data"))
			 let typeStorage = JSON.parse(localStorage.getItem("type"))
			 if (typeDataStorage && typeDataStorage.length >0){
				state.actions.typeDataLocalStorage(typeDataStorage)
				state.actions.typeLocalStorage(typeStorage)
			 }
			 else{
				state.actions.typeFind()
			 }
			 let moveDataStorage = JSON.parse(localStorage.getItem("move_data"))
			 let moveStorage = JSON.parse(localStorage.getItem("move"))
			 if (moveDataStorage && moveDataStorage.length > 0){
				state.actions.moveDataLocalStorage(moveDataStorage)
				state.actions.moveLocalStorage(moveStorage)
			 }
			 else{
				state.actions.moveFind()
			 }
			let itemDataStorage = JSON.parse(localStorage.getItem("item_data"))
			let itemStorage = JSON.parse(localStorage.getItem("item"))
			if (itemDataStorage && itemDataStorage.lengt >0 ){
				state.actions.itemDataLocalStorage(itemDataStorage)
				state.actions.itemLocalStorage(itemStorage)
			}
			else{
				state.actions.itemFind()
			}
			let pokemonDataStorage = JSON.parse(localStorage.getItem("pokemon_data"))
			let pokemonStorage = JSON.parse(localStorage.getItem("pokemon"))
			if ( pokemonDataStorage && pokemonDataStorage.length > 0){
				state.actions.pokemonDataLocalStorage(pokemonDataStorage)
				state.actions.pokemonLocalStorage(pokemonStorage)
			}
			else{
				state.actions.pokemonFind();
			}
			
		}, []);

		// The initial value for the context is not null anymore, but the current state of this component,
		// the context will now have a getStore, getActions and setStore functions available, because they were declared
		// on the state of this component
		return (
			<Context.Provider value={state}>
				<PassedComponent {...props} />
			</Context.Provider>
		);
	};
	return StoreWrapper;
};

export default injectContext;
