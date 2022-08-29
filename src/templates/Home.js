import React from 'react';
import { Header } from '@components/Header';
import styled from 'styled-components';
import useGetProducts from '@hooks/useGetProducts';

const Products = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, 240px);
	gap: 26px;
	place-content: center;
	margin: 3em 0 0 0;
	@media (max-width: 640px) {
		grid-template-columns: repeat(auto-fill, 140px);
	}
`;
import { Product } from '@components/Product/Product';
const API = 'https://api.escuelajs.co/api/v1/products';

const Home = () => {
	const products = useGetProducts(API);
	return (
		<React.Fragment>
			Hola
			<Header />
			<Products>
				{products.map((product, key) => (
					<Product key={key} product={product} />
				))}
			</Products>
		</React.Fragment>
	);
};

export { Home };
