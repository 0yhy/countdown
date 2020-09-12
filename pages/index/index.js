import transferDate from "../../utils/transferDate";
import BACKGROND from "../../constants/background";
import Request from "../../utils/request";
import calcDateDiff from "../../utils/calcDateDiff";

const app = getApp();

Page({
  onLoad() {
    this.generateRandomBackground();
  },
  onShow() {
    this.getCountdowns();
  },
  data: {
    themeColor: app.globalColor,
    today: transferDate(),
    items: [],
  },
  generateRandomBackground() {
    const randomBackground = [];
    for (let i = 0; i < BACKGROND.length; ++i) {
      randomBackground.push(BACKGROND[Math.floor(Math.random() * BACKGROND.length)]);
    }
    this.setData({ randomBackground: randomBackground });
  },
  getCountdowns() {
    Request.get("countdown")
      .then((res) => {
        const items = [];
        res.data.map((item) => {
          item.folded = true;
          item.left = calcDateDiff(this.data.today, item.end_date);
          items.push(item);
        });
        console.log(items);
        this.setData({ items: items });
      })
      .catch((err) => console.log(err));
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
  onEditClick(e) {
    const index = e.currentTarget.dataset["index"];
    tt.navigateTo({
      url: `/pages/edit/edit?item=${JSON.stringify(this.data.items[index])}`,
    });
  },
  onDeleteClick(e) {
    const index = e.currentTarget.dataset["index"];
    tt.showModal({
      title: "删除倒计时",
      content: `您确定要删除倒计时[${this.data.items[index].title}]吗？`,
      confirmColor: this.data.themeColor,
      success: (res) => {
        if (res.confirm) {
          Request.delete("countdown", { _id: this.data.items[index]._id }).then(() => {
            this.getCountdowns();
          });
        }
      },
    });
  },
});
