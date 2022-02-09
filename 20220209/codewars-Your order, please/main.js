/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-02-09 18:08:25                                                  *
 * @LastModifiedDate: 2022-02-09 18:40:20                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022                                                          *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 单词排序
// 给定一个words句子
// 其中的每个单词都含有一个1-9的数字
// 根据数字从小到大将单词排序后组成正确的句子方法
// 如 is2 Thi1s Te4st a3 => Thi1s is2 a3 Te4st

function order(words) {
  const ans = [];
  // 将单词分离
  const wordArr = words.split(/\s+/);
  // 提取每个单词的数字然后依次添加到ans
  for (const word of wordArr) {
    const a = word.match(/\d/g);
    console.log(a);
    if (a) {
      ans[a[0] - 1] = word;
    }
  }
  return ans.join(" ");
}

order("Thi1s  is2  3a  T4est");
order("");

function order2(words) {
  // 简化结果

  // 因为wordArr是包含所有单词的数组，所以得到后可以直接通过sort排序
  // 且可以不用担心null问题,null在减法中被看为 0 只有一个元素的数组减法会第一个元素相减，而且字符串相减会被转化为对应的数值相减
  return words
    .split(/\s+/)
    .sort((a, b) => a.match(/\d/g) - b.match(/\d/g))
    .join(" ");
}
console.log(order2("Thi1s  is2  3a  T4est"));
console.log(order2(" "));