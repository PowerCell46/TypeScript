const path = require("path");
const webpack = require("webpack");

module.exports = {
    target: 'node',
    mode: 'development',
    entry: path.resolve(__dirname, "src/index.ts"),
    externals: {
        express: 'commonjs express'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                include: [path.resolve(__dirname, "src")],
            },
        ],
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ]
};