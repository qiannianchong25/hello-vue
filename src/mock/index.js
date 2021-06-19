const Mock = require('mockjs');
let configArr = [];
const requireAll = context => context.keys().map(context);
const files = require.context('.', false, /\.js$/);
console.log('vue-app-url',process.env)
requireAll(files).forEach(({
    default: file
}) => {
  //排除index.js
    if (file) {
        Object.entries(file).map(([type, value]) => {
            let template = ResponseFilter(value),
                method = type,
                url =/^\/mock/;
            configArr.push({
                template,
                method,
                url
            })
        })
    }
})
Mock.Random.extend({
    userInfo() {
        return Mock.mock({
            name: '@name',
            age: '@integer(12,56)',
            birth: '@date',
            'sex': '@pick(male,female,unknow)'
        })
    }
})
// console.log('extendUser', Mock.mock('@userInfo'))
Mock.setup({
    timeout: 1000
})
configArr.forEach(item => {
    Request(item)
})
function Request(option) {
    Mock.mock(option.url, option.method, option.template || option.callBack)
}
//过滤返回的数据
function ResponseFilter(data) {
    return {
        code: 0,
        message: 'success',
        data,
    }
}