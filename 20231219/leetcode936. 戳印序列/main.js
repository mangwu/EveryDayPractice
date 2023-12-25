/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-12-19 15:03:29                                                  *
 * @LastModifiedDate: 2023-12-25 14:34:52                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 你想要用小写字母组成一个目标字符串 target。

// 开始的时候，序列由 target.length 个 '?' 记号组成。而你有一个小写字母印章 stamp。

// 在每个回合，你可以将印章放在序列上，并将序列中的每个字母替换为印章上的相应字母。你最多可以进行 10 * target.length  个回合。

// 举个例子，如果初始序列为 "?????"，而你的印章 stamp 是 "abc"，那么在第一回合，你可以得到 "abc??"、"?abc?"、"??abc"。（请注意，印章必须完全包含在序列的边界内才能盖下去。）

// 如果可以印出序列，那么返回一个数组，该数组由每个回合中被印下的最左边字母的索引组成。如果不能印出序列，就返回一个空数组。

// 例如，如果序列是 "ababc"，印章是 "abc"，那么我们就可以返回与操作 "?????" -> "abc??" -> "ababc" 相对应的答案 [0, 2]；

// 另外，如果可以印出序列，那么需要保证可以在 10 * target.length 个回合内完成。任何超过此数字的答案将不被接受。

/**
 * @param {string} stamp
 * @param {string} target
 * @return {number[]}
 */
var movesToStamp = function (stamp, target) {
  if (stamp[0] !== target[0]) return [];
  const stampLen = stamp.length;
  const targetLen = target.length;
  const hash = new Map();
  for (let i = 0; i < stampLen; i++) {
    hash.has(stamp[i]) ? hash.get(stamp[i]).push(i) : hash.set(stamp[i], [i]);
  }
  let min = 0;
  let max = 0;
  const res = [];
  for (let i = 0; i < targetLen; i++) {
    // 从第一个字符开始对照
    let pre = res.length ? res[res.length - 1] : -1;
    const js = hash.get(target[i]);
    if (!js) return []; // 没有相关字符
    // 从中选择合法且匹配字符最大的一个
    for (const j of js) {
      // stamp从j开始，target从i开始匹配字符
      // 首先判断是否合法
      if (j <= i) {
        // 不能溢出
        // 先判断是覆盖上一个还是被上个覆盖
      } else return [];
    }
  }
};
// abcbe
// abcbebeaabcbabcbabcaabcbe
// abcbebeaabcbcabcbabcaabcbe
//   abcbe   abcbe     abcbe
// abcbebeabcbecabcbe  abcbe
// abcbebeabcabcbecbe  abcbe
// abcbebeaabcbe

/**
 * @param {string} stamp
 * @param {string} target
 * @return {number[]}
 */
var movesToStamp = function (stamp, target) {
  // 逆序思维：将匹配stamp的字符盖成通配符，使得target全部变为通配符?，这样就不用考虑字符是什么了
  // 暴力解法就是不断遍历target，使其对stamp进行匹配，直到target全是通配符
  const m = stamp.length;
  const n = target.length;
  const targetArr = target.split("");
  let num = 0; // 更换的通配符数量
  const ans = [];
  while (true) {
    let noOne = true; // 本次匹配是否一次都没成功
    for (let i = 0; i < n; i++) {
      let canMatch = true; // 是否能匹配成功
      let allWildCh = true; // 是否全是通配符
      for (let j = 0; j < m; j++) {
        // 判断能匹配的两种情况，并更新匹配状态
        if (targetArr[i + j] === "?") continue;
        else if (targetArr[i + j] === stamp[j]) allWildCh = false;
        else {
          canMatch = false;
          break;
        }
      }
      // 能匹配且不全是通配符
      if (canMatch && !allWildCh) {
        noOne = false;
        // 更新target
        ans.push(i);
        for (let j = 0; j < m; j++) {
          if (targetArr[i + j] !== "?") {
            num++;
            targetArr[i + j] = "?"; // 转换成通配符
          }
        }
      }
    }
    if (noOne) return []; // 本次匹配没有一个成功说明无法进行匹配
    if (num >= n) return ans.reverse();
  }
};



// abcbe
// abcbebeaabcbabcbabcaabcbe
// [7,8,12,16,19,20,2,0]
//        abcbe
//        aabcbe
//        aabcbabcbe
//        aabcbabcbabcbe
//        aabcbabcbabcabcbe
//   abcbeaabcbabcbabcabcbe
// abcbebeaabcbabcbabcabcbe