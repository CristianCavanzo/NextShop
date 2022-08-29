import React, { useContext, useState } from 'react';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import { Menu } from '@components/Menu';
import { MyOrder } from '@containers/MyOrder';
import Link from 'next/link';
import HeaderStyle from '@styles/Header.module.css';
import AppContext from '@context/AppContext';
import Image from 'next/image';

const Header = () => {
	const {
		state: { cart },
	} = useContext(AppContext);
	const [toggle, setToggle] = useState(false);
	const [toggleOrders, setToggleOrders] = useState(false);
	const handleToggle = () => {
		setToggle(!toggle);
	};
	const handleToggleOrders = () => {
		setToggleOrders(!toggleOrders);
	};
	return (
		<nav className={HeaderStyle.nav}>
			<Image
				src={menu}
				alt="menu"
				className={HeaderStyle.menu}
			/>

			<div className={HeaderStyle.navbar_left}>
				<Image
					src={logo}
					alt="logo"
					className={HeaderStyle.logo}
				/>

				<ul>
					<li>
						<Link href="/login">All</Link>
					</li>
					<li>
						<a href="/">Clothes</a>
					</li>
					<li>
						<a href="/">Electronics</a>
					</li>
					<li>
						<a href="/">Furnitures</a>
					</li>
					<li>
						<a href="/">Toys</a>
					</li>
					<li>
						<a href="/">Others</a>
					</li>
				</ul>
			</div>

			<div className={HeaderStyle.navbar_right}>
				<ul>
					<li
						className={
							HeaderStyle.navbar_email
						}
						onClick={handleToggle}
					>
						platzi@example.com
					</li>
					<li
						className={
							HeaderStyle.navbar_shopping_cart
						}
						onClick={handleToggleOrders}
					>
						<Image
							src={shoppingCart}
							alt="shopping cart"
						/>
						{cart.length > 0 && (
							<div>{cart.length}</div>
						)}
					</li>
				</ul>
			</div>
			{toggle && <Menu />}
			{toggleOrders && <MyOrder />}
		</nav>
	);
};

export { Header };
