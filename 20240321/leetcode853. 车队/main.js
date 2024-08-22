// 在一条单行道上，有 n 辆车开往同一目的地。目的地是几英里以外的 target 。

// 给定两个整数数组 position 和 speed ，长度都是 n ，其中 position[i] 是第 i 辆车的位置， speed[i] 是第 i 辆车的速度(单位是英里/小时)。

// 一辆车永远不会超过前面的另一辆车，但它可以追上去，并与前车 以相同的速度 紧接着行驶。此时，我们会忽略这两辆车之间的距离，也就是说，它们被假定处于相同的位置。

// 车队 是一些由行驶在相同位置、具有相同速度的车组成的非空集合。注意，一辆车也可以是一个车队。

// 即便一辆车在目的地才赶上了一个车队，它们仍然会被视作是同一个车队。

// 返回到达目的地的 车队数量 。

/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
  const n = position.length;
  const idxes = new Array(n)
    .fill(0)
    .map((v, i) => i)
    .sort((a, b) => position[b] - position[a]);
  // 初始车队是第一个位置的元素
  let prePos = position[idxes[0]];
  let preSpeed = speed[idxes[0]];
  let ans = 1;
  for (let i = 1; i < n; i++) {
    // 判断是否能在到达终点前追赶上上一个测车队
    const [curSpeed, curPos] = [speed[idxes[i]], position[idxes[i]]];
    if (
      curSpeed > preSpeed &&
      (target - curPos) * preSpeed <= (target - prePos) * curSpeed
    ) {
      continue; // 能追上，是同一车队
    } else {
      prePos = curPos;
      preSpeed = curSpeed; // 追不上是一个新车队
      ans++;
    }
  }
  return ans;
};
