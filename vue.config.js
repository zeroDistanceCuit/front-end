/*自定义配置文件*/
module.exports = {
    //构建判断引入路径
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    /*代理-本地跨域解决*/
    devServer: {
        // overlay: { // 让浏览器 overlay 同时显示警告和错误
        //   warnings: true,
        //   errors: true
        // },
        // open: false, // 是否打开浏览器
        // host: "localhost",
        // port: "8080", // 代理断就
        // https: false,
        // hotOnly: false, // 热更新
        proxy: {
            "/api": {
                target:
                    "http://localhost:2333/", // 目标代理接口地址
                secure: false,
                changeOrigin: true, // 开启代理，在本地创建一个虚拟服务端
                // ws: true, // 是否启用websockets
                pathRewrite: {
                    "^/api": ""
                }
            }
        },
        host: '0.0.0.0',
        port: 80
    }
};