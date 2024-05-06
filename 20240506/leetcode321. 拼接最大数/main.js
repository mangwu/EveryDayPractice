// 给你两个整数数组 nums1 和 nums2，它们的长度分别为 m 和 n。数组 nums1 和 nums2 分别代表两个数各位上的数字。同时你也会得到一个整数 k。

// 请你利用这两个数组中的数字中创建一个长度为 k <= m + n 的最大数，在这个必须保留来自同一数组的数字的相对顺序。

// 返回代表答案的长度为 k 的数组。

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
var maxNumber = function (nums1, nums2, k) {
  const series1 = getNumsSeries(nums1);
  const series2 = getNumsSeries(nums2);
  const m = nums1.length;
  const n = nums2.length;
  let ans = [];
  for (let i = 0; i <= Math.min(m, k); i++) {
    // i个nums1，k-i个nums2
    const s1 = series1
      .slice(0, i)
      .sort((a, b) => a - b)
      .map((v) => nums1[v]);
    const s2 = series2
      .slice(0, k - i)
      .sort((a, b) => a - b)
      .map((v) => nums2[v]);
    const curRes = mergeSeries(s1, s2);
    ans = maxSeries(curRes, ans);
  }
  return ans;
};
/**
 * @description 合并两个序列
 * @param {number[]} series1
 * @param {number[]} series2
 * @returns {number[]}
 */
function mergeSeries(series1, series2) {
  const m = series1.length;
  const n = series2.length;
  if (!m) return series2;
  if (!n) return series1;
  let i = 0;
  let j = 0;
  const ans = [];
  while (i < m || j < n) {
    const s1 = i < m ? series1[i] : -Infinity;
    const s2 = j < n ? series2[j] : -Infinity;
    if (s1 < s2) {
      ans.push(series2[j++]);
    } else if (s1 > s2) {
      ans.push(series1[i++]);
    } else if (s1 === s2) {
      // 二者相等
      let flag = true; // 默认先选择s1
      let copyi = i + 1;
      let copyj = j + 1;
      while (copyi < m && copyj < n && series1[copyi] === series2[copyj]) {
        copyi++;
        copyj++;
      }
      if (copyj === n) flag = false;
      if (copyi < m && copyj < n && series1[copyi] < series2[copyj])
        flag = false;
      if (flag) {
        ans.push(series1[i++]);
      } else {
        ans.push(series2[j++]);
      }
    }
  }
  return ans;
}
/**
 * @description
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @returns {number[]}
 */
function maxSeries(nums1, nums2) {
  const m = nums1.length;
  const n = nums2.length;
  if (m < n) return nums2;
  if (n < m) return nums1;
  for (let i = 0; i < m; i++) {
    if (nums1[i] < nums2[i]) return nums2;
    else if (nums1[i] > nums2[i]) return nums1;
  }
  return nums1;
}

/**
 * @description 获取最大序列的顺序
 * @param {number[]} nums
 * @returns {number[]}
 */
var getNumsSeries = function (nums) {
  // dfs写法
  const path = [];
  const dfs = (left, right) => {
    if (left > right) return;
    if (left === right) {
      path.push(left);
      return;
    }
    // 选择当前最大的元素
    let maxIdx = left;
    let maxNum = nums[left];
    for (let k = left + 1; k <= right; k++) {
      if (nums[k] > maxNum) {
        maxIdx = k;
        maxNum = nums[k];
      }
    }
    path.push(maxIdx);
    dfs(maxIdx + 1, right);
    dfs(left, maxIdx - 1);
  };
  dfs(0, nums.length - 1);
  return path;
};

mergeSeries([6], [9, 5, 8, 3]);
