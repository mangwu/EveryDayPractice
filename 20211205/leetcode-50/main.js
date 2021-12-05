// 实现 pow(x, n) ，即计算 x 的 n 次幂函数（即，xn）。
// 查看 https://www.notion.so/mangwu/166a347076f94a97a93957224a48dd40

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
	// 递归加快速幂
	var quickMul = function(x, n) {
		if (n == 0) {
			return 1.0;
		}
		y = quickMul(x, Math.floor(n / 2));
		return n % 2 ? y * y  * x : y * y;
	};
	if (n < 0) {
		n = 0 - n;
		return 1 / quickMul(x, n);
	}
	return quickMul(x, n);
};
console.log(myPow(2, 8));
console.log(myPow(2, -2));
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow2 = function(x, n) {
	// 迭代加快速幂
	var quickMul = function(x, n) {
		var x_c = x; // 初始贡献
		var ans = 1;
		while(n > 0) {
			if (n % 2 === 1) {
				ans *= x_c
			}
			x_c *= x_c;
			// 舍弃最低位
			n = Math.floor(n / 2);
		}
		return ans;
	}
	return n >= 0 ? quickMul(x, n) : (1 / quickMul(x, -n));
};
console.log(myPow2(2, 8));
console.log(myPow2(2, -2));