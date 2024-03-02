import { BuildWebpackConf } from './config/build/webpack'
import path from 'path'
import { EnvVariables, Path, WebpackConf } from './config/types/config'

const root = path.resolve(__dirname)
const entryPath = path.resolve(__dirname, 'src')
const components = path.resolve(entryPath, 'components')
const pages = path.resolve(entryPath, 'pages')
const assets = path.resolve(entryPath, 'assets')

const publicPath = path.resolve(__dirname, 'public')
const outputPath = path.resolve(__dirname, 'build')

export default (env: EnvVariables) => {

    const isDev: boolean = env.mode === 'development'

    const devtool = isDev ? 'inline-source-map' : false

    const analyzer = env.analyzer

    const extensions: string[] = ['.tsx', '.ts', '.js']

    const paths: Path = {
        entryPath,
        outputPath,
        publicPath,
        components,
        assets,
        pages,
        root
    }

    const options: WebpackConf = {
        env: {
            mode: env.mode || 'development',
            port: env.port || '3000',
            analyzer: env.analyzer || false,
            babel: env.babel,
            platform: env.platform || 'desktop'
        },
        paths,
        devtool,
        extensions,
        isDev: isDev,
    }

    return BuildWebpackConf(options)
}