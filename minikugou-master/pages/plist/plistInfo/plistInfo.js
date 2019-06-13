// pages/plist/plistInfo/plistInfo.js
import util from '../../../utils/util'
Page({

  /**
   * 页面的初始数据
   */
  data: {
      
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options.infoID){
      this.getList(options.infoID);
    }
  },
  getList(infoID){
    util.GET('http://m.kugou.com/plist/list/' + infoID + '?json=true',(data)=>{
      if(data){
        const title = data.info.list.specialname;
        const img = data.info.list.imgurl.replace('{size}','400');
        const song_list = data.list.list.info;
        this.setData({
          title:title,
          banner:img,
          song_list:song_list
        })
      }
    })
  },
  gotourl:function(e){
    const url = e.currentTarget.dataset.url;
    wx.navigateTo({
      url: url,
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})