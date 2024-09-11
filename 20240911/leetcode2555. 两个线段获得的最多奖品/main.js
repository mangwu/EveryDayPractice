/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-09-11 09:29:19                                                  *
 * @LastModifiedDate: 2024-09-11 11:27:57                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 在 X轴 上有一些奖品。给你一个整数数组 prizePositions ，它按照 非递减 顺序排列，其中 prizePositions[i] 是第 i 件奖品的位置。数轴上一个位置可能会有多件奖品。再给你一个整数 k 。

// 你可以选择两个端点为整数的线段。每个线段的长度都必须是 k 。你可以获得位置在任一线段上的所有奖品（包括线段的两个端点）。注意，两个线段可能会有相交。

// 比方说 k = 2 ，你可以选择线段 [1, 3] 和 [2, 4] ，你可以获得满足 1 <= prizePositions[i] <= 3 或者 2 <= prizePositions[i] <= 4 的所有奖品 i 。
// 请你返回在选择两个最优线段的前提下，可以获得的 最多 奖品数目。

/**
 * @param {number[]} prizePositions
 * @param {number} k
 * @return {number}
 */
var maximizeWin = function (prizePositions, k) {
  // 3. 左边线段和右边线段可以不停左移或者右移，选取其中和值最大的情况
  // 4. 记录保存左边线段在持续到prizePositions[i]之前的最大值
  // 5. 倒叙遍历右线段，根据之前记录的左线段最大值进行比较
  const n = prizePositions.length;
  const arr = [];
  for (let i = 0; i < n; i++) {
    let startNum = prizePositions[i];
    let num = 0;
    while (prizePositions[i] === startNum) {
      i++;
      num++;
    }
    i--;
    arr.push([startNum, num]);
  }
  const m = arr.length;
  let leftMax = 0;
  let sum = 0;
  let left = 0;
  const leftMaxes = [];
  for (let i = 0; i < m; i++) {
    const [pos, num] = arr[i];
    sum += num;
    while (pos - arr[left][0] > k) sum -= arr[left++][1];
    leftMax = Math.max(leftMax, sum);
    leftMaxes.push(leftMax);
  }
  sum = 0;
  let right = m - 1;
  let res = leftMax;
  for (let i = m - 1; i > 0; i--) {
    const [pos, num] = arr[i];
    sum += num;
    while (arr[right][0] - pos > k) sum -= arr[right--][1];
    res = Math.max(res, sum + leftMaxes[i - 1]);
  }
  return res;
};
