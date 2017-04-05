// pages/jionedactivity/activity.js
Page({
  data:{
    jions:[]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
    var that = this;
    var session = wx.getStorageSync("session")
    console.log(session)
    wx.request({
      url: 'http://127.0.0.1:8080/message/student/canjia',
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
       header: {Cookie:session}, // 设置请求的 header
      success: function(res){
        // success
        console.log(res)
        if (res.data.Message === "成功！"){
            that.setData({
                jions:res.data.Data
            })
            console.log(that.data.jions)
        }
      },
      fail: function(res) {
        // fail
      },
      complete: function(res) {
        // complete
      }
    })
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})