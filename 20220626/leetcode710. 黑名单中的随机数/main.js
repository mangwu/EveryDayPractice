/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-06-26 00:05:26                                                  *
 * @LastModifiedDate: 2022-06-26 01:13:24                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * @param {number} n
 * @param {number[]} blacklist
 */
var Solution = function (n, blacklist) {
  this.n = n;
  this.set = new Set(blacklist);
};

/**
 * @return {number}
 */
Solution.prototype.pick = function () {
  let random = Math.floor(Math.random() * this.n + 1);
  while (this.set.has(random)) {
    random = Math.floor(Math.random() * this.n + 1);
  }
  return random;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(n, blacklist)
 * var param_1 = obj.pick()
 */

/**
 * @param {number} n
 * @param {number[]} blacklist
 */
var Solution = function (n, blacklist) {
  this.n = n;
  this.bl = blacklist.sort((a, b) => a - b);
};

/**
 * @return {number}
 */
Solution.prototype.pick = function () {
  let random = Math.floor(Math.random() * (this.n - this.bl.length));
  // 黑名单为空的情况
  if (this.bl.length == 0) {
    return random;
  }
  // 找到第random个数
  let left = 0;
  let right = this.bl.length;
  while (left < right) {
    let mid = (left + right) >> 1;
    // 找到第一个this.bl[mid] - mid > random的值
    if (this.bl[mid] - mid <= random) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  if (left == this.bl.length) {
    // random值在this.bl[left - 1] 后
    return this.bl[left - 1] + random - (this.bl[left - 1] - left + 1) + 1;
  }
  return this.bl[left - 1] - (this.bl[left] - left - random);
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(n, blacklist)
 * var param_1 = obj.pick()
 */

// [0,4,5,6] 10 [0-9]
// [0,3,3,3]
// 10 - 4 = 6

// 0-5

// 0 - 1
// 1 - 2
// 2 - 3
// 3 - 7
// 4 - 8
// 5 - 9
