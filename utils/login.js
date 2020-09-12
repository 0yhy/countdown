import URL from "../constants/url";

export default function login() {
  tt.login({
    success: function (res) {
      if (res.code) {
        tt.request({
          url: `${URL}/token`,
          data: {
            code: res.code,
          },
          method: "POST",
          success(result) {
            console.log(`request 调用成功`, result);
            tt.setStorageSync("token", result.data.data.token);
            tt.setStorageSync("expire", result.data.data.expire);
          },
          fail(res) {
            console.log(`request 调用失败`);
          },
        });
      } else {
        console.log(res.errMsg);
      }
    },
  });
}
