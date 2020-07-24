const devServer = require('./devServer');
const configureWebpack=require('./webpack.config')

module.exports = {
  /*所有的资源都会被链接为相对路径, 此属性相当于2.x中的 assetsPublicPath*/
  publicPath: './',

  /*生产环境构建文件的目录*/
  outputDir: 'dist',

  /*放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。*/
  assetsDir: 'static',

  /*是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码。*/
  /*这个值会在 @vue/cli-plugin-eslint 被安装之后生效。*/
  lintOnSave: process.env.NODE_ENV === 'development',

  /*如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。*/
  productionSourceMap: false,

  /*所有 webpack-dev-server 的选项*/
  devServer,

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'stylus',
      patterns: [
        './src/assets/stylus/*.styl',
      ]
    }
  },
  css:{
    //不可设置为false，否则vant的样式也会受到影响
    requireModuleExtension:true,
    loaderOptions: {
      css: {
        // 这里的选项会传递给 css-loader
        modules: true
      },
      postcss: {
        plugins: [
          require('postcss-plugin-px2rem')({
              rootValue: 37.5, //换算基数， 默认100  ，这样的话把根标签的字体规定为1rem为50px,这样就可以从设计稿上量出多少个px直接在代码中写多上px了。
              unitPrecision: 5, //允许REM单位增长到的十进制数字。
              propWhiteList: [],  //默认值是一个空数组，这意味着禁用白名单并启用所有属性。
              propBlackList: [/^border$/], //黑名单
              exclude: /(node_module)/,  //默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)/ 。如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
              selectorBlackList: [/ignore/], //要忽略并保留为px的选择器
              ignoreIdentifier: false,  //（boolean/string）忽略单个属性的方法，启用ignoreidentifier后，replace将自动设置为true。
              // replace: true, // （布尔值）替换包含REM的规则，而不是添加回退。
              mediaQuery: false,  //（布尔值）允许在媒体查询中转换px。
              minPixelValue: 1 //设置要替换的最小像素值(1px会被转rem)。 默认 0
          }),
      ]
    }
    }
  },
  configureWebpack
}