import TerserPlugin from 'terser-webpack-plugin';
import path from "path";
import { Configuration, DefinePlugin } from "webpack";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as webpackDevServer from "webpack-dev-server";

const config: Configuration = {
    entry: "./src/index.tsx",
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                            "@babel/preset-typescript",
                        ],
                    },
                },
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "[name].bundle.js",
        chunkFilename: "[name].chunk.js"
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "build"),
        },
        compress: true,
        port: 3000,
    },
    plugins: [
        new DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
            'process.env.PUBLIC_URL': JSON.stringify(process.env.PUBLIC_URL || 'https://www.thinh.tech'),
        })
    ],
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
        runtimeChunk: "multiple",
        splitChunks: {
            chunks: "all",
            cacheGroups: {
                chakra: {
                    name: "chakra",
                    test: /[\\/]node_modules[\\/]@chakra-ui[\\/]/,
                    enforce: true,
                    chunks: "initial",
                },
                framer: {
                    name: "framer",
                    test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
                    enforce: true,
                    chunks: "initial",
                },
                react_dom: {
                    name: "react-dom",
                    test: /[\\/]node_modules[\\/]react-dom[\\/]/,
                    enforce: true,
                    chunks: "initial",
                },
                vendors: {
                    name: "vendors",
                    test: /[\\/]node_modules[\\/]/,
                    enforce: true,
                    chunks: "initial",
                },
                components: {
                    name: "components",
                    test: /[\\/]src[\\/]components[\\/]/,
                    enforce: true
                }
            }
        }
    }
};

export default config;