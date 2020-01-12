let config = {
  bannerAd: "43b6b40f6d833ac04c20c3102ce89a3b",
  cardAd: "421331b7be90dc096cd2980159ba467b",
  feedsAd: "122466cc5b060715992f890d62e409a1",
  boxAd: "9221379adf9043bfe77a048f9e779026",
  rewardAd: '29ffbb18c207272ce1502e7967ba327e',
  interAd: '7464523f287d1e72afb303f8cf83fec8'
}
//BOX广告
function boxAd() {
  console.log('-----------------' + this.config.boxAd)
  let appbox = qq.createAppBox({
      adUnitId: this.config.boxAd
  })
  appbox.load().then(() => {
      appbox.show()
  })
}
//显示激励广告
function rewardedVideoAd() {
  let ad = qq.createRewardedVideoAd({ adUnitId: this.config.rewardAd });
  ad.onError(function (res) { console.log('rewardedVideoAd onError', res) });
  //
  ad.load()
      .then(() => ad.show())
      .catch(err => console.log(err.errMsg))
}
//显示插屏广告
function interstitialAd() {
  let ad = qq.createInterstitialAd({ adUnitId: this.config.interAd });
  ad.onError(function (res) { console.log('interstitialAd onError', res) });
  //
  ad.load()
      .then(() => ad.show())
      .catch(err => console.log(err.errMsg))
}

module.exports = {
  config: config,
  boxAd: boxAd,
  rewardedVideoAd: rewardedVideoAd,
  interstitialAd: interstitialAd,
}