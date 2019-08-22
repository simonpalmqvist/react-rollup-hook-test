import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";

const Store = React.createContext({});

function StoreProvider({ children }) {
	const [name, setName] = useState("Simon");
	return <Store.Provider value={{ name, setName }}>{children}</Store.Provider>;
}

function Header() {
	const { name } = useContext(Store);

	return <h1>{name}</h1>;
}

function View() {
	const { name, setName } = useContext(Store);

	return <input value={name} onChange={evt => setName(evt.target.value)} />;
}

function App() {
	return (
		<StoreProvider>
			<Header />
			<View />
		</StoreProvider>
	);
}

ReactDOM.render(<App />, document.getElementById("root"));
