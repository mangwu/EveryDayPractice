// n 位格雷码序列 是一个由 2^n 个整数组成的序列，其中：
// 每个整数都在范围 [0, 2^n - 1] 内（含 0 和 2^n - 1）
// 第一个整数是 0
// 一个整数在序列中出现 不超过一次
// 每对 相邻 整数的二进制表示 恰好一位不同 ，且
// 第一个 和 最后一个 整数的二进制表示 恰好一位不同
// 给你一个整数 n ，返回任一有效的 n 位格雷码序列 。


/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
  if (n === 1) {
  	return [0, 1];
  } else {
  	const ngray = grayCode(n - 1);
  	const len = ngray.length;
  	for (let i = len - 1; i >= 0; i--) {
  		let newV = ngray[i] + Math.pow(2, n-1);
  		ngray.push(newV);
  	}
  	return ngray;
  }
};
console.log(grayCode(16))