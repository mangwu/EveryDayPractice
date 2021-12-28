/**
 * @description leetcode825适龄的朋友
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-12-27 19:03:31
 * @copyright © 2021 wangzhihao, All rights reserved.
 */

//  在社交媒体网站上有 n 个用户。给你一个整数数组 ages ，其中 ages[i] 是第 i 个用户的年龄。

//  如果下述任意一个条件为真，那么用户 x 将不会向用户 y（x != y）发送好友请求：

//  age[y] <= 0.5 * age[x] + 7
//  age[y] > age[x]
//  age[y] > 100 && age[x] < 100
//  否则，x 将会向 y 发送一条好友请求。

//  注意，如果 x 向 y 发送一条好友请求，y 不必也向 x 发送一条好友请求。另外，用户不会向自己发送好友请求。

//  返回在该社交媒体网站上产生的好友请求总数。

/**
 * @param {number[]} ages
 * @return {number}
 */
var numFriendRequests = function (ages) {
  // 1. 首先肯定要排序
  // 2. 暴力解法就是遍历n * n-1次
  // 发送请求数
  let ans = 0;
  // ages的长度
  let n = ages.length;
  // 从大到小排序
  ages = ages.sort((a, b) => b - a);
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      // 当ages[i] * 0.5 >= ages[j] 时，后面的一定都大了，故而直接退出循环
      if (ages[i] * 0.5 + 7 >= ages[j]) break;
      if (ages[i] === ages[j]) {
        ans++;
      }
      ans++;
    }
  }
  return ans;
};

console.log(
  numFriendRequests([
    10, 11, 11, 13, 15, 15, 15, 15, 15, 16, 16, 17, 18, 20, 30, 100, 100, 101,
    110, 120,
  ])
);

/**
 * @param {number[]} ages
 * @return {number}
 */
var numFriendRequests2 = function (ages) {
  // 1. 条件三成立，那么条件二一定成立，当条件1和2都不满足时，用户x就会向y发送好友请求
  // 2. 即0.5 * ages[x] + 7 < ages[y] <= ages[x]
  // 3. 对于严格递增数组，当age<=14 时 ,第一个条件必失效，因为临界值就是14
  // 4. 只需考虑age>=15的情况，当age>=15时，ages[y]的范围就是(0.5 * ages[x], ages[x]]
  // 5. 使用双指针，维护满足要求的ages[y]的左右边界,
  // 6. 遍历ages其为x的值，然后计算ages[y]的边界（满足x时的y的边界），求出个数加到ans中
  // 发送请求数
  let ans = 0;
  // 排序
  ages = ages.sort((a, b) => a - b);
  // ages[y]的边界
  let left = 0;
  let right = 0;
  // 遍历获得x
  for (let age of ages) {
    if (age <= 14) continue;
    // 左边界
    while (age * 0.5 + 7 >= ages[left]) {
      left++;
    }
    // 右边界
    while (right + 1 < ages.length && age >= ages[right + 1]) {
      right++;
    }
    ans += right - left;
  }
  return ans;
};
console.log(
  numFriendRequests2([
    10, 11, 11, 13, 15, 15, 15, 15, 15, 16, 16, 17, 18, 20, 30, 100, 100, 101,
    110, 120,
  ])
);
