/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-02-09 10:17:08                                                  *
 * @LastModifiedDate: 2022-02-09 14:06:49                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022                                                          *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */


// 剔除数组a中存在于b中的元素
// 如 a = [1, 2, 3, 4, 5, 4] b = [4, 2, 6] 就剔除a中的2 和 4 返回剔除结果 [1, 3, 5];

function arrayDiff(a, b) {
  const ans = [];
  // 建立b的set表
  const set = new Set();
  for(const ele of b) {
    set.add(ele);
  }
  // 遍历 a
  for(const ele of a) {
    // 该元素在set b中不存在就可以入队
    if(!set.has(ele)) {
      ans.push(ele);
    }
  }
  return ans;
}