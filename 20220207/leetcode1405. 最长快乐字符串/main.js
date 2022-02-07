/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-02-07 08:51:58                                                  *
 * @LastModifiedDate: 2022-02-07 13:56:30                                      *
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

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function (a, b, c) {
  // 上述方法在每次遍历后都手动计算最大和第二大的值，计算过程繁琐
  // 可以使用数组的排序方法将a, b,c 三个字符进行排序，从而每次遍历时都能获得最大和第二大的值
  // 用数组保存结果
  const res = [];
  // 用于根据，a,b,c大小进行排序的数组
  const arr = [['a', a], ['b', b], ['c', c]];
  // 由于可以根据res的最后一位判断上一次保存的字符是什么，所以不必声明使用current
  // 开始遍历
  while(true) {
    // 每次都进行数组排序，取得最多和第二多字符
    arr.sort((a, b) => b[1] - a[1]);
    // 声明本轮循环后是否能进入到下一轮的变量
    // 它可以通过每轮贪心中最多的或者第二多那一个字符数量是否被添加来判断下一轮是否继续
    let hasNext = false;
    // 遍历数组，每次都取数量最多的为本轮字符，如果连续选了两次，就选择第二个字符
    for (let [i, [ch, cnum]] of arr.entries()) {
      // 当其值小于等于0，说明第一个或者第二个大的值无法提供字符，可以结束字符选择了
      if (cnum <= 0) {
        break;
      }
      // 判断本次是否选择字符最多的字符
      const len = res.length;
      if (len >= 2 && res[len - 2] === ch && res[len - 1] === ch) {
        // 后面的两个字符都和本轮字符相同，则选择第二个
        continue;
      }
      // 选择第一个或者第二个
      hasNext = true;
      res.push(ch);
      // 更新数组
      arr[i][1]--;
      // 进行下一轮选择
      break;
    }
    // 如果没有下一次，退出循环
    if (!hasNext) {
      break;
    }
  }
  return res.join("");
};
