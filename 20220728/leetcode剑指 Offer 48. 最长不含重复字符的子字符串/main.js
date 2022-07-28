/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-07-28 09:48:09                                                  *
 * @LastModifiedDate: 2022-07-28 09:52:38                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // 滑动窗口
  // 双指针
  const set = new Set();
  let left = 0;
  let right = 0;
  const n = s.length;
  let ans = 0;
  while (right < n) {
    while (!set.has(s[right]) && right < n) {
      set.add(s[right]);
      right++;
    }
    ans = Math.max(ans, set.size);
    while (set.has(s[right]) && left < right) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    right++;
  }
  return ans;
};
