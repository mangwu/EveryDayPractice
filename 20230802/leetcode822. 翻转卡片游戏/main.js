/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-08-02 09:01:35                                                  *
 * @LastModifiedDate: 2023-08-02 09:30:34                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 在桌子上有 N 张卡片，每张卡片的正面和背面都写着一个正数（正面与背面上的数有可能不一样）。

// 我们可以先翻转任意张卡片，然后选择其中一张卡片。

// 如果选中的那张卡片背面的数字 X 与任意一张卡片的正面的数字都不同，那么这个数字是我们想要的数字。

// 哪个数是这些想要的数字中最小的数（找到这些数中的最小值）呢？如果没有一个数字符合要求的，输出 0。

// 其中, fronts[i] 和 backs[i] 分别代表第 i 张卡片的正面和背面的数字。

// 如果我们通过翻转卡片来交换正面与背面上的数，那么当初在正面的数就变成背面的数，背面的数就变成正面的数。

/**
 * @param {number[]} fronts
 * @param {number[]} backs
 * @return {number}
 */
var flipgame = function (fronts, backs) {
  const n = fronts.length;
  let res = Infinity;
  for (let i = 0; i < n; i++) {
    if (fronts[i] === backs[i]) continue;
    if (canSelect(fronts, backs, fronts[i])) res = Math.min(fronts[i], res);
    if (canSelect(fronts, backs, backs[i])) res = Math.min(backs[i], res);
  }
  return res === Infinity ? 0 : res;
};

var canSelect = function (fronts, backs, num) {
  const n = fronts.length;
  for (let i = 0; i < n; i++) {
    if (fronts[i] !== num || backs[i] !== num) continue;
    return false;
  }
  return true;
};

/**
 * @param {number[]} fronts
 * @param {number[]} backs
 * @return {number}
 */
var flipgame = function (fronts, backs) {
  const set = new Set();
  const n = fronts.length;
  for (let i = 0; i < n; i++) {
    if (fronts[i] === backs[i]) set.add(fronts[i]);
  }
  let res = 3000;
  for (let i = 0; i < n; i++) {
    if (!set.has(fronts[i])) res = Math.min(res, fronts[i]);
    if (!set.has(backs[i])) res = Math.min(res, backs[i]);
  }
  return res % 3000;
};
