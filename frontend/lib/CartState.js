import { useState, useContext, createContext } from "react";

const LocalStateContext = createContext();

const LocalStateProvider = LocalStateContext.Provider;

function useCart() {
	const all = useContext(LocalStateContext);
	return all;
}

function CartStateProvider({ children }) {
	const [cartOpen, setCartOpen] = useState(false);

	function toggleCart() {
		setCartOpen(!cartOpen);
	}

	return (
		<LocalStateProvider value={{ cartOpen, toggleCart }}>
			{children}
		</LocalStateProvider>
	);
}

export { CartStateProvider, useCart };
