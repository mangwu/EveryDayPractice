// 给你一个非负整数 num ，请你返回将它变成 0 所需要的步数。 如果当前数字是偶数，你需要把它除以 2 ；否则，减去 1 。



/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
	let ans = 0;
	while(num !== 0) {
		if (num % 2 === 0) {
			num = num / 2;
		} else {
			num--;
		}
		ans++;
	}
	return ans;
};

/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps2 = function(num) {
	// 以二进制看问题
	// 实际上每次将偶数除以2相当于当末尾为0时，数字右移一位
	// 而奇数时减去一相当于某位为1时，数字减去1，变为偶数
	// 所以总次数等于数字最高位位置数和二机制为1的个数
    if(num == 0)
      return 0
    let n = num
    n = n - ((n >>> 1) & 0x55555555)
    n = (n & 0x33333333) + ((n >>> 2) & 0x33333333)
    n = (n + (n >>> 4)) & 0x0F0F0F0F
    return ((n * 0x01010101) >>> 24) + Math.floor(Math.log2(num))
};