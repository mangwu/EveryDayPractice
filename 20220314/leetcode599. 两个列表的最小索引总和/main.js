/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-14 08:54:50                                                  *
 * @LastModifiedDate: 2022-03-14 10:09:38                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 假设 Andy 和 Doris 想在晚餐时选择一家餐厅，并且他们都有一个表示最喜爱餐厅的列表，每个餐厅的名字用字符串表示。

// 你需要帮助他们用最少的索引和找出他们共同喜爱的餐厅。 如果答案不止一个，则输出所有答案并且不考虑顺序。 你可以假设答案总是存在。

/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  // 使用一个hash保存其中一个的值和索引，再遍历另一个
  const len1 = list1.length;
  const len2 = list2.length;
  if (len1 > len2) {
    return findRestaurant(list2, list1);
  }
  const hash = new Map();
  for (let i = 0; i < len1; i++) {
    hash.set(list1[i], i);
  }
  console.log(hash);
  let ans = [];
  let min = Number.MAX_VALUE;
  for (let j = 0; j < len2; j++) {
    // console.log(list2[j]);
    if (hash.has(list2[j])) {
      const idx = hash.get(list2[j]);
      console.log(idx, j);
      if (j + idx < min) {
        ans = [list2[j]];
        min = j + idx;
      } else if (j + idx == min) {
        ans.push(list2[j]);
      }
    }
  }
  return ans;
};

findRestaurant(
  ["Shogun", "Tapioca Express", "Burger King", "KFC"],
  [
    "Piatti",
    "The Grill at Torrey Pines",
    "Hungry Hunter Steakhouse",
    "Tapioca Express",
    "Shogun",
  ]
);
