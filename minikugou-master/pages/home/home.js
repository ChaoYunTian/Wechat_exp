// pages/home/home.js
import util from '../../utils/util'
Page({

  /**
   * 页面的初始数据
   */
  data: {
     banner_list:[],
     song_list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     this.getList();
  },
  getList:function(){
    util.GET('http://m.kugou.com?json=true',(data)=>{
        if(data){
           this.setData({
             banner_list:data.banner,
             song_list:data.data
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
  gotoback:function(){
    wx.navigateBack({
      delta:1
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