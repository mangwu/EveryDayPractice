// 给你一个 正 整数 n 。

// 用 even 表示在 n 的二进制形式（下标从 0 开始）中值为 1 的偶数下标的个数。

// 用 odd 表示在 n 的二进制形式（下标从 0 开始）中值为 1 的奇数下标的个数。

// 返回整数数组 answer ，其中 answer = [even, odd] 。

/**
 * @param {number} n
 * @return {number[]}
 */
var evenOddBit = function (n) {
  const binary = n.toString(2).split("").reverse();
  let odd = 0; // 奇数
  let even = 0; // 偶数
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === "1") {
      odd += i % 2;
      even += (i + 1) % 2;
    }
  }
  return [even, odd];
};
