//index.js
Page({
  data: {
    focus: true,
    inputValue: 0,
    array: ['Fair - 15%', 'Good - 18%', 'Outstanding - 20%', 'Perfect - 25%'],
    index: 0,
    percents: [0.15, 0.18, 0.2, 0.25],
    tips: 0,
    total: 0,
    split: 1
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindKeyInput: function (e) {
    console.log('用户输入，携带值为', e.detail.value)
    this.setData({
      inputValue: e.detail.value
    })
  },
  sliderchange: function (e) {
    console.log('用户输入，携带值为', e.detail.value)
    this.setData({
      split: e.detail.value
    })
  },
  submit: function (e) {
    this.setData({
      tips: this.data.inputValue * this.data.percents[this.data.index]
    })
    this.setData({
      total: +this.data.inputValue + +this.data.tips
    })
    console.log('tips', this.data.tips)
    console.log('total', this.data.total)
    var tipPerPerson = (this.data.tips / this.data.split).toFixed(2).toString()
    var totalPerPerson = (this.data.total / this.data.split).toFixed(2).toString()
    wx.showModal({
      title: '计算结果',
      content: '每人小费：$ ' + tipPerPerson + '\n' + '每人总金额：$ ' + totalPerPerson,
      showCancel: false,
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        }
      }
    })
  },
  reset: function (e) {
    this.setData({
      index: 0,
      tips: 0,
      total: 0
    })
  }
})
