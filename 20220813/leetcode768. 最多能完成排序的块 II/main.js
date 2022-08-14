/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-13 17:45:16                                                  *
 * @LastModifiedDate: 2022-08-14 01:28:42                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 这个问题和“最多能完成排序的块”相似，但给定数组中的元素可以重复，输入数组最大长度为2000，
// 其中的元素最大为10**8。

// arr是一个可能包含重复元素的整数数组，我们将这个数组分割成几个“块”，并将这些块分别进行排序。
// 之后再连接起来，使得连接的结果和按升序排序后的原数组相同。

// 我们最多能将数组分成多少块？
/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function (arr) {
  const n = arr.length;
  // 记录arr的位置
  const hashArr = new Map();
  for (let i = 0; i < n; i++) {
    if (hashArr.has(arr[i])) {
      const a = hashArr.get(arr[i]);
      a.push(i);
      hashArr.set(a);
    } else {
      hashArr.set(arr[i], [i]);
    }
  }
  // 记录排序后的位置
  const copy = arr.slice().sort((a, b) => a - b);
  const hash = new Map();
  for (let i = 0; i < n; i++) {
    if (hash.has(copy[i])) {
      const a = hash.get(copy[i]);
      a.add(i);
      hash.set(a);
    } else {
      hash.set(copy[i], new Set([i]));
    }
  }
  let pre = n;
  let ans = 0;
  for (let i = n - 1; i >= 0; i--) {
    // 获取在原数组中的索引位置
    const idxs = hashArr.get(copy[i]);
    if (idxs.length == 1) {
      // 不是重复的
      const k = arr.slice(idxs[0], pre).sort((a, b) => a - b);
      if (isContinuousCh(k, hash, idxs[0])) {
        ans++;
        // 跳转索引
        i = pre - k.length;
        pre = idxs[0];
      }
    } else {
      // 是重复的只需要判断第一个
      const len = idxs.length;
      const k = arr.slice(idxs[0], pre).sort((a, b) => a - b);
      if (isContinuousCh(k, hash, idxs[0])) {
        if (copy[i] !== k[k.length - 1]) {
          ans++;
          // 然后计算ans应该加的次数 是否连续
          for (let i = 1; i < len; i++) {
            if (idxs[i] - 1 == idxs[i - 1]) {
              ans++;
            } else {
              break;
            }
          }
        } else {
          if (k[k.length - 1] == k[0]) {
            ans += k.length;
          } else {
            ans++;
            const primary = arr.slice(idxs[0], pre);
            let j = k.length - 1
            while (primary[j] == copy[i]) {
              ans++;
              j--;
            }
          }
        }
        // 跳转索引
        i = pre - k.length;
        pre = idxs[0];
      }
    }
  }
  return ans;
};

// 判断nums中的数字是否在指定索引上
var isContinuousCh = (nums, hash, start) => {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    const idxs = hash.get(nums[i]);
    if (!idxs.has(start + i)) {
      return false;
    }
  }
  return true;
};
