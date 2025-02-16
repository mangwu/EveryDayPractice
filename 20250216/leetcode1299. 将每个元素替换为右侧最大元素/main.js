// 给你一个数组 arr ，请你将每个元素用它右边最大的元素替换，如果是最后一个元素，用 -1 替换。

// 完成所有替换操作后，请你返回这个数组。

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  let maxNum = -1;
  const n = arr.length;
  for (let i = n - 1; i >= 0; i--) {
    let temp = arr[i];
    arr[i] = maxNum;
    maxNum = Math.max(maxNum, temp);
  }
  return arr;
};
