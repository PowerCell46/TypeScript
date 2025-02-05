# Basic Typescript setup

1. **npm install -g typescript**
2. **tsc --init**
3. open the **tsconfig.json** and configure it like this:
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "rootDir": "./",  
  }
}
```
4. **run tsc file.ts && file.js**


# Final Typescript setup

1. **tsc --init**
2. **npm init --y**
3. **npm i webpack webpack-cli webpack-dev-server typescript ts-loader**
4. tsconfig.json configuration:
```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "es6",
    "strict": true,
    "sourceMap": true
  }
}
```
5. package.json scripts configuration
```json
  "scripts": {
    "build": " webpack --mode production",
    "dev": "webpack-dev-server --mode development"
  },
```
6. Create file ***webpack.config.js*** with content:
```javascript
const path = require("path");

module.exports = {
    devtool: "eval-source-map",
    entry: path.resolve(__dirname, "src/index.ts"),
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
    devServer: {
        static: path.resolve(__dirname, "dist"),
        port: 3000,
        hot: true,
        open: true,
        compress: true,
    }
};
```
7. Create folder **src** and create a file named *index.ts* (keep the typescript files in this folder and import them in *index.ts*)
8. Create folder **dist**, with file **bundle.js**
9. ***(Optional)*** Create **index.html** file and connect it to the bundle.js file
```html
    <script src="./bundle.js"></script>
```
