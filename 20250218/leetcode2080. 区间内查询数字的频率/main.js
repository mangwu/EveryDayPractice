// 请你设计一个数据结构，它能求出给定子数组内一个给定值的 频率 。

// 子数组中一个值的 频率 指的是这个子数组中这个值的出现次数。

// 请你实现 RangeFreqQuery 类：

// RangeFreqQuery(int[] arr) 用下标从 0 开始的整数数组 arr 构造一个类的实例。
// int query(int left, int right, int value) 返回子数组 arr[left...right] 中 value 的 频率 。
// 一个 子数组 指的是数组中一段连续的元素。arr[left...right] 指的是 nums 中包含下标 left 和 right 在内 的中间一段连续元素。

/**
 * @param {number[]} arr
 */
var RangeFreqQuery = function (arr) {
  const hash = new Map();
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    const num = arr[i];
    hash.has(num) ? hash.get(num).push(i) : hash.set(num, [i]);
  }
  this.hash = hash;
};

/**
 * @param {number} left
 * @param {number} right
 * @param {number} value
 * @return {number}
 */
RangeFreqQuery.prototype.query = function (left, right, value) {
  // 可以使用二分查找
  const arr = this.hash.get(value) || [];
  if (!arr.length) return 0;
  if (arr[0] > right || arr[arr.length - 1] < left) return 0;
  // 找到大于等于left的索引
  let l = 0;
  let r = arr.length - 1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (arr[mid] >= left) {
      r = mid - 1;
    } else l = mid + 1;
  }
  let start = l;
  // 找到小于等于right的索引
  l = 0;
  r = arr.length - 1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (arr[mid] <= right) {
      l = mid + 1;
    } else r = mid - 1;
  }
  let end = r;
  return end - start + 1;
};

/**
 * Your RangeFreqQuery object will be instantiated and called as such:
 * var obj = new RangeFreqQuery(arr)
 * var param_1 = obj.query(left,right,value)
 */
