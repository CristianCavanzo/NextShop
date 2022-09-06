import Head from 'next/head';
import React from 'react';
import { MyOrders } from '../containers/MyOrders';

const Checkout = () => {
	return (
		<React.Fragment>
			<Head>
				<title>Checkout</title>
			</Head>
			<MyOrders
				orders={[
					{
						img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
						product: 'Bike',
						price: '$30,00',
					},
				]}
			/>
		</React.Fragment>
	);
};

export default Checkout;
