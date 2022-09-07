import { Html, Head, Main, NextScript } from 'next/document';
export default function Document() {
	return (
		<Html lang="es">
			<Head>
				<meta charSet="utf-8" />
				<link
					rel="preconnect"
					href="https://fonts.googleapis.com"
				/>
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="true"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Lato:wght@100;400;700&family=Open+Sans:wght@300;400;700&family=Poppins:wght@100;400;700&family=Quicksand:wght@300;400;500;600;700&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
