import Request from "../../utils/request";
import calcDateDiff from "../../utils/calcDateDiff";
import transferDate from "../../utils/transferDate";
const app = getApp();

Page({
  data: {
    themeColor: app.globalColor,
    startDate: "2000-10-27",
    endDate: "",
    title: "",
    tip: "",
    _id: "",
  },
  onLoad: function (option) {
    console.log(JSON.parse(option.item));
    const item = JSON.parse(option.item);
    const { start_date, end_date, title, tip, _id } = item;
    this.setData({ startDate: start_date, endDate: end_date, title: title, tip: tip, _id: _id });
  },
  onDateChange(e) {
    console.log(e);
    this.setData({
      endDate: e.detail.value,
      count: calcDateDiff(this.data.startDate, e.detail.value),
    });
  },
  onTitleInput(e) {
    this.setData({ title: e.detail.value });
  },
  onTipInput(e) {
    this.setData({ tip: e.detail.value });
  },
  onStartDateClick() {
    tt.showToast({
      title: "开始日期不能修改哦！",
      icon: "none",
      duration: 1500,
    });
  },
  onSaveClick() {
    const { title, tip, startDate, endDate, _id } = this.data;
    tt.showLoading({
      title: "保存中...",
    });
    if (this.data.title && this.data.endDate) {
      Request.put("countdown", { title: title, tip: tip, start_date: startDate, end_date: endDate, _id: _id }).then(
        () => {
          tt.hideLoading();
          tt.showToast({
            title: "保存成功",
            duration: 1500,
          });
          setTimeout(() => {
            tt.navigateBack({
              delta: 1,
            });
          }, 1500);
        }
      );
    } else {
      let title = "";
      if (!this.data.endDate) {
        title = "请选择结束日期哦";
      }
      if (!this.data.title) {
        title = "请填写倒计时标题哦";
      }
      tt.showToast({
        title: title,
        duration: 1500,
        icon: "none",
      });
    }
  },
});
