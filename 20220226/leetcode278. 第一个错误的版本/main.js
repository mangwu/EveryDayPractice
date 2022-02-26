/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-02-26 20:29:36                                                  *
 * @LastModifiedDate: 2022-02-26 21:11:58                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */


/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
 var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    // 二分查找法
    // 查找[0, n];
    let left = 0;
    let right = n;
    let mid;
    // 当left == right时,就是第一个坏版本，避免死循环需要使用<
    while(left < right) {
      mid = Math.floor((left + right) / 2)
      if(isBadVersion(mid)) {
        // 如果是坏版本，说明最早的坏版本是它或者在它之前
        // [left,mid]
        right = mid;
      } else {
        // 不是坏版本
        // [mid+1, right]
        left = mid + 1;
      }
    }
    return left
  };
};