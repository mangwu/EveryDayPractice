/**
 * @description 大驼峰命名
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-12-17 09:44:23
 * @copyright © 2021 wangzhihao, All rights reserved.
 */

/**
 * @description 下划线转大驼峰命名
 * @param {String} str 下划线命名名称变量
 * @returns {String}
 */
var underlineToBigHump = (str) => {
  // 逐个比较替换
  let ans = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "_") {
      ans = ans + str[++i].toLocaleUpperCase();
    } else {
      ans += str[i];
    }
  }
  return ans;
};
console.log(underlineToBigHump("this_is_a_underline_var"));

/**
 * @description 下划线转大驼峰命名
 * @param {String} str 下划线命名名称变量
 * @returns {String}
 */
var underlineToBigHump2 = (str) => {
  // 通过spilt分割后再合并
  let ans = "";
  let s = str.split("_");
  s.map((item, index) => {
    if (index !== 0) {
      ans += item.substring(0, 1).toLocaleUpperCase() + item.substring(1);
      return item;
    }
    ans += item;
  });
  return ans;
};
console.log(underlineToBigHump2("this_is_a_underline_var"));

/**
 * @description 下划线转大驼峰命名
 * @param {String} str 下划线命名名称变量
 * @returns {String}
 */
var underlineToBigHump3 = (str) => {
  // 使用正则表达式
  let ans = str.replace(/(_)(\w)/g, (_match, _$1, $2) => `${$2.toLocaleUpperCase()}`);
  return ans;
};
underlineToBigHump3("this_is_a_underline_var");
underlineToBigHump3("_a_c_de");
