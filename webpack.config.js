var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");
module.exports = {
    context: __dirname + "/app",
    entry: './index.js',
    output: {
        path: __dirname + '/app',
        filename: 'app.bundle.js'
    },
    loaders: [
        {
            test: /\.js$/,
            loader: 'ng-annotate!babel?presets[]=es2015!jshint',
            exclude: /node_modules|bower_components/
        }
    ],
    // our Webpack Development Server config
    devServer: {
        historyApiFallback: true,
        host: "0.0.0.0",
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        },
        contentBase: 'app',
        publicPath: '/__build__'
    }
};