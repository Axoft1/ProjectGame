const path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    output: {
        filename: 'js/common.js',
        path: path.resolve(__dirname, 'public')
    },
    devServer: {
        hot: true,
        compress: true,
        port: 9000,
        static: {
            directory: path.resolve(__dirname, 'public'),
            watch: true,
        },
    },
    devtool: 'eval-source-map'
};