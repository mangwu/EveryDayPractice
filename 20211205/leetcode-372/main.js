// 你的任务是计算 ab 对 1337 取模，a 是一个正整数，b 是一个非常大的正整数且会以数组形式给出。
// 求 a^n mode 1337 的结果 其中 b是构成n的数组
const MOD = BigInt(1337);
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const pow = (x, n) => {
  let res = BigInt(1);
  while (n !== 0) {
    if (n % 2 !== 0) {
        res = res * BigInt(x) % MOD;
    }
    x = x * x % MOD;
    n = Math.floor(n / 2);
  }
  return res;
}

/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
var superPow = function(a, b) {
	// 取模运算的分配律 (a * b) mod m = [(a mod m) * (b mod m)] mod m;
	// b是数组，索引表示基数，如2，表示 10^2位数
	// n 是 b数组构成的幂，i为索引，m为b的长度 则 n = Sum(10^(m - 1 - i) * b[i])
	// 则 a ^ n = a^(Sum(10^(m - 1 - i) * b[i])) = a^(Sum(10^(m - 1 - i) ^(b[i]));
	// 由于a^(x + y) = a ^x * a^y 所以 可以将每一个分开利用取模运算的分配律分开计算mod，最后相乘再mod
	// 从数组b的最后一位（即个位开始算起）
	let ans = BigInt(1);
	// 遍历b数组
	for (let i = b.length - 1; i >= 0; i--) {
		// 计算出一个幂
		// pow里面进行了mod操作 ，pow(a, b[i]) 计算了 a^b % mod的值
		ans = ans * pow(BigInt(a), b[i]) % MOD;
		// 每次都提前将 数组b的
		a = pow(BigInt(a), 10);
	}
	return ans;
};
console.log(superPow(2, [1, 0]));