import BACKGROND from "../../constants/background";

Page({
  onLoad() {
    this.generateRandomBackground();
  },
  generateRandomBackground() {
    this.setData({ randomBackground: BACKGROND[Math.floor(Math.random() * BACKGROND.length)] });
    console.log(BACKGROND[Math.floor(Math.random() * BACKGROND.length)]);
  },
  onThemeClick() {
    tt.navigateTo({
      url: "/pages/color/color",
    });
  },
  onAdviceClick() {
    tt.navigateTo({
      url: "/pages/advice/advice",
    });
  },
  onAboutClick() {
    tt.navigateTo({
      url: "/pages/about/about",
    });
  },
});
