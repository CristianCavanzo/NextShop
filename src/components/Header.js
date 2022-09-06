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
				<Link href="/">
					<Image
						src={logo}
						alt="logo"
						className={HeaderStyle.logo}
					/>
				</Link>

				<ul>
					<li>
						<Link href="/login">All</Link>
					</li>
					<li>
						<Link href="/">Clothes</Link>
					</li>
					<li>
						<Link href="/">
							Electronics
						</Link>
					</li>
					<li>
						<Link href="/">Furnitures</Link>
					</li>
					<li>
						<Link href="/">Toys</Link>
					</li>
					<li>
						<Link href="/">Others</Link>
					</li>
				</ul>
			</div>

			<div className={HeaderStyle.navbar_right}>
				<ul>
					<li
						className={
							HeaderStyle.navbar_email
						}
						role="menuitem"
						onClick={handleToggle}
						onKeyUp={handleToggle}
					>
						<p>platzi@example.com</p>
					</li>
					<li
						className={
							HeaderStyle.navbar_shopping_cart
						}
					>
						<Image
							src={shoppingCart}
							alt="shopping cart"
							onClick={
								handleToggleOrders
							}
							onKeyUp={
								handleToggleOrders
							}
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
