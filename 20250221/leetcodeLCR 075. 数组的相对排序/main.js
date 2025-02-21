// 给定两个数组，arr1 和 arr2，

// arr2 中的元素各不相同
// arr2 中的每个元素都出现在 arr1 中
// 对 arr1 中的元素进行排序，使 arr1 中项的相对顺序和 arr2 中的相对顺序相同。未在 arr2 中出现过的元素需要按照升序放在 arr1 的末尾。

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  const hash = new Map();
  const n = arr2.length;
  for (let i = 0; i < n; i++) hash.set(arr2[i], i);
  const ans = [];
  const rest = [];
  for (const num of arr1) {
    const idx = hash.get(num);
    if (idx === undefined) {
      rest.push(num);
      continue;
    } else {
      ans.push(num);
    }
  }
  ans.sort((a, b) => hash.get(a) - hash.get(b));
  rest.sort((a, b) => a - b);
  ans.push(...rest);
  return ans;
};
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  const hash = new Map();
  const n = arr2.length;
  for (let i = 0; i < n; i++) hash.set(arr2[i], i);
  arr1.sort((a, b) => {
    const aIdx = hash.get(a);
    const bIdx = hash.get(b);
    if (aIdx === undefined && bIdx === undefined) return a - b;
    if (aIdx === undefined) return 1;
    if (bIdx === undefined) return -1;
    return aIdx - bIdx;
  });
  return arr1;
};

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  const max = Math.max.apply(null, arr1) + 1;
  const nums = new Array(max).fill(0);
  for (const num of arr1) nums[num]++;
  const ans = [];
  for (const num of arr2) {
    if (nums[num]) {
      ans.push(...new Array(nums[num]).fill(num));
      nums[num] = 0;
    }
  }
  for (let i = 0; i <= max; i++) {
    if (nums[i]) {
      ans.push(...new Array(nums[i]).fill(i));
    }
  }
  return ans;
};
