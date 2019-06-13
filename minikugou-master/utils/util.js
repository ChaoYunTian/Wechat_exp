function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
function formatNum(value) {
  var num = parseInt(value )/ 1000;
  var minute = Math.floor(num / 60);
  var second = Math.floor((num % 60));
  return [minute, second].map(formatNumber).join(':');
}
function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}
function GET(url, callback) {
  wx.request({
    url: url,
    header: {
      'content-type': 'application/json' // 默认值
    },
    success: function (res) {
      callback(res.data)
    },
    fail: function (err) {
      console.log(err)
    },
    complete: function () {

    }
  })
}

module.exports = {
  formatTime: formatTime,
  GET: GET,
  formatNum: formatNum
}
