import COLORS from "../../constants/color";
const app = getApp();

Page({
  data: {
    themeColor: app.globalColor,
    selectColor: app.globalColor,
  },
  onLoad() {
    this.setData({ colors: COLORS });
    console.log(this.data.colors);
  },
  onColorClick(e) {
    this.setData({ selectColor: e.currentTarget.dataset["color"] });
  },
  onColorInput(e) {
    this.setData({ selectColor: e.detail.value });
  },
  onSaveClick() {
    const reg = /^#([a-fA-F\d]{6}|[a-fA-F\d]{3})$/;
    if (!reg.test(this.data.selectColor)) {
      tt.showToast({
        title: "颜色输入不正确，请检查格式！",
        icon: "none",
        duration: 1500,
      });
    } else {
      app.globalColor = this.data.selectColor;
      tt.setStorageSync("themeColor", this.data.selectColor);
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
  },
});
