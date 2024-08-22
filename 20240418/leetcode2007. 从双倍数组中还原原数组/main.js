// 一个整数数组 original 可以转变成一个 双倍 数组 changed ，转变方式为将 original 中每个元素 值乘以 2 加入数组中，然后将所有元素 随机打乱 。

// 给你一个数组 changed ，如果 change 是 双倍 数组，那么请你返回 original数组，否则请返回空数组。original 的元素可以以 任意 顺序返回。

/**
 * @param {number[]} changed
 * @return {number[]}
 */
var findOriginalArray = function (changed) {
  const n = changed.length;
  if (n % 2 === 1) return [];
  changed.sort((a, b) => a - b);
  const visited = new Array(n).fill(false);
  let left = 0;
  let right = 1;
  const ans = [];
  while (left < n) {
    if (visited[left]) {
      left++;
      continue;
    }
    visited[left] = true;
    let origin = changed[left++];
    let double = 2 * origin;
    while ((right < n && changed[right] !== double) || visited[right]) {
      right++;
    }
    // 找不到下一个2倍数字
    if (right === n) return [];
    visited[right] = true;
    ans.push(origin);
  }
  return ans;
};
