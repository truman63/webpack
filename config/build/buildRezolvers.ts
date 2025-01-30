import { Configuration } from "webpack";
import { BuildOptions } from "../types/types";

export function buildRezolvers(options: BuildOptions): Configuration["resolve"] {
    return {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss', '.css'],
        alias: {
            "@": options.paths.src
        }
    }
}