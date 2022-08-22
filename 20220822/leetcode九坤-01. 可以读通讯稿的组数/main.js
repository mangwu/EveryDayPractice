/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-22 20:23:31                                                  *
 * @LastModifiedDate: 2022-08-22 20:49:15                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 校运动会上，所有参赛同学身上都贴有他的参赛号码。某班参赛同学的号码记于数组 nums 中。
// 假定反转后的号码称为原数字的「镜像号码」。如果 两位同学 满足条件：
// 镜像号码 A + 原号码 B = 镜像号码 B + 原号码 A，则这两位同学可以到广播站兑换一次读通讯稿的机会，
// 为同班同学加油助威。请返回所有参赛同学可以组成的可以读通讯稿的组数，并将结果对10^9+7取余。

// 注意：

// 镜像号码中如存在前置零，则忽略前置零。
// 同一位同学可有多次兑换机会。
const max = Math.pow(10, 9) + 7;
/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfPairs = function (nums) {
  // 计算差值
  // 差值相同就能构成数组队
  const subs = new Map();
  for (const num of nums) {
    const subNum = getSub(num);
    if (subs.has(subNum)) {
      subs.set(subNum, subs.get(subNum) + 1);
    } else {
      subs.set(subNum, 1);
    }
  }
  let ans = 0;
  for (const [key, val] of subs) {
    if (val >= 2) {
      ans += ((val - 1) * val) / 2;
      ans %= max;
    }
  }
  return ans;
};

var getSub = (num) => {
  const reverseNum = num.toString().split("").reverse().join("");
  return num - parseInt(reverseNum);
};
