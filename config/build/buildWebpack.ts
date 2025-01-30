import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from "path";
import webpack from 'webpack';
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPluagins } from './buildPluagins';
import { buildRezolvers } from './buildRezolvers';
import { BuildOptions } from '../types/types';
// import * as 'webpack-dev-server';

export function buildWebpack(options: BuildOptions): webpack.Configuration {
    const isDev = options.mode === "development"
    const isProd = options.mode === "production"

    return {
		
		mode: options.mode ?? "development",
		entry: options.paths.entry,
		output: {
			path: options.paths.output,
			filename: "[name].[contenthash].js",
			clean: true
		},
		plugins: buildPluagins(options),
		module: {
			rules: buildLoaders(options),
		},
		resolve: buildRezolvers(options),
		devtool: isDev ? 'eval-cheap-module-source-map' : 'source-map',
		devServer: isDev ? buildDevServer(options) : undefined
	}
}