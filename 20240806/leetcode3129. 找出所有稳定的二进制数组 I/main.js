// 给你 3 个正整数 zero ，one 和 limit 。

// 一个
// 二进制数组
//  arr 如果满足以下条件，那么我们称它是 稳定的 ：

// 0 在 arr 中出现次数 恰好 为 zero 。
// 1 在 arr 中出现次数 恰好 为 one 。
// arr 中每个长度超过 limit 的
// 子数组
//  都 同时 包含 0 和 1 。
// 请你返回 稳定 二进制数组的 总 数目。

// 由于答案可能很大，将它对 109 + 7 取余 后返回。
const mod = 10 ** 9 + 7;
/**
 * @param {number} zero
 * @param {number} one
 * @param {number} limit
 * @return {number}
 */
var numberOfStableArrays = function (zero, one, limit) {
  const n = zero + one;
  // 不考虑LIMIT，那么总的排列方式有C^zero_n次
  
};
