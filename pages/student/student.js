Page({
  data:{
    stu:{}
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    var that = this;
    var session = wx.getStorageSync("session")
    console.log(session)
    wx.request({
      url: 'http://127.0.0.1:8080/message/student',
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
       header: {Cookie:session}, // 设置请求的 header
      success: function(res){
        // success
        if (res.data.Message === "成功！"){
            that.setData({
                stu:res.data.Data
            })
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
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
  },
  onShow:function(){
    // 生命周期函数--监听页面显示
  },
  onHide:function(){
    // 生命周期函数--监听页面隐藏
  },
  onUnload:function(){
    // 生命周期函数--监听页面卸载
  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作
  },
  onReachBottom: function() {
    // 页面上拉触底事件的处理函数
  },
  
  //onShareAppMessage: function() {
    // 用户点击右上角分享
  //  return {
  //    title: 'title', // 分享标题
  //    desc: 'desc', // 分享描述
  //    path: 'path' // 分享路径
  //  }
  //}
})