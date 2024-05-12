const path = require("path");
const webpack = require("webpack");

module.exports = {
    target: 'node',  // Ensures webpack compiles for a Node.js environment
    mode: 'development',  // Set the mode to development to avoid the mode warning
    entry: path.resolve(__dirname, "src/index.ts"),
    externals: {
        express: 'commonjs express'  // This tells webpack not to bundle express
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
