const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    devtool: "source-map",
    // entry: __dirname + '/source/js/common.js',
    // entry: [ __dirname + '/source/js/common.js'].concat(glob.sync('./source/sass/pages/*.sass'))
    // entry: {
    //     "company": "./source/js/common.js"
    // },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
              terserOptions: {
                format: {
                    comments: false,
                    beautify: true
                },
              },
              extractComments: false,
            }),
          ]
      },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    target: ['es5'],
    output: {
        // publicPath: '',
        filename: '[name].js',
        clean: true
    },
    
    mode: 'development'
}
