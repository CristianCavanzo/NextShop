import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from '../containers/Layout';
import { Forgot } from '@templates/Forgot';
import { RecoveryPassword } from '@templates/RecoveryPassword';
import { NotFound } from '@templates/NotFound';
import { Login } from '@templates/Login';
import { Register } from '@templates/Register';
import { EmailRecovery } from '@templates/EmailRecovery';
import { MyAccountPage } from '@templates/myAccount';
import { Orders } from '@templates/Orders';
import { Checkout } from '@templates/Checkout';
import { Home } from '@templates/Home';
import AppContext from '../context/AppContext';
import useInitialState from '@hooks/useInitialState';

const App = () => {
	const initialState = useInitialState();
	return (
		<AppContext.Provider value={initialState}>
			<BrowserRouter basename="/react-shop">
				<Layout>
					<Routes>
						<Route
							exact
							path="/"
							element={<Home />}
						/>
						<Route
							exact
							path="/login"
							element={<Login />}
						/>
						<Route
							exact
							path="/newPassword"
							element={<Forgot />}
						/>
						<Route
							exact
							path="/register"
							element={<Register />}
						/>
						<Route
							exact
							path="/recovery"
							element={
								<RecoveryPassword />
							}
						/>
						<Route
							exact
							path="/passwordRecovery"
							element={
								<EmailRecovery />
							}
						/>
						<Route
							exact
							path="/myAccount"
							element={
								<MyAccountPage />
							}
						/>
						<Route
							exact
							path="/orders"
							element={<Orders />}
						/>
						<Route
							exact
							path="/checkout"
							element={<Checkout />}
						/>
						<Route
							path="*"
							element={<NotFound />}
						/>
					</Routes>
				</Layout>
			</BrowserRouter>
		</AppContext.Provider>
	);
};

export default App;
