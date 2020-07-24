const path = require('path');
const resolve = dir => path.resolve(__dirname, dir)
module.exports = {
  resolve: {
    extensions: ['.js', '.vue', '.json', ".css"],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  }
}