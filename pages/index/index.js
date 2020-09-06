const app = getApp();
const { default: transferDate } = require("../../utils/transferDate");

Page({
  data: {
    themeColor: app.globalColor,
    today: transferDate(),
    items: [
      { title: "考研", tip: "", date: "2020-10-27" },
      { title: "托福", tip: "", date: "2020-12-19" },
    ],
  },
  onAddClick() {
    tt.navigateTo({
      url: "/pages/add/add",
    });
    console.log("hello");
  },
});
