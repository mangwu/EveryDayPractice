/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-11-17 22:28:19                                                  *
 * @LastModifiedDate: 2024-11-18 01:18:28                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 在社交媒体网站上有 n 个用户。给你一个整数数组 ages ，其中 ages[i] 是第 i 个用户的年龄。

// 如果下述任意一个条件为真，那么用户 x 将不会向用户 y（x != y）发送好友请求：

// ages[y] <= 0.5 * ages[x] + 7
// ages[y] > ages[x]
// ages[y] > 100 && ages[x] < 100
// 否则，x 将会向 y 发送一条好友请求。

// 注意，如果 x 向 y 发送一条好友请求，y 不必也向 x 发送一条好友请求。另外，用户不会向自己发送好友请求。

// 返回在该社交媒体网站上产生的好友请求总数。

/**
 * @param {number[]} ages
 * @return {number}
 */
var numFriendRequests = function (ages) {
  // ages[x]会发送请求的条件，三个都要满足
  // 1. ages[y] > 0.5 * ages[x] + 7
  // 2. ages[y] <= ages[x]
  // 3. ages[y] <= 100 || ages[x] >= 100
  ages.sort((a, b) => a - b);
  const n = ages.length;
  let res = 0;
  for (let i = 0; i < n; i++) {
    let maxAge = ages[i];
    const minAge = 0.5 * ages[i] + 7;
    if (ages[i] < 100) maxAge = Math.min(maxAge, 100);
    // 找到大于的minAge的最小索引
    let left = 0;
    let right = n;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (ages[mid] > minAge) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    let leftIdx = left;
    // 找到小于等于maxAge的最大索引
    left = 0;
    right = n - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (ages[mid] <= maxAge) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    let rightIdx = right;
    if (rightIdx >= leftIdx) {
      res += rightIdx - leftIdx + 1;
    }
    // console.log("minAge", minAge);
    // console.log("maxAge", maxAge);
    // console.log(leftIdx, rightIdx);
    if (i >= leftIdx && i <= rightIdx) res--;
  }
  return res;
};
