import Request from "../../utils/request";

const app = getApp();

Page({
  data: {
    themeColor: app.globalColor,
    advice: "",
  },
  onAdviceInput(e) {
    this.setData({ advice: e.detail.value });
  },
  onSaveClick() {
    if (!this.data.advice) {
      tt.showToast({
        title: "不能为空哦",
        icon: "none",
      });
    } else {
      Request.post("advice", { advice: this.data.advice }).then((res) => {
        if (res.code) {
          tt.showToast({
            title: "出错了，请稍后重试哦",
            icon: "none",
          });
        } else {
          tt.showToast({
            title: "您的意见已收到！",
            duration: 1500,
          });
          setTimeout(() => {
            tt.navigateBack({
              delta: 1,
            });
          }, 1500);
        }
      });
    }
  },
});
