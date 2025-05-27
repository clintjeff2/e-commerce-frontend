import React, { createContext, useState } from 'react';

export const AppContext = createContext();

function AppProvider(props) {
	const [allStores, setAllStores] = useState([]);
	const [store, setStore] = useState(null);
	const getAllStores = async () => {
		try {
			const response = await fetch('http://localhost:4000/store');
			const data = await response.json();

			console.log('jeff');
			setAllStores(data.stores);
		} catch (err) {
			console.log(err);
		}
	};
	const getStore = async (storeId) => {
		try {
			const res = await fetch(`http://localhost:4000/store/${storeId}`);
			const data = await res.json();
			setStore(data.store[0]);
		} catch (err) {
			console.log(err);
		}
	};
	const data = { getAllStores, allStores, store, getStore };
	return (
		<AppContext.Provider value={data}>{props.children}</AppContext.Provider>
	);
}

export default AppProvider;
