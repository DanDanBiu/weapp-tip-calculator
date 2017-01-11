//index.js
Page({
  data: {
    focue: true,
    inputValue: 0,
    array: ['15%', '18%', '20%', '25%'],
    index: 0,
    percents: [0.15, 0.18, 0.2, 0.25]
  },
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindKeyInput: function(e) {
    console.log('用户输入，携带值为', e.detail.value)
    this.setData({
      inputValue: e.detail.value
    })
  },
  formSubmit: function(e) {
    var tips = this.data.inputValue * this.data.percents[this.data.index]
    console.log('小费为', tips)
    var total = +this.data.inputValue + +tips
    console.log('总和为', total)
    wx.showModal({
      title: '计算结果',
      content: '小费：' + tips.toString() + '\n' + '总金额：' + total.toString(),
      showCancel: false,
      success: function(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        }
      }
    })
    //this.formReset
  },
  formReset: function(e) {
    this.setData({
      index: 0,
      inputValue: 0
    })
  }
})
