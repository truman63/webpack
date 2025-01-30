import path from "path";
import webpack from 'webpack';
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { buildWebpack } from './config/build/buildWebpack';
import { BuildPath, BuildPlatform } from './config/types/types';

type Mode = "production" | "development";

interface EnvVariables {
	mode?: Mode,
	port?: number 
	platform?: BuildPlatform 
}

export default(env: EnvVariables) => {
	const paths: BuildPath = {
		output: path.resolve(__dirname, "build"),
		entry: path.resolve(__dirname, "src", "index.tsx"),
		html: path.resolve(__dirname, "public", "index.html"),
		src: path.resolve(__dirname, "src"),
		public: path.resolve(__dirname, "public")
	}

	const config: webpack.Configuration = buildWebpack({
		port: env.port ?? 3000,
		mode: env.mode ?? "development",
		paths,
		platform: env.platform ?? "desctop"
	});
	return config
}
