module.exports = {
  /*端口号*/
  port: process.env.port || 8080,

  /*dev-server在服务器启动后打开默认浏览器*/
  open: true,

  /*出现编译器错误或警告时，在浏览器中显示全屏覆盖。*/
  overlay: {
    /*不显示警告*/
    warnings: false,

    /*显示错误*/
    errors: true
  },

  /*如果你的前端应用和后端 API 服务器没有运行在同一个主机上，
  你需要在开发环境下将 API 请求代理到 API 服务器。*/
  proxy: {
    '/api': {
      target: 'http:www.baidu.com', // 要代理的API地址
      changeOrigin: true, // 允许跨域
      pathRewrite: {
        /*这里理解成用'/api'代替target里面的地址，后面组件中我们掉接口时直接用api代替*/
        /*比如我要调用'http://www.abc.com/user/add'，直接写'/api/user/add'即可'*/
        '^/api': ''
      }
    },
    '/foo': {
      target: '<other_url>'
    }
  }
}