// 有一些机器人分布在一条无限长的数轴上，他们初始坐标用一个下标从 0 开始的整数数组 nums 表示。当你给机器人下达命令时，它们以每秒钟一单位的速度开始移动。

// 给你一个字符串 s ，每个字符按顺序分别表示每个机器人移动的方向。'L' 表示机器人往左或者数轴的负方向移动，'R' 表示机器人往右或者数轴的正方向移动。

// 当两个机器人相撞时，它们开始沿着原本相反的方向移动。

// 请你返回指令重复执行 d 秒后，所有机器人之间两两距离之和。由于答案可能很大，请你将答案对 109 + 7 取余后返回。

// 注意：

// 对于坐标在 i 和 j 的两个机器人，(i,j) 和 (j,i) 视为相同的坐标对。也就是说，机器人视为无差别的。
// 当机器人相撞时，它们 立即改变 它们的前进时间，这个过程不消耗任何时间。
// 当两个机器人在同一时刻占据相同的位置时，就会相撞。

// 例如，如果一个机器人位于位置 0 并往右移动，另一个机器人位于位置 2 并往左移动，下一秒，它们都将占据位置 1，并改变方向。再下一秒钟后，第一个机器人位于位置 0 并往左移动，而另一个机器人位于位置 2 并往右移动。

// 例如，如果一个机器人位于位置 0 并往右移动，另一个机器人位于位置 1 并往左移动，下一秒，第一个机器人位于位置 0 并往左行驶，而另一个机器人位于位置 1 并往右移动。

/**
 * @param {number[]} nums
 * @param {string} s
 * @param {number} d
 * @return {number}
 */
var sumDistance = function (nums, s, d) {
  // 最左边和最右边的机器人的距离就是最终答案
  // 初始到解决，最左边机器人和最右边机器人始终不变
  const n = nums.length;
  const idxes = new Array(n).fill(0).map((_v, i) => i);
  idxes.sort((a, b) => nums[a] - nums[b]);
  nums.sort((a, b) => a - b);
  const directs = new Array(n).fill(0).map((_v, i) => s[idxes[i]]);
  // 4种情况
  if (directs[0] === "L") {
    if (directs[n - 1] === "R") {
      // L ... R的情况，无需考虑中间的机器人
      return nums[n - 1] - nums[0] + 2 * d;
    } else {
      // L ... L的情况，最后一个机器人需要向前找到第一个R
      let lastR = directs.lastIndexOf("R");
      if (lastR === -1) return nums[n - 1] - nums[0]; // 全部左移，相对移动
      return (
        nums[n - 1] -
        nums[0] +
        // 0是未碰撞情况，后面的是碰撞的情况
        Math.max(0, 2 * d - (nums[n - 1] - nums[lastR]))
      );
    }
  } else {
    if (directs[n - 1] === "R") {
      // R ... R的情况，第一个机器人需要向后找到第一个L
      let firstL = directs.indexOf("L");
      if (firstL === -1) return nums[n - 1] - nums[0]; // 全部右移，相对移动
      return (
        nums[n - 1] -
        nums[0] +
        // 0是未碰撞情况，后面的是碰撞的情况
        Math.max(0, 2 * d - (nums[firstL] - nums[0]))
      );
    } else {
      // R ... L的情况，最复杂的情况需要找到各自的lastR和firstL
      let firstL = directs.indexOf("L"); // 不可能为-1
      let lastR = directs.lastIndexOf("R"); // 不可能为-1
      if (firstL < lastR) {
        // 各自计算离初始的位置的距离
        const firstToL = nums[firstL] - nums[0];
        let firstDis = d < firstToL / 2 ? -d : d - firstToL;
        const lastToR = nums[n - 1] - nums[lastR];
        let lastDis = d < lastToR / 2 ? -d : d - lastToR;
        return nums[n - 1] - nums[0] + firstDis + lastDis;
      } else {
        // R...RL...L的情况，前面有m个R后面有k个L
        // 二者之间的距离和中间的RL有关系
        const firstToLast = nums[lastR] - nums[firstL];
        if (d < firstToLast / 2) return nums[n - 1] - nums[0] - 2 * d;
        // 经过firstToLast / 2的时间后，可以按照firstL < lastR的情况进行计算了
        d -= firstToLast / 2;
        const firstToL = nums[firstL] - nums[0];
        let firstDis = d < firstToL / 2 ? -d : d - firstToL;
        const lastToR = nums[n - 1] - nums[lastR];
        let lastDis = d < lastToR / 2 ? -d : d - lastToR;
        return nums[n - 1] - nums[0] - firstToLast + firstDis + lastDis;
      }
    }
  }
};

/**
 * @param {number[]} nums
 * @param {string} s
 * @param {number} d
 * @return {number}
 */
var sumDistance = function (nums, s, d) {
  // 上面理解错误，所有机器人指得是任意两两机器人之间的距离之和
  // 也就是说不仅包括首位机器人，还包括中间的任意机器人距离
  const n = nums.length;
  // 当两个机器人相撞时，它们会沿着原本相反的方向移动。
  // 由于机器人之间并没有任何区别，相撞可以看做是穿透，
  // 原本左边的机器人相撞后交换为右边的机器人，
  // 原本右边的机器人相撞后交换为左边的机器人，这样一来，
  // 两个机器人仿佛没有相撞过。因此，我们可以无视相撞，
  // 独立计算每个机器人 d 秒后所处的位置。
  const endPos = [];
  for (let i = 0; i < n; i++) {
    let add = s[i] === "L" ? -d : d;
    endPos.push(nums[i] + add);
  }
  const MODS = Math.pow(10, 9) + 7;
  endPos.sort((a, b) => a - b);
  console.log(endPos);
  let ans = 0;
  for (let i = 1; i < n; i++) {
    ans += ((((endPos[i] - endPos[i - 1]) * i) % MODS) * (n - i)) % MODS;
    ans %= MODS;
  }
  return ans;
};
