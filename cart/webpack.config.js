const HtmlWebpackPlugin = require('html-webpack-plugin')

const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
    mode: 'development',
    devServer: {
        port: 8082
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'cart',
            filename: 'remoteEntry.js',
            exposes: {
                './CartShow': './src/bootstrap'
            },
            shared: ['faker'], // khác version thì load 2 lần, cùng version load 1 lần
            // shared: {
            //     faker: {
            //         singleton: true, // load 1 lần kể cả khác version
            //     },
            // }
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}