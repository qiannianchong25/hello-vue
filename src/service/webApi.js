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
    }
}
export default WEB_API