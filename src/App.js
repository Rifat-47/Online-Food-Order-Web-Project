import React, { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
import { useContext } from 'react';
import AuthContext from './store/auth-context';
import AuthContextProvider from './store/AuthContextProvider';
import "./App.scss";

function App() {
	const [cartIsShown, setCartIsShown] = useState(false);
	const user = useContext(AuthContext);
	console.log(user);

	const showCartHandler = () => {
		setCartIsShown(true);
	};

	const hideCartHandler = () => {
		setCartIsShown(false);
	};
	return (
		<AuthContextProvider>
			<CartProvider>
				{cartIsShown && <Cart onClose={hideCartHandler} />}
				<Header onShowCart={showCartHandler} />
				<main>
					<Meals />
				</main>
			</CartProvider>
		</AuthContextProvider>

	);
}

export default App;
