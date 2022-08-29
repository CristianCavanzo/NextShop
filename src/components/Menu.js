import React from 'react';
import MenuStyle from '@styles/Menu.module.css';

const Menu = () => {
	return (
		<div className={MenuStyle.Menu}>
			<ul>
				<li>
					<a href="/" className={MenuStyle.title}>
						My orders
					</a>
				</li>
				<li>
					<a href="/">My account</a>
				</li>
				<li>
					<a href="/">Sign out</a>
				</li>
			</ul>
		</div>
	);
};

export { Menu };
