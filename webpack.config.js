const path = require('path');
const webpack = require('webpack');

module.exports = 
    {
        entry: {
            app: './src/js/main.js'
        },
        output: {
            path: path.resolve(__dirname, 'assets/js'),
            filename: '[name].js'
        },
        plugins: [
        ]
    }
