import React from 'react';
import MenuStyle from '@styles/Menu.module.css';
import Link from 'next/link';

const Menu = () => {
	return (
		<div className={MenuStyle.Menu}>
			<ul>
				<li>
					<Link
						href="/"
						className={MenuStyle.title}
					>
						My orders
					</Link>
				</li>
				<li>
					<Link href="/">My account</Link>
				</li>
				<li>
					<Link href="/">Sign out</Link>
				</li>
			</ul>
		</div>
	);
};

export { Menu };
