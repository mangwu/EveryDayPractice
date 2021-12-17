/**
 * @description 去除字符串中换行和制表符号的方法
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-12-17 19:07:19
 * @copyright © 2021 wangzhihao, All rights reserved.
 */

var removeTabAndNewLine = (s) => {
  return s.replace(/\s+/g, "");
};

const a = "asj\tas\\t\nasdgH\tGHF  XGA\nasx";
console.log(a);
console.log(removeTabAndNewLine(a));
