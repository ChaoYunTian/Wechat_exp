// pages/rank/rankInfo/rankInfo.js
import util from '../../../utils/util'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    song_list:[],
    banner:'',
    title:'',
    time:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options){
      const infoID = options.infoid;
      this.getList(infoID);
    }
  },
 getList:function(infoID){
   util.GET('http://m.kugou.com/rank/info/?rankid=' + infoID + '&page=1&json=true',(data)=>{
     const banner = data.info.banner7url.replace('{size}','400');
     const title = data.info.rankname;
     const time = util.formatTime(new Date());
     this.setData({
       banner:banner,
       title:title,
       time:time,
       song_list:data.songs.list
     })
   })
 },
 gotoback:function(){
   wx.navigateBack({
     delta:1
   })
 },
 gotourl: function (e) {
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