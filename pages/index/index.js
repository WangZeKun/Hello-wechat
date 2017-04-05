//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    username:'',
    password:'',
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  setUsername:function(e){
    this.setData({
      username : e.detail.value
    })
  },
  setPassword:function(e){
    this.setData({
      password : e.detail.value
    })
  },

  login:function(e){
    var that = this
    wx.request({
      url: 'http://127.0.0.1:8080/message/login',
      data: {
        username:this.data.username,
        password:this.data.password,
        select: e.target.dataset.select
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
       header: {}, // 设置请求的 header
      success: function(res){
        // success
        
        let message = res.data.Message; 
        if (message === '密码错误！'){
          wx.showToast({
            title:'密码错误！',
            image:'../../img/error.png'
          })
        }else if (message === '请选择正确的登录用户！'){
          wx.showToast({
            title: '请选择正确的登录用户！',
            image:'../../img/user.png'
          })
        }else if(message === "成功，学生登录！"){
          var session = "beegosessionID=" + res.data.Data
          console.log(session)
          console.log(res.data)
          wx.setStorageSync("session",session)
          wx.switchTab({
            url: '../student/student'
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
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})

