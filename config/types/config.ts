export interface EnvVariables {
    mode?: 'development' | 'production'
    port: string
    analyzer?: boolean
    platform?: 'desktop' | 'mobile'
    babel: boolean
}

export interface Path {
    entryPath: string
    outputPath: string
    publicPath: string
    components: string
    pages: string
    assets: string
    root: string
}

export type WebpackConf = {
    paths: Path
    isDev: boolean
    devtool: 'inline-source-map' | false
    env: EnvVariables
    extensions: string[]
}