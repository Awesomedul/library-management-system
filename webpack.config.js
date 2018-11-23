const path = require("path");
const { CheckerPlugin } = require('awesome-typescript-loader');

const reactImageElementLoader = require("react-image-element-loader");

const HtmlWebpackPlugin = require("html-webpack-plugin");



module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname,"build"),
        filename:"bundle.js"
    },
    module: {
        rules: [

            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
            {
              
                    test: /\.(png|jpe?g|gif|svg)$/,
                    loader: "react-image-element-loader",
                    
                 
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: 
                    "source-map-loader",
                
            },
            
            {
                test: /\.css$/,
                include: path.join(__dirname, 'src/components'),
                use: [
                  'style-loader',
                  {
                    loader: 'typings-for-css-modules-loader',
                    options: {
                      modules: true,
                      namedExport: true
                    }
                  }
                ]
              }
           
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html"
        })
    ],
    devtool: "source-map",
    resolve: {
        extensions: [".js",".ts",".tsx",".css","png"]
    }

}