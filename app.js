import Request from "./utils/request";
import login from "./utils/login.js";

App({
  onLaunch() {
    login();
    if (tt.getStorageSync("themeColor")) {
      this.globalColor = tt.getStorageSync("themeColor");
    }
  },
  globalColor: "#8fb2c9",
});
