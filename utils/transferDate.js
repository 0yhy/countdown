/**
 * 将Date转换为符合条件的字符串
 * @export
 * @param {Date} time
 * @param {string} [split="-"]
 */
export default function transferDate(time = new Date(), split = "-") {
  const year = time.getFullYear();
  const month = time.getMonth() < 9 ? `0${time.getMonth() + 1}` : time.getMonth() + 1;
  const date = time.getDate() < 10 ? `0${time.getDate()}` : time.getDate();
  return `${year}${split}${month}${split}${date}`;
}
