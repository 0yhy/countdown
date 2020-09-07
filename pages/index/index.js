const app = getApp();
const { default: transferDate } = require("../../utils/transferDate");

Page({
  data: {
    themeColor: app.globalColor,
    today: transferDate(),
    items: [
      { title: "考研", tip: "", start_date: "2020-10-27", end_date: "2020-12-19", left: 9 },
      { title: "托福", tip: "", start_date: "2020-12-19", end_date: "2020-12-19", left: 129 },
    ],
  },
  onAddClick() {
    tt.navigateTo({
      url: "/pages/add/add",
    });
    console.log("hello");
  },
});
