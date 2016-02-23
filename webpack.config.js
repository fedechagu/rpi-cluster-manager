var debug = process.env.NODE_ENV !== "production";
var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: debug ? "inline-sourcemap" : null,
    entry: __dirname + '/public/js/client.js',
    output: {
        path: __dirname,
        filename: '/public/js/bundle.min.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: path.join(__dirname),
                query: {
                  presets: ['es2015', 'react'],
                  plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
                },
            }
        ]
    },
    plugins: debug ? [] : [
       new webpack.optimize.DedupePlugin(),
       new webpack.optimize.OccurenceOrderPlugin(),
       new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
     ],
    stats: {
        // Nice colored output
        colors: true
    },
    // Create Sourcemaps for the bundle
    devtool: 'source-map'
};
