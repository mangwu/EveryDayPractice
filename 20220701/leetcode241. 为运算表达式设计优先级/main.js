/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-07-01 09:05:43                                                  *
 * @LastModifiedDate: 2022-07-01 09:56:38                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个由数字和运算符组成的字符串 expression ，按不同优先级组合数字和运算符，
// 计算并返回所有可能组合的结果。你可以 按任意顺序 返回答案。

// 生成的测试用例满足其对应输出值符合 32 位整数范围，不同结果的数量不超过 104 。
// 出处。

/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function (expression) {
  // 根据符号的个数n，Ann中排列组合方式
  // 计算每种优先级的序列然后计算结果
  const nums = [];
  const ops = [];
  for (const ch of expression) {
    switch (ch) {
      case "+":
        ops.push(ch);
        break;
      case "-":
        ops.push(ch);
        break;
      case "*":
        ops.push(ch);
        break;
      default:
        nums.push(parseInt(ch));
        break;
    }
  }
  console.log(ops);
  let n = ops.length;
  if (n == 0) {
    return nums[0];
  }
  const order = [];
  const ans = [];
  const dfs = (idx) => {
    if (idx == 1) {
      order.push([idx - 1]);
      return;
    }
    dfs(idx - 1);
    const orderLen = order.length;
    for (let i = 0; i < orderLen; i++) {
      const copy = order[i].slice();
      for (let j = 0; j < idx; j++) {
        if (j == 0) {
          order[i].splice(j, 0, idx - 1);
          if (idx == n) {
            ans.push(computeResult(order[i], nums, ops));
          }
        } else {
          const same = copy.slice();
          same.splice(j, 0, idx - 1);
          order.push(same);
          if (idx == n) {
            ans.push(computeResult(same, nums, ops));
          }
        }
      }
    }
  };
  dfs(n);
  console.log(ans);
};

const computeResult = (order, nums, ops) => {
  nums = nums.slice();
  console.log(order);
  const n = order.length;
  for (let i = 0; i < n; i++) {
    let res = null;
    switch (ops[order[i]]) {
      case "+":
        res = nums[order[i]] + nums[order[i] + 1];
        break;
      case "-":
        res = nums[order[i]] - nums[order[i] + 1];
        break;
      case "*":
        res = nums[order[i]] * nums[order[i] + 1];
        break;
    }
    if (i == n - 1) {
      return res;
    }
    nums[order[i]] = res;
    nums[order[i] + 1] = res;
  }
};

// "2*3-4*5"

// 6 6 4 5
// 6 6 20 20
// 6 -14 -14 20
diffWaysToCompute("2*3-4*5");


// 2  3  4  5
// -34   -17 -17 20 


// 2 3 4 5
// 