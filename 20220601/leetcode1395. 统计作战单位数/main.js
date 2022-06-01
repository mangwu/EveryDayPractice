/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-06-01 13:52:02                                                  *
 * @LastModifiedDate: 2022-06-01 14:40:43                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

//  n 名士兵站成一排。每个士兵都有一个 独一无二 的评分 rating 。

// 每 3 个士兵可以组成一个作战单位，分组规则如下：

// 从队伍中选出下标分别为 i、j、k 的 3 名士兵，他们的评分分别为 rating[i]、rating[j]、rating[k]
// 作战单位需满足： rating[i] < rating[j] < rating[k] 或者 rating[i] > rating[j] > rating[k] ，
// 其中  0 <= i < j < k < n
// 请你返回按上述条件可以组建的作战单位数量。每个士兵都可以是多个作战单位的一部分。
// rating 中的元素都是唯一的

/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function (rating) {
  // 找出间隔递增或递减的三元组的个数
  // 双指针
  const n = rating.length;
  const hash1 = new Map();
  const hash2 = new Map();
  for (let i = 0; i < n; i++) {
    let arr1 = [];
    let arr2 = [];
    for (let j = i + 1; j < n; j++) {
      if (rating[j] < rating[i]) {
        arr1.push(j);
      } else {
        arr2.push(j);
      }
    }
    hash1.set(rating[i], arr1);
    hash2.set(rating[i], arr2);
  }
  let ans = 0;
  for (const [_key, val] of hash1) {
    for (const i of val) {
      ans += hash1.get(rating[i]).length;
    }
  }
  for (const [_key, val] of hash2) {
    for (const i of val) {
      ans += hash2.get(rating[i]).length;
    }
  }
  return ans;
};

// 8 : 5 3 6 2 => 2 + 1 + 1 + 0
// 5 : 3 2 => 1 + 0
// 3 : 2 => 0
// 6 : 2 => 0
// 2 :   => 0
