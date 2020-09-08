const app = getApp();
const { default: transferDate } = require("../../utils/transferDate");
const { default: BACKGROND } = require("../../constants/background");

Page({
  onLoad() {
    console.log("load");
    let randomBackground = [];
    for (let i = 0; i < BACKGROND.length; ++i) {
      randomBackground.push(BACKGROND[Math.floor(Math.random() * BACKGROND.length)]);
    }
    this.setData({ randomBackground: randomBackground });
  },
  data: {
    themeColor: app.globalColor,
    today: transferDate(),
    items: [
      { title: "考研", tip: "嗷嗷", start_date: "2020-10-27", end_date: "2020-12-19", folded: true, left: 9 },
      {
        title: "托福",
        tip: "😫",
        start_date: "2020-12-19",
        end_date: "2020-12-19",
        folded: false,
        left: 129,
        total: 200,
      },
      {
        title: "托福",
        tip: "啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",
        start_date: "2020-12-19",
        end_date: "2020-12-19",
        folded: true,
        left: 1,
        total: 5,
      },
      {
        title: "托福",
        tip: "",
        start_date: "2020-12-19",
        end_date: "2020-12-19",
        folded: true,
        left: 2229,
        total: 6000,
      },
      {
        title: "托福",
        tip: "111",
        start_date: "2020-12-19",
        end_date: "2020-12-19",
        folded: true,
        left: 129,
        total: 3000,
      },
      {
        title: "托福",
        tip: "",
        start_date: "2020-12-19",
        end_date: "2020-12-19",
        folded: true,
        left: 129,
        total: 3000,
      },
      { title: "托福", tip: "", start_date: "2020-12-19", end_date: "2020-12-19", folded: true, left: 19, total: 3000 },
      {
        title: "托福",
        tip: "",
        start_date: "2020-12-19",
        end_date: "2020-12-19",
        folded: true,
        left: 139,
        total: 3000,
      },
    ],
  },
  onItemClick(e) {
    const key = e.currentTarget.dataset["key"];
    const newItems = [...this.data.items];
    const newItem = { ...newItems[key], folded: !newItems[key]["folded"] };
    newItems[key] = newItem;
    console.log(newItem);
    this.setData({ items: newItems });
  },
  onAddClick() {
    tt.navigateTo({
      url: "/pages/add/add",
    });
  },
  onEditClick() {
    tt.navigateTo({
      url: "/pages/add/add",
    });
  },
  onDeleteClick(e) {
    tt.showModal({
      title: "删除倒计时",
      content: `您确定要删除倒计时[${e.currentTarget.dataset["title"]}]吗？`,
      confirmColor: this.data.themeColor,
      success: (res) => {
        if (res.confirm) {
          console.log("confirm");
        }
      },
    });
  },
});
