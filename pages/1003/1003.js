// pages/1003/1003.js
Page({
  name: "index",
  data: {
    value: [2, 2],
    btnTxt: "金牛女配金牛男",
    conList: ["白羊", "金牛", "双子", "巨蟹", "狮子", "处女", "天秤", "天蝎", "射手", "摩羯", "水瓶", "双鱼"],
    women: ["白羊座", "金牛座", "双子座", "巨蟹座", "狮子座", "处女座", "天秤座", "天蝎座", "射手座", "摩羯座", "水瓶座", "双鱼座"],
    men: ["白羊座", "金牛座", "双子座", "巨蟹座", "狮子座", "处女座", "天秤座", "天蝎座", "射手座", "摩羯座", "水瓶座", "双鱼座"],
    woman: 2,
    man: 2
  },
  onLoad: function () { },
  onReady: function () { },
  onShow: function () { },
  onHide: function () { },
  onUnload: function () { },
  onPullDownRefresh: function () { },
  onShareAppMessage: function (n) { },

  bindChange: function (n) {
    var a = this;
    this.setData({
      woman: n.detail.value[0],
      man: n.detail.value[1],
      btnTxt: "" + a.data.conList[n.detail.value[0]] + "女配" + a.data.conList[n.detail.value[1]] + "男"
    });
  },

  tap_start: function (n) {
    //this.showModalVideo();
    console.log('a: ' + this.data.woman + 'b: ' + this.data.man)
    wx.navigateTo({
      url: "10031?X=" + this.data.woman + "&Y=" + this.data.man
    });
  },

  navHome: function () {
    console.log('navHome')
    wx.navigateTo({
      url: "../index/index"
    })
  },


});