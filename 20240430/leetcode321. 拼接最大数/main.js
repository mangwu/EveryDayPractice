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
  const n1 = nums1.length;
  const n2 = nums2.length;
  const numSeries1 = generateMaxNumSeries(nums1);
  const numSeries2 = generateMaxNumSeries(nums2);
  let ans = [];
  for (let i = 0; i <= k; i++) {
    // nums1中选择i个，nums2中选择k - i 个
    if (i > n1 || k - i > n2) continue;
    // 从nums1中选择i个
    const series1 = numSeries1
      .slice(0, i)
      .sort((a, b) => a - b)
      .map((v) => nums1[v]);
    // 从nums2中选k - i个
    const series2 = numSeries2
      .slice(0, k - i)
      .sort((a, b) => a - b)
      .map((v) => nums2[v]);
    // 将二则结合到一起的最大排列
    // console.log(series1, series2);
    const curRes = maxSeriesCombine(series1, series2);
    ans = compareMaxSeries(ans, curRes);
  }
  return ans;
};
/**
 * @description 两个数组保持相对位置结合在一起的最大序列
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @returns {number[]}
 */
function maxSeriesCombine(nums1, nums2) {
  // 这里未考虑相等的情况
  const curRes = [];
  const n1 = nums1.length;
  const n2 = nums2.length;
  let i = 0;
  let j = 0;
  while (i < n1 || j < n2) {
    if (i === n1) {
      for (; j < n2; j++) curRes.push(nums2[j]);
      break;
    }
    if (j === n2) {
      for (; i < n1; i++) curRes.push(nums1[i]);
      break;
    }
    if (nums1[i] > nums2[j]) curRes.push(nums1[i++]);
    else if (nums1[i] < nums2[j]) curRes.push(nums2[j++]);
    else {
      // 二者相等的情况
      let copyi = i;
      let copyj = j;
      while (copyi < n1 && copyj < n2 && nums1[copyi] === nums2[copyj]) {
        copyi++;
        copyj++;
      }
      // flag为true表示优先处理nums1，否则优先处理nums2
      let flag = true;
      if (copyi < n1 && copyj < n2) {
        if (nums1[copyi] < nums2[copyj]) flag = false;
      } else if (copyi === n1) flag = false;
      if (flag) {
        curRes.push(nums1[i++]);
      } else curRes.push(nums2[j++]);
    }
  }
  return curRes;
}
// maxSeriesCombine([2, 1, 0, 2], [1, 0, 2, 0]);

/**
 * @description 一个数组在保持相对位置时，选择i个的最大序列的选择顺序
 * @param {number[]} nums
 * @returns {number[]}
 */
function generateMaxNumSeries(nums) {
  const n = nums.length;
  const idx = new Array(n)
    .fill(0)
    .map((_, i) => i)
    .sort((a, b) => (nums[b] === nums[a] ? a - b : nums[b] - nums[a]));
  let select = [idx[0]];
  let visited = [];
  visited[0] = true;
  let left = 0;
  let right = 1;
  let stack = [idx[0]];
  let target = stack[stack.length - 1];
  while (left < n) {
    // 找到下一个最大的值，且在target后
    while (right < n) {
      if (!visited[right] && idx[right] > target) {
        visited[right] = true;
        stack.push(idx[right]);
        select.push(idx[right]);
        target = idx[right];
        right = left;
      }
      right++;
    }
    while (visited[left]) left++;
    if (right === n) {
      // 已经不存在下一个在target后的最大值，就舍弃当前target，重新开始选择
      right = left;
      stack.pop();
      if (stack.length) {
        target = stack[stack.length - 1];
      } else {
        target = idx[left];
        stack.push(idx[left]);
        select.push(idx[left++]);
      }
    }
  }
  return select;
}
/**
 * @description 比较两个数组序列的大小，返回大的那一个
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @returns {number[]}
 */
function compareMaxSeries(nums1, nums2) {
  if (!nums1.length) return nums2;
  if (!nums2.length) return nums1;
  const n = nums1.length;
  for (let i = 0; i < n; i++) {
    if (nums1[i] > nums2[i]) return nums1;
    if (nums1[i] < nums2[i]) return nums2;
  }
  return nums1;
}

