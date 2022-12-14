module.exports = {
	reactStrictMode: true,
	env: {
		customKey: 'customValue',
	},
	compiler: {
		styledComponents: true,
	},
	images: {
		domains: [
			'api.lorem.space',
			'placeimg.com',
			'images.pexels.com',
		],
	},
	compress: true,
	async redirects() {
		return [
			{
				source: '/hola',
				destination:
					'https://platzi.com/clases/2690-nextjs-practico/45095-nextconfigjs/',
				permanent: true,
			},
		];
	},
};
