module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
  ],
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant'],
    ["import",{
        libraryName: "ant-design-vue",
        libraryDirectory: "es",
        style: true
      },"ant-design-vue"],
      ["import",{
        "libraryName": "lodash",
        "libraryDirectory": "",
        "camel2DashComponentName": false,  // default: true
      },"lodash"]
  ]
}