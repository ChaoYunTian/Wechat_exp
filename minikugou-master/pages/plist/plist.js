import util from '../../utils/util'
Page({

  /**
   * 页面的初始数据
   */
  data: {
     p_list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getList();
  },
getList:function(){
  util.GET('http://m.kugou.com/plist/index&json=true',(data)=>{
     if(data){
       let new_list = data.plist.list.info;
       for(let i=0;i<new_list.length;i++){
         new_list[i].img = new_list[i].imgurl.replace('{size}','400');
       }
       this.setData({
         p_list:new_list
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