/**
 * @description 一个数组在保持相对位置时，选择i个的最大序列的选择顺序
 * @param {number[]} nums
 * @returns {number[]}
 */
function generateMaxNumSeries(nums) {
  const ans = [];
  const dfs = (left, right) => {
    if (left > right) return;
    if (left === right) {
      ans.push(left);
      return;
    }
    // 找到[left, right]中的最大元素
    let maxNum = nums[left];
    let maxIdx = left;
    for (let i = left + 1; i <= right; i++) {
      if (nums[i] > maxNum) {
        maxIdx = i;
        maxNum = nums[i];
      }
    }
    ans.push(maxIdx);
    dfs(maxIdx + 1, right);
    dfs(left, maxIdx - 1);
  };
  dfs(0, nums.length - 1);
  return ans;
}
/**
 * @description 比较两个数组序列的大小，返回大的那一个
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @returns {number[]}
 */
function compareMaxSeries(nums1, nums2) {
  if (!nums1.length) return nums2;
  if (!nums2.length) return nums1;
  const n = nums1.length;
  for (let i = 0; i < n; i++) {
    if (nums1[i] > nums2[i]) return nums1;
    if (nums1[i] < nums2[i]) return nums2;
  }
  return nums1;
}
/**
 * @description 两个数组保持相对位置结合在一起的最大序列
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @returns {number[]}
 */
function maxSeriesCombine(nums1, nums2) {
  // 这里未考虑相等的情况
  const curRes = [];
  const n1 = nums1.length;
  const n2 = nums2.length;
  let i = 0;
  let j = 0;
  while (i < n1 || j < n2) {
    if (i === n1) {
      for (; j < n2; j++) curRes.push(nums2[j]);
      break;
    }
    if (j === n2) {
      for (; i < n1; i++) curRes.push(nums1[i]);
      break;
    }
    if (nums1[i] > nums2[j]) curRes.push(nums1[i++]);
    else if (nums1[i] < nums2[j]) curRes.push(nums2[j++]);
    else {
      // 二者相等的情况
      let copyi = i;
      let copyj = j;
      while (copyi < n1 && copyj < n2 && nums1[copyi] === nums2[copyj]) {
        copyi++;
        copyj++;
      }
      // flag为true表示优先处理nums1，否则优先处理nums2
      let flag = true;
      if (copyi < n1 && copyj < n2) {
        if (nums1[copyi] < nums2[copyj]) flag = false;
      } else if (copyi === n1) flag = false;
      if (flag) {
        curRes.push(nums1[i++]);
      } else curRes.push(nums2[j++]);
    }
  }
  return curRes;
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
var maxNumber = function (nums1, nums2, k) {
  const n1 = nums1.length;
  const n2 = nums2.length;
  const numSeries1 = generateMaxNumSeries(nums1);
  const numSeries2 = generateMaxNumSeries(nums2);
  let ans = [];
  for (let i = 0; i <= k; i++) {
    // nums1中选择i个，nums2中选择k - i 个
    if (i > n1 || k - i > n2) continue;
    // 从nums1中选择i个
    const series1 = numSeries1
      .slice(0, i)
      .sort((a, b) => a - b)
      .map((v) => nums1[v]);
    // 从nums2中选k - i个
    const series2 = numSeries2
      .slice(0, k - i)
      .sort((a, b) => a - b)
      .map((v) => nums2[v]);
    // 将二则结合到一起的最大排列
    // console.log(series1, series2);
    const curRes = maxSeriesCombine(series1, series2);
    ans = compareMaxSeries(ans, curRes);
  }
  return ans;
};

// 使用单调栈生成指定长度的序列
var MaxSubsequence = function (nums, k) {
  const length = nums.length;
  const stack = new Array(k).fill(0);
  let top = -1;
  let remain = length - k;
  for (let i = 0; i < length; i++) {
    const num = nums[i];
    while (top >= 0 && stack[top] < num && remain > 0) {
      top--;
      remain--;
    }
    if (top < k - 1) {
      stack[++top] = num;
    } else {
      remain--;
    }
    console.log("当前元素：", num);
    console.log("当前栈：", stack);
    console.log("当前栈顶：", stack[top], top);
    console.log("剩余序列长度：", remain);
    console.log("----------------");
  }
  return stack;
};

MaxSubsequence([2, 1, 4, 5, 7, 3, 6, 7], 5);
