import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';
import '@styles/global.css';
import Head from 'next/head';
import React from 'react';

function MyApp({ Component, pageProps }) {
	const initialState = useInitialState();
	return (
		<React.Fragment>
			<Head>
				<title>Platzi Shop</title>
			</Head>
			<AppContext.Provider value={initialState}>
				<Component {...pageProps} />
			</AppContext.Provider>
		</React.Fragment>
	);
}

export default MyApp;
