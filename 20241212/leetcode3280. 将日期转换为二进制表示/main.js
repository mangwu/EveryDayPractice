// 给你一个字符串 date，它的格式为 yyyy-mm-dd，表示一个公历日期。

// date 可以重写为二进制表示，只需要将年、月、日分别转换为对应的二进制表示（不带前导零）并遵循 year-month-day 的格式。

// 返回 date 的 二进制 表示。

/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function (date) {
  return date
    .split("-")
    .map((v) => parseInt(v).toString(2))
    .join("-");
};
