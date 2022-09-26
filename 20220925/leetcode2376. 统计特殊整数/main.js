/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-09-25 19:08:28                                                  *
 * @LastModifiedDate: 2022-09-26 14:36:49                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 如果一个正整数每一个数位都是 互不相同 的，我们称它是 特殊整数 。

// 给你一个 正 整数 n ，请你返回区间 [1, n] 之间特殊整数的数目。

/**
 * @param {number} n
 * @return {number}
 */
var countSpecialNumbers = function (n) {
  const str = n.toString();
  const dp = new Array(str.length).fill(0).map((v) => new Array(1024).fill(-1));
  const dfs = (i, mask, isLimit, isNum) => {
    // 找到一个特殊数,，如果前面都是0，可以直接返回0，否则就返回1
    if (i == str.length) return isNum ? 1 : 0;
    // 记忆化，如果未被限制且前面都是0，可以直接方法
    if (!isLimit && isNum && dp[i][mask] >= 0) return dp[i][mask];
    let res = 0;
    if (!isNum) res = dfs(i + 1, mask, false, false); // 跳过当前数
    for (let d = isNum ? 0 : 1, up = isLimit ? str[i] - "0" : 9; d <= up; d++) {
      if (((mask >> d) & 1) == 0) {
        // d不在mask中，可选
        res += dfs(i + 1, mask | (1 << d), isLimit && d == up, true);
      }
    }
    if (!isLimit && isNum) dp[i][mask] = res;
    return res;
  };
  return dfs(0, 0, true, false);
};

/**
 * @param {number} n
 * @return {number}
 */
var countSpecialNumbers = function (n) {
  // 数字子字符串，从第一位开始填写
  const str = n.toString();
  const dp = new Array(str.length)
    .fill(0)
    .map((v, i) => new Array(1024).fill(-1));
  // i表示正在填写的位置，mask表示已经使用的数字
  // isLimit表示前面填的数字是否都是n所表示的限制值（是否需要限制当前值的上位）
  // isNum表示前面是否填了数字（false表示前面都跳过了，相当于填的都是0）
  const dfs = (i, mask, isLimit, isNum) => {
    // 退出条件
    if (i == str.length) {
      // 如前面都跳过应该返回0
      return isNum ? 1 : 0;
    }
    // 获取记忆化的结果，不用记忆化isLimit为true， isNum为false的情况
    // 因为它们的情况只会执行一次
    if (!isLimit && isNum && dp[i][mask] >= 0) return dp[i][mask];
    // 计算结果
    let res = 0;
    // 单独计算此次跳过的情况(此次跳过，后面的数就没有限制，且下一次前面都跳过了)
    if (!isNum) res = dfs(i + 1, mask, false, false);
    // 计算本次不跳过的情况，如果前面填了数字就可以从0开始，否则从1开始
    let start = isNum ? 0 : 1;
    // 结束的数字受到isLimit的限制
    let end = isLimit ? str[i] - "0" : 9;
    for (let d = start; d <= end; d++) {
      // 判断d是否不在mask中
      if (((mask >> d) & 1) == 0) {
        // isLimit只有在已经限制且是最后一位的情况下才有效
        // isNum一定是true，因为本次已填数字
        res += dfs(i + 1, mask | (1 << d), isLimit & (d == end), true);
      }
    }
    // 值记录没有限制，且填了数字的情况
    if (!isLimit && isNum) dp[i][mask] = res;
    return res;
  };
  return dfs(0, 0, true, false);
};

/**
 * @param {number} n
 * @return {number}
 */
var digitsDPTemplate = function (n) {
  // 将n转化为字符串，方便数位填写和查找上下界
  const str = n.toString();
  // 定义记忆化搜索的状态保存数组，只需要考虑i和mask
  const dp = new Array(str.length).fill(0).map((v) => new Array(1024).fill(-1));
  // 定义记忆化搜索函数
  // 返回从i开始填数字，i前面已经使用过的数字集合是mask，此时能构造出的特殊整数的数目
  // isLimit 表示前面填的数字是否都是n对应位上的，如果为true，那么当前位至多为str[i]，否则至多为9
  // isNum 表示前面是否填了数字（跳过），如果为true当前位可以从0开始，如果位false，那么可以直接跳过或者从1开始填数字
  const dfs = (i, mask, isLimit, isNum) => {
    // 先判断终点 之前填过数字，那么可以返回1，表示已经构造出了一个整数，如果没有，全跳过的情况应该返回0，因为0不符号条件
    if (i == str.length) {
      return isNum ? 1 : 0;
    }
    // 然后从dp中查找当前位在mask的情况之前是否已经计算过
    // 如果isLimit为true，表示前面都是限制了的，限制的状况不需要记忆化，因为只会执行一次
    // 同理，在isNum为false的情况下，前面都跳过了，跳过的状况也不需要记忆化，因为只会执行一次
    if (!isLimit && isNum && dp[i][mask] >= 0) return dp[i][mask];
    // 当前情况可构造数字的个数，初始为0
    let res = 0;
    // 考虑当前选择位是否可以跳过
    // 因为跳过了，所以mask没有变化，isLimit肯定是false，跳过那么数字选择没有限制，且前面都没有选，当前也不选，那么下一轮的isNum也是false
    if (!isNum) res = dfs(i + 1, mask, false, false);
    // 可选择数的上届判断，和isLimit有关
    let up = isLimit ? str[i] - "0" : 9;
    // 可选择数的下届判断，和isNum有关, isNum为false，表示前面没选择过，从1开始，否则从0开始
    let start = isNum ? 0 : 1;
    // 进行当前位的数字选择
    for (let d = start; d <= up; d++) {
      // 判断mask中是否包含选择数i（根据不同的题目当前数选择的条件不同）
      if (((mask >> d) & 1) == 0) {
        // i没有被选择过，满足条件
        // 因为当前是选了数的，所以isNum必为true
        // 判断下一轮数字是否受限制需要满足两个条件，前面选择的数字都受限制即isLimit为true,当前选择的数字就是受限制的上届即i == up
        res += dfs(i + 1, mask | (1 << d), isLimit && d == up, true);
      }
    }
    // 将当前结果记录，方便下次直接返回，不用重新计算
    // 不用对前面限制了或前面没选择的情况进行记忆，因为这两种情况只会计算一遍
    if (!isLimit && isNum) dp[i][mask] = res;
    return res;
  };
  // 初始时，第一个数肯定受到限制受isLimit为true，而前面没选择任何数所以isNum为false
  return dfs(0, 0, true, false);
};
