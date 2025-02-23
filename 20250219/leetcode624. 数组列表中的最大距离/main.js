// 给定 m 个数组，每个数组都已经按照升序排好序了。

// 现在你需要从两个不同的数组中选择两个整数（每个数组选一个）并且计算它们的距离。两个整数 a 和 b 之间的距离定义为它们差的绝对值 |a-b| 。

// 返回最大距离。

/**
 * @param {number[][]} arrays
 * @return {number}
 */
var maxDistance = function (arrays) {
  const n = arrays.length;
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push([arrays[i][0], i]);
    arr.push([arrays[i][arrays[i].length - 1], i]);
  }
  arr.sort((a, b) => a[0] - b[0]);
  let res = 0;
  let min = arr[0];
  for (let i = arr.length - 1; i >= 1; i--) {
    if (arr[i][1] !== min[1]) {
      res = Math.max(res, arr[i][0] - min[0]);
      break;
    }
  }
  let max = arr[arr.length - 1];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i][1] !== max[1]) {
      res = Math.max(res, max[0] - arr[i][0]);
      break;
    }
  }
  return res;
};
