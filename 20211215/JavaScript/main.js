/**
 * @description 去除字符串指定的最后一个字符
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-12-17 09:08:27
 * @copyright © 2021 wangzhihao, All rights reserved.
 */

/**
 * @description 去除字符串指定的最后一个字符
 * @param {String} s 字符串
 * @param {String}} c 字符
 */
var removeLastChar = (s, c) => {
  const i = s.lastIndexOf(c);
  if (i !== 0) {
    return s.slice(0, i) + s.slice(i + 1);
  } else {
    return s;
  }
};

const a = "akscgh8as46as5";

console.log(removeLastChar(a, "a"));
/**
 * @description 去除字符串指定的最后一个字符
 * @param {String} s 字符串
 * @param {String}} c 字符
 */
var removeLastChar2 = (s, c) => {
  const reg = new RegExp(`${c}(?=([^${c}]*)$)`);
  return s.replace(reg, "");
};
console.log(removeLastChar2(a, "a"));