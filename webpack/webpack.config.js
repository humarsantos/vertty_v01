var path = require('path');
var webpack = require('webpack');
var BabiliPlugin = require("babili-webpack-plugin");

module.exports = {
    entry: {
        boot: [
            './boot/TweenLite',
            './boot/CSSPlugin',
            './boot/EasePack',
            './boot/jquery-1.9.1.min'
        ],
        boot_product: [
            './boot/TweenLite',
            './boot/CSSPlugin',
            './boot/EasePack',
            './boot/jquery-1.9.1.min',
            './boot/jquery.fancybox'
        ],
        towel: [ './towel/Towel', './components/FeaturesSlide' ]
    },
    module: {
        
        rules: [
          {
            test: /\.exec\.js$/,
            use: [ 'script-loader' ]
          }
        ]
    },
    resolve: {
        modules: [ "node_modules", path.resolve(__dirname, "boot") ],
        extensions: [".js", ".json", ".jsx", ".css"],
        alias: {
          "module": "new-module",
          "only-module$": "new-module",
          "module": path.resolve(__dirname, "app/third/module.js")
        },
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './packages')
    },
    plugins: [
        new BabiliPlugin()
    ]
};



