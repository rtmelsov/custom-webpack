import { WebpackConf } from '../../types/config'
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export const GetDevTools = (options: WebpackConf): DevServerConfiguration => {
    const { env, isDev } = options
    const { port } = env

    return isDev ? {
        port: port ?? 4000,
        open: true,
        historyApiFallback: true,
        hot: true
    } : undefined
}