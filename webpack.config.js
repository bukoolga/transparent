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
    ]
};
