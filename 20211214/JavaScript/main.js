/**
 * @description http://www.h-camel.com/show/6.html
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-12-15 16:11:30
 * @copyright © 2021 wangzhihao, All rights reserved.
 */

/**
 * @description    写一个方法去掉字符串中的空格，要求传入不同的类型分别能去掉前、后、前后、中间的空格
 * @param {string} s
 * @param {string} direction
 */
var deleteSpace = function (s, direction) {
  switch (direction) {
    case "left": {
      return s.replace(/\s+/, "");
    }
    case "right": {
      return s.replace(/\s+$/g, "");
    }
    case "side": {
      return s.replace(/\s+|\s+$/g, "");
    }
    case "all": {
      return s.replace(/\s+/g, "");
    }
    case "middle": {
      let left = s.match(/\s+/);
      let right = s.match(/\s+$/g);
      return left + s.replace(/\s+/g, "") + right;
    }
    default: {
      return s.replace(/\s+/g, "");
    }
  }
};
let str = "  javascript HTMl CSS  ";
console.log(deleteSpace(str));
console.log(deleteSpace(str, "left"));
console.log(
  deleteSpace(str, "right"),
  deleteSpace(str, "right").length,
  str.length
);
console.log(
  deleteSpace(str, "side"),
  deleteSpace(str, "side").length,
  str.length
);
console.log(deleteSpace(str, "middle"));
