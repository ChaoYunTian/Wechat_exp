import util from '../../utils/util';
var app = getApp();
// pages/player/player.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    song:{},
    current_time:'00:00',
    total_time:'00:00',
    total_length:0,
    isPlay:false,
    value:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    setTimeout(()=>{
      console.log(app.globalData.backgroundAudioManager.paused)
    },500)
    if(options.hash == app.globalData.hash){
      this.updateInfo();
    }else{
      const hash = options.hash;
      this.getSong(hash);
    }
    var g_isplay = app.globalData.isPlay;
    this.setData({
       isPlay: g_isplay
    })
  },
  getSong:function(hash){
    util.GET('http://www.kugou.com/yy/index.php?r=play/getdata&hash='+ hash,(data)=>{
      this.setData({
        song:data.data,
        total_time: util.formatNum(data.data.timelength),
        total_length: Math.floor(data.data.timelength / 1000)
      })
      app.globalData.song = data.data;
      app.globalData.hash = data.data.hash;
      const backgroundAudioManager = app.globalData.backgroundAudioManager;
      backgroundAudioManager.src = this.data.song.play_url;
      this.setData({
        isPlay: true
      })
      app.globalData.isPlay = true;
      backgroundAudioManager.onTimeUpdate(() => {
        this.setData({
          current_time: util.formatNum(backgroundAudioManager.currentTime * 1000),
          value: backgroundAudioManager.currentTime
        })
      })
    })
  },
  // 播放音乐
  playAudio:function(){
    const backgroundAudioManager = app.globalData.backgroundAudioManager;
    backgroundAudioManager.play();
    backgroundAudioManager.onPlay(()=>{
      this.setData({
        isPlay: true
      })
      app.globalData.isPlay = true;
    })
  },
  //暂停播放
  pauseAudio:function(){
    const backgroundAudioManager = app.globalData.backgroundAudioManager;
    backgroundAudioManager.pause();
    backgroundAudioManager.onPause(()=>{
      this.setData({
        isPlay:false
      })
      app.globalData.isPlay = false;
    })
  },
  changeTime:function(e){
    const time =  e.detail.value;
    this.setData({
      current_time: util.formatNum(time * 1000)
    })
  },
  setTime:function(e){
    console.log(e.detail.value)
  },
  gotoback: function () {
    wx.navigateBack({
      delta: 1
    })
  },
  updateInfo:function(){
    const backgroundAudioManager = app.globalData.backgroundAudioManager;
    this.setData({
      total_time: util.formatNum(app.globalData.song.timelength),
      total_length: Math.floor(app.globalData.song.timelength / 1000),
      song: app.globalData.song,
      current_time: util.formatNum(backgroundAudioManager.currentTime * 1000),
      value: backgroundAudioManager.currentTime,
    })
    backgroundAudioManager.onTimeUpdate(() => {
      this.setData({
        current_time: util.formatNum(backgroundAudioManager.currentTime * 1000),
        value: backgroundAudioManager.currentTime,
        
      })
    })
    backgroundAudioManager.onPlay(() => {
      this.setData({
        isPlay: true,
        
      })
      app.globalData.isPlay = true;
    })
    backgroundAudioManager.onPause(() => {
      this.setData({
        isPlay: false,
      })
      app.globalData.isPlay = false;
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