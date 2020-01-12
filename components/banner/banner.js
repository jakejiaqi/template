// components/banner/banner.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    test1: "这里是组件的内部节点",
    cardCur: 0,
    swiperList: [
      {
        "type": "image",
        "url": "https://www.minipgm.cn/static/img/girls_1003.jpg"
      }, {
        "type": "image",
        "url": "https://www.minipgm.cn/static/img/girls_1004.jpg"
      }, {
        "type": "image",
        "url": "https://www.minipgm.cn/static/img/girls_1005.jpg"
      }
    ]
  },

  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    towerSwiper: function () { },

  },

  /**
   * 组件的方法列表
   */
  methods: {
    cardSwiper: function (t) {
      this.setData({
        cardCur: t.detail.current
      });
    },
    towerSwiper: function (t) {
      for (var e = this.data[t], a = 0; a < e.length; a++) e[a].zIndex = parseInt(e.length / 2) + 1 - Math.abs(a - parseInt(e.length / 2)),
        e[a].mLeft = a - parseInt(e.length / 2);
      this.setData({
        swiperList: e
      });
    },



    changeWord: function () {
      this.setData({
        test1: "更新属性和数据的方法与更新页面数据的方法类似"
      })
    },

  }
})
