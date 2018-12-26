const path = require("path");

module.exports = {
    entry: "./src/index.ts",
    mode: "production",
    watch: true,
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".ts"]
    },
    output: {
        filename: "bundle.min.js",
        path: path.resolve(__dirname, "./dist")
    }
};
