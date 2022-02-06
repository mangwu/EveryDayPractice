// 给你一个整数数组 nums 。数组中唯一元素是那些只出现 恰好一次 的元素。

// 请你返回 nums 中唯一元素的 和 。


/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
  // 使用hash表记录每一个数字个数
  // 相加只有一个的数字即可

  // 声明ans
  let ans = 0;
  // 声明hash
  const hash = new Map();
  for (const num of nums) {
    if (hash.has(num)) {
      hash.set(num, hash.get(num) + 1);
    } else {
      hash.set(num, 1);
    }
  }
  // 遍历hash
  for (const [key, value] of hash) {
    if (value == 1) {
      ans+= key;
    }
  }
  return ans;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
  // 使用hash表记录每一个数字个数
  // 相加只有一个的数字即可

  // 声明ans
  let ans = 0;
  // 声明hash
  const hash = new Map();
  for (const num of nums) {
    if (hash.has(num)) {
      const _num = hash.get(num);
      if (_num === 1) {
        ans -= num;
      }
      hash.set(num, _num + 1);
    } else {
      hash.set(num, 1);
      ans+=num;
    }
  }
};