const { default: transferDate } = require("../../utils/transferDate");
const app = getApp();

Page({
  data: {
    themeColor: app.globalColor,
    startDate: "2000-10-27",
    endDate: "2030-05-12",
    count: "?",
    curDate: new Date(),
  },
  onShow: function () {
    this.setData({ startDate: transferDate() });
  },

  bindDateChange(e) {
    console.log(e);
    this.setData({
      date: e.detail.value,
    });
  },
});
