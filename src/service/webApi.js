const WEB_API={
    // 获取联系列表
    getContactList:{
        method:'get',
        url:'/concat/new/from'
    },
    // 新建联系人
    newContactJson:{
        method:'post',
        url:'/concat/new/json'
    },
    // 编辑联系人
    editContact:{
        method:'put',
        url:'/concat/edit'
    },
    // 删除联系人
    delContact:{
        method:'delete',
        url:'/concat/delete'
    },
    // 获取列表
    getList:{
        method:'get',
        url:'/job/company/search'
    },
    // 获取列表
    getLocal:{
        method:'get',
        url:'/mock/list'
    },
    //获取用户信息
    getUserInfo:{
        method:'get',
        url:'/mock/userInfo'
    }
}
export default WEB_API