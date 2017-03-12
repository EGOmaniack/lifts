var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require("path");
module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
        
    },
    plugins:[
        new HtmlWebpackPlugin({
            title: "mediaPult",
            minify:{
                collapseWhitespace: true
            },
            template: './src/index.html',
            hash:true
        })
    ],
    devServer:{
        contentBase: path.join(__dirname,"dist"),
        compress: true,
        stats: "errors-only",
        port: 9000,
        open: true
    },
  
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [ ".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".css"]
    },

    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" }
        ],
   
    },

   
};