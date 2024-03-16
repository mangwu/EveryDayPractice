// 给你一个整数数组 nums ，数组中的元素都是 正 整数。定义一个加密函数 encrypt ，encrypt(x) 将一个整数 x 中 每一个 数位都用 x 中的 最大 数位替换。比方说 encrypt(523) = 555 且 encrypt(213) = 333 。

// 请你返回数组中所有元素加密后的 和 。

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfEncryptedInt = function (nums) {
  return nums.reduce((pre, cur) => pre + encrypt(cur), 0);
};

/**
 * @description encrypt(x) 将一个整数 x 中 每一个 数位都用 x 中的 最大 数位替换
 * @param {number} num
 * @returns {number}
 */
function encrypt(num) {
  const str = num
    .toString()
    .split("")
    .map((v) => parseInt(v));
  return parseInt(Math.max.apply(null, str).toString().repeat(str.length));
}
