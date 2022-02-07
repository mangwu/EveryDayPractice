/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-02-07 08:51:58                                                  *
 * @LastModifiedDate: 2022-02-07 10:51:45                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022                                                          *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 如果字符串中不含有任何 'aaa'，'bbb' 或 'ccc' 这样的字符串作为子串，那么该字符串就是一个「快乐字符串」。

// 给你三个整数 a，b ，c，请你返回 任意一个 满足下列全部条件的字符串 s：

// s 是一个尽可能长的快乐字符串。
// s 中 最多 有a 个字母 'a'、b 个字母 'b'、c 个字母 'c' 。
// s 中只含有 'a'、'b' 、'c' 三种字母。
// 如果不存在这样的字符串 s ，请返回一个空字符串 ""。

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function (a, b, c) {
  // 不能出现三个连续字符
  // a，b，c分别代表字符个数
  // 当选择连续两个字符后，需要选择其它字符了
  // 为了近可能多的选择字符，选择方式如下
  // 选择当前字符最多的字符，两个
  // 如果当前字符最多的字符被选择两个后仍然最多，选择第二多的字符一个
  // 循环上述两步，直到被选2个后当前字符不是最多的，选择两个或者1个最多的其它字符

  // 使用对象保存a,b,c
  const obj = { a, b, c };

  // 保存上一轮选择的字符
  let current = "";
  // 声明ans
  let ans = "";
  // 当a, b, c中有两个是0时就停止循环,且不为0的那一个不是当前字符
  while (obj.a + obj.b + obj.c > 0 && obj.a >= 0 && obj.b >= 0 && obj.c >= 0) {
    // 当前的最大值对应的字符
    let maxCurrent =
      obj.a >= obj.b && obj.a >= obj.c ? "a" : obj.b >= obj.c ? "b" : "c";
    // 当前第二多的字符 (不能和maxCurrent一样)
    let secondCurrent =
      maxCurrent == "a"
        ? obj.b >= obj.c
          ? "b"
          : "c"
        : maxCurrent == "b"
        ? obj.a >= obj.c
          ? "a"
          : "c"
        : obj.a >= obj.b
        ? "a"
        : "b";
    // 如果当前最大值的字符不为current(上一轮选择的字符)，就可以使用
    if (maxCurrent !== current) {
      if (obj[maxCurrent] >= 2) {
        ans = ans + maxCurrent + maxCurrent;
        obj[maxCurrent] = obj[maxCurrent] - 2;
      } else {
        ans = ans + maxCurrent;
        obj[maxCurrent] = obj[maxCurrent] - 1;
      }
      current = maxCurrent;
    } else {
      // 如果当前最大值字符就是current（上一轮选择字符），使用第二大字符即可
      if (obj[secondCurrent] > 0) {
        ans = ans + secondCurrent;
      }
      obj[secondCurrent] = obj[secondCurrent] - 1;
      current = secondCurrent;
    }
  }
  return ans;
};
