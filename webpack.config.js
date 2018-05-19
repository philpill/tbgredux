const path = require('path');
const webpack = require('webpack');

module.exports = 
    {
        mode: 'development',
        resolve: {  
            extensions: ['.ts', '.js']
        },
        module: {
            rules: [
                { 
                    test: /\.ts$/, 
                    use: 'ts-loader',
                    exclude: /node_modules/
                }
            ]
        },
        entry: {
            vendor: ['three'],
            app: './src/ts/main.ts'
        },
        output: {
            path: path.resolve(__dirname, 'assets/js'),
            chunkFilename: '[name].js',
            publicPath: '/'
        },
        optimization: {
            minimize: false,
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        chunks: 'initial',
                        name: 'vendor',
                        test: 'vendor',
                        enforce: true
                   },
                }
            }
        }
    }
