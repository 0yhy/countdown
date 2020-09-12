import URL from "../constants/url";
import login from "../utils/login";

const request = (method, url, data) => {
  return new Promise((resolve, reject) => {
    if (tt.getStorageSync("expire") * 1000 >= new Date().getTime()) {
      console.log(`调用了自定义的${method}方法`, url);
      tt.request({
        url: URL + "/" + url,
        method: method,
        data: data,
        header: {
          "content-type": "application/json",
          Authorization: `Bearer ${tt.getStorageSync("token")}`,
        },
        success(res) {
          if (!res.data.code) {
            console.log("调用request成功", res.data);
            resolve(res.data);
          } else if (res.statusCode === 401) {
            login();
            reject();
          } else {
            reject(res.data);
          }
        },
        fail(error) {
          reject(error);
        },
      });
    } else {
      login();
    }
  });
};

module.exports = {
  get: (url, data) => {
    return request("GET", url, data);
  },
  post: (url, data) => {
    return request("POST", url, data);
  },
  put: (url, data) => {
    return request("PUT", url, data);
  },
  delete: (url, data) => {
    return request("DELETE", url, data);
  },
};
