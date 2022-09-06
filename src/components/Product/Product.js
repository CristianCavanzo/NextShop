import React, { useContext } from 'react';
import styled from 'styled-components';
import addCard from '@icons/bt_add_to_cart.svg';
import AppContext from '../../context/AppContext';
import Image from 'next/image';

const ProductComponent = styled.div`
	width: 240px;
	img {
		width: 240px;
		height: 240px;
		border-radius: 20px;
		object-fit: cover;
	}
	@media (max-width: 640px) {
		width: 140px;
		img {
			width: 140px;
			height: 140px;
		}
	}
`;
const ProductInfo = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 12px;
	figure {
		margin: 0;
		cursor: pointer;
	}
	img {
		width: 35px;
		height: 35px;
	}
	button {
		border: none;
		background: transparent;
	}
	.Price {
		font-weight: bold;
		font-size: var(--md);
		margin-top: 0;
		margin-bottom: 4px;
	}
	.ProductName {
		font-size: var(--sm);
		margin-top: 0;
		margin-bottom: 0;
		color: #757575;
	}
`;

const Product = ({ product }) => {
	const { addToCart } = useContext(AppContext);

	const handleClick = (item) => {
		addToCart(item);
	};
	return (
		<ProductComponent>
			<Image
				loading="lazy"
				src={product.images[0]}
				alt={product.title}
				width={'100vw'}
				height={'100'}
				layout={'responsive'}
			/>
			<ProductInfo>
				<div>
					<p className="Price">
						${product.price}
					</p>
					<p className="ProductName">
						{product.title}
					</p>
				</div>
				<button
					onClick={() => handleClick(product)}
					onKeyUp={() => handleClick(product)}
				>
					<figure>
						<Image
							src={addCard}
							alt="add product image"
						/>
					</figure>
				</button>
			</ProductInfo>
		</ProductComponent>
	);
};

export { Product };
