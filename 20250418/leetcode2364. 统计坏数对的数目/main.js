/**
 * @param {number[]} nums
 * @return {number}
 */
var countBadPairs = function (nums) {
  let n = nums.length;
  let totalPairs = (n * (n - 1)) / 2; // 总的数对数量
  let goodPairs = 0;
  let map = new Map();

  for (let i = 0; i < n; i++) {
    let diff = nums[i] - i;
    if (map.has(diff)) {
      goodPairs += map.get(diff);
      map.set(diff, map.get(diff) + 1);
    } else {
      map.set(diff, 1);
    }
  }

  return totalPairs - goodPairs; // 坏数对 = 总数对 - 好数对
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var countBadPairs = function (nums) {
  // 好数对：nums[j] - nums[i] == j - i  => nums[j] - j == nums[i] - i
  const n = nums.length;
  // i < j的总对数为 n - 1 + n - 2 + ... + 1 = n * (n - 1) / 2
  const totalPairs = (n * (n - 1)) / 2;
  let goodPairs = 0; // 计算好数对的个数
  const hash = new Map(); // 遍历j时，记录前面i的值的个数
  for (let j = 0; j < n; j++) {
    if (hash.has(nums[j] - j)) goodPairs += hash.get(nums[j] - j);
    // 记录i的值的个数
    hash.set(nums[j] - j, (hash.get(nums[j] - j) || 0) + 1);
  }
  return totalPairs - goodPairs; // 坏数对 = 总数对 - 好数对
};
