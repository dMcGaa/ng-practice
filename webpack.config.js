module.exports = {
    entry: "./src/simpleApp.js",
    output: {
        path: "./dist",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.html$/, loader: "raw!markup-inline" }
        ]
    }
};