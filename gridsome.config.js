module.exports = {
	siteName: 'Blue Collar Development',
	siteUrl: 'https://www.bluecollardev.com',
	siteDescription: 'Blue Collar Development, Victoria, BC',
	titleTemplate: `%s - Blue Collar`,

	plugins: [
		{
			use: '@gridsome/source-filesystem',
			options: {
				path: './blog/*.md',
				typeName: 'BlogPost',
				route: '/blog/:slug'
			}
		}
	],
	chainWebpack: (config, { isServer }) => {
		config.module
			.rule('scss')
				.test(/\.scss$/)
				.oneOf('normal')
					.use('sass')
					.loader('sass-loader')
					.end()
				.end();

		// TODO: Document this - https://github.com/gridsome/gridsome/issues/384
		// It prevents use of vue-google-maps
		if (isServer) {
      config.externals([/^(vue|vue-router|vue-meta)$/])
    }
	}
}
