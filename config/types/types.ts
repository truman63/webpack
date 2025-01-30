export interface BuildPath {
    entry: string,
    html: string,
    output: string,
    src: string,
    public: string
}

export type Mode = "production" | "development";
export type BuildPlatform = "mobile" | "desctop";

export interface BuildOptions {
    mode: Mode,
    paths: BuildPath,
    port: number,
    platform: BuildPlatform
}