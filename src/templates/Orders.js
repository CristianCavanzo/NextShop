import React from 'react';
import styled from 'styled-components';
import { MyOrders } from '../containers/MyOrders';

const AllOrders = styled.div`
	display: grid;
	grid-template-columns: auto 1fr;
	gap: 16px;
	align-items: center;
	background-color: var(--text-input-field);
	margin-bottom: 24px;
	border-radius: 8px;
	padding: 0 24px;
	p:nth-child(1) {
		display: flex;
		flex-direction: column;
	}
	p span:nth-child(1) {
		font-size: var(--md);
		font-weight: bold;
	}
	p span:nth-child(2) {
		font-size: var(--sm);
		color: var(--very-light-pink);
	}
	p:nth-child(2) {
		text-align: end;
		font-weight: bold;
	}
`;

const Orders = () => {
	return (
		<MyOrders
			orders={[
				{
					img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
					product: 'Bike',
					price: '$30,00',
				},
			]}
		>
			<AllOrders>
				<p>
					<span>03.25.21</span>
					<span>6 articles</span>
				</p>
				<p>$560.00</p>
			</AllOrders>
		</MyOrders>
	);
};

export { Orders };
