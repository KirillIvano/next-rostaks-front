const enhanceWebpackConfig = config => {
    config.module.rules.push({
        test: /\.(sa|sc|le|c)ss$/,
        use: [
            'style-loader',
            {
                loader: 'typings-for-css-modules-loader',
                options: {
                    modules: true,
                    namedExport: true,
                    exportOnlyLocals: true,
                },
            },
            'sass-loader',
        ],
    });

    return config;
};


module.exports = {
    webpack: config => enhanceWebpackConfig(config),
};
