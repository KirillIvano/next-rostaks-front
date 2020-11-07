/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const enhanceWebpackConfig = config => {
    config.resolve.alias = {
        ...config.resolve.alias,
        '@/*': path.resolve(__dirname, 'src'),
    };

    config.plugins.push(new MiniCssExtractPlugin());

    config.module.rules.push({
        test: /\.(sc|c)ss$/,
        exclude: /flexboxgrid/,
        use: [
            MiniCssExtractPlugin.loader,
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
