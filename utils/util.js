function jionActivity(activityId){
  var message = '';
  var session = wx.getStorageSync("session")
  wx.request({
    url: 'http://127.0.0.1:8080/message/student/jion',
    data: {
      activity_id:activityId
    },
    method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
    header: {Cookie:session}, // 设置请求的 header
    success: function(res){
      // success
      message = res.data.Message
      console.log(message)
      if ( message === "报名成功！"){
        wx.showToast({
              title: '报名成功！',
              image:'../../img/user.png'
            })
      }else if(message === "您已经报过名了！"){
        wx.showToast({
              title: '您已经报过名了！',
              image:'../../img/user.png'
            })
      }else {
        wx.showToast({
              title: '网络错误，请稍后重试！',
              image:'../../img/user.png'
        })
      }
    },
  })
}

module.exports = {
  jionActivity:jionActivity
}