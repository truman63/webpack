import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import { Configuration, DefinePlugin} from "webpack";
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import CopyPlugin from "copy-webpack-plugin";
import webpack from "webpack"
import { BuildOptions } from "../types/types";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

export function buildPluagins(options: BuildOptions): Configuration['plugins'] {
    const isDev = options.mode === "development"
    const isProd = options.mode === "production"

    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({ template: options.paths.html, /*favicon: path.resolve(options.paths.public, "favicon.png")*/ }),
        // new MiniCssExtractPlugin({
        //     filename: "css/main.css"
        // })
        // new BundleAnalyzerPlugin()
        new DefinePlugin({
            __PLATFORM__: JSON.stringify(options.platform),
            __ENV__: JSON.stringify(options.mode),
        }),

    ]

    if (isDev) {
        plugins.push(new webpack.ProgressPlugin())
        plugins.push(new ForkTsCheckerWebpackPlugin())
        plugins.push(new ReactRefreshWebpackPlugin())
    }

    if (isProd) {
        plugins.push(new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }))
        // plugins.push(new CopyPlugin({
        //     patterns: [
        //         { from: path.resolve(options.paths.public, "locales"), to: path.resolve(options.paths.output, "a")},
        //     ],
        // }))
    }

    return plugins
}