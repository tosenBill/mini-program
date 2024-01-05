module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
  },
  mini: {},
  h5: {
    devServer: {
      host: "0.0.0.0",
      port: 9999,
      open:false,
      // 仅在 proxy 中配置的代理前缀， mock-dev-server 才会拦截并 mock
      // doc: https://github.com/pengzhanbo/vite-plugin-mock-dev-server
      proxy: {
        "/customer": {
          target: "http://218.205.135.163:8090",
          // target: "http://d.c.cloudos.cnpc.com.cn/",
          // target: "http://share.c.cloudos.cnpc.com.cn/", // online
          // target: "http://t.c.cloudos.cnpc.com.cn/",
          changeOrigin: true, // 开启代理,
        }
      }
    }
  }
}
