// 你有一辆货运卡车，你需要用这一辆车把一些箱子从仓库运送到码头。这辆卡车每次运输有 箱子数目的限制 和 总重量的限制 。

// 给你一个箱子数组 boxes 和三个整数 portsCount, maxBoxes 和 maxWeight ，其中 boxes[i] = [ports​​i​, weighti] 。

// ports​​i 表示第 i 个箱子需要送达的码头， weightsi 是第 i 个箱子的重量。
// portsCount 是码头的数目。
// maxBoxes 和 maxWeight 分别是卡车每趟运输箱子数目和重量的限制。
// 箱子需要按照 数组顺序 运输，同时每次运输需要遵循以下步骤：

// 卡车从 boxes 队列中按顺序取出若干个箱子，但不能违反 maxBoxes 和 maxWeight 限制。
// 对于在卡车上的箱子，我们需要 按顺序 处理它们，卡车会通过 一趟行程 将最前面的箱子送到目的地码头并卸货。如果卡车已经在对应的码头，那么不需要 额外行程 ，箱子也会立马被卸货。
// 卡车上所有箱子都被卸货后，卡车需要 一趟行程 回到仓库，从箱子队列里再取出一些箱子。
// 卡车在将所有箱子运输并卸货后，最后必须回到仓库。

// 请你返回将所有箱子送到相应码头的 最少行程 次数。

/**
 * @param {number[][]} boxes
 * @param {number} portsCount
 * @param {number} maxBoxes
 * @param {number} maxWeight
 * @return {number}
 */
var boxDelivering = function (boxes, portsCount, maxBoxes, maxWeight) {
  // 选择的问题：假设当前要运输从boxes[i]开始的箱子，
  // 那么可以根据maxBoxes和maxWeight得到本次最多包含的boxes[j]处的箱子
  // 因为需要按顺序运货，可以在[i,j]区间选取一个[i,k]来执行本次运货
  // 使用暴力动态规划：
  const n = boxes.length;
  const dp = new Array(n).fill(Infinity);
  dp[0] = 2;
  for (let i = 1; i < n; i++) {
    let curBox = 0;
    let curWeight = 0;
    let curTrip = 2; // 行程一来一回至少两趟
    for (let j = i; j >= 0; j--) {
      // [j, i]区间作为整体运货
      curBox++;
      curWeight += boxes[j][1];
      if (curBox > maxBoxes || curWeight > maxWeight) break; // 超出限制
      // 根据码头变化增加行程
      if (j !== i && boxes[j][0] !== boxes[j + 1][0]) {
        curTrip++;
      }
      const curDp = curTrip + (j - 1 >= 0 ? dp[j - 1] : 0);
      dp[i] = Math.min(dp[i], curDp);
    }
  }
  console.log(dp);
  return dp[n - 1];
};
boxDelivering(
  [
    [1, 4],
    [1, 2],
    [2, 1],
    [2, 1],
    [3, 2],
    [3, 4],
    [1, 5],
    [1, 2],
    [2, 3],
    [2, 4],
    [3, 1],
  ],
  3,
  6,
  7
);

// 上述动态规划的解答答案是没问题的，但是会超时
// 超时的原因在于，当maxBoxes和maxWeight很大时，不会超出限制，那么实际时间复杂度就是O(n^2)
//
// [[1,2],[2,1],[2,2],[1,1],[1,2]]  3 100
// 如何快速的找出curDp的最小值就成为了关键
// 也就是说，要找到curTrip + dp[k]的最小值
// 这里就要用到单调队列了

class Dqueue {
  constructor() {
    this.items = {};
    this.lowest = 0;
    this.highest = 1;
  }
  size() {
    return this.highest - this.lowest - 1;
  }
  isEmpty() {
    return this.size() === 0;
  }
  peekFront() {
    if (this.isEmpty()) return undefined;
    return this.items[this.lowest + 1];
  }
  peekBack() {
    if (this.isEmpty()) return undefined;
    return this.items[this.highest - 1];
  }
  enqueueFront(value) {
    if (value == null) return false;
    this.items[this.lowest--] = value;
    return true;
  }
  enqueueBack(value) {
    if (value == null) return false;
    this.items[this.highest++] = value;
    return true;
  }
  dequeueFront() {
    if (this.isEmpty()) return undefined;
    const res = this.items[++this.lowest];
    delete this.items[this.lowest];
    return res;
  }
  dequeueBack() {
    if (this.isEmpty()) return undefined;
    const res = this.items[--this.highest];
    delete this.items[this.highest];
    return res;
  }
}
/**
 * @param {number[][]} boxes
 * @param {number} portsCount
 * @param {number} maxBoxes
 * @param {number} maxWeight
 * @return {number}
 */
var boxDelivering = function (boxes, portsCount, maxBoxes, maxWeight) {
  const n = boxes.length;
  const dp = new Array(n).fill(Infinity);
  dp[0] = 2;
  const dq = new Dqueue();
  dq.enqueueBack(-1);
  dq.enqueueBack(0);
  // 可以通过码头变化得出任意区间[i,j]内的行程数
  let pre = 1;
  const tripsPreffix = new Array(n + 1).fill(0).map((_v, i) => {
    if (i === 0) return [0, 0];
    if (i === 1) return [1, 0];
    if (boxes[i - 1][0] !== boxes[i - 2][0]) pre++;
    return [pre, 0];
  });
  let diff = 1;
  for (let i = n; i > 0; i--) {
    if (i === n) {
      tripsPreffix[i][1] = tripsPreffix[n][0];
      continue;
    }
    if (i === n - 1) {
      tripsPreffix[i][1] = tripsPreffix[n][0] - diff;
      continue;
    }
    if (boxes[i + 1][0] !== boxes[i][0]) diff++;
    tripsPreffix[i][1] = tripsPreffix[n][0] - diff;
  }
  // 要计算区间[i, j]之间（包括i，j）的行程次数，
  // 可以通过tripsPreffix[j+1][0] - tripsPreffix[i][1] + 1 进行计算
  let boxSum = 1;
  let weightSum = boxes[0][1];
  let left = 0; // 最左边的
  for (let i = 1; i < n; i++) {
    boxSum++;
    weightSum += boxes[i][1];
    while (left < n && (boxSum > maxBoxes || weightSum > maxWeight)) {
      boxSum--;
      weightSum -= boxes[left++][1];
    }
    // 出队不符合条件的元素
    while (!dq.isEmpty() && dq.peekFront() < left - 1) {
      // 可以组合的区间是[left, i]，所以dp[left-1]是可以的
      dq.dequeueFront();
    }
    // 计算得出dp[i]
    // 默认当前箱子暂时作为单个进行搬运
    dp[i] = dp[i - 1] + 2;
    if (!dq.isEmpty()) {
      // 可以不只单个进行搬运
      const minIdx = dq.peekFront();
      // [minIdx + 1, i]
      dp[i] = Math.min(
        dp[i],
        (minIdx >= 0 ? dp[minIdx] : 0) +
          tripsPreffix[i + 1][0] -
          tripsPreffix[minIdx + 1][1] +
          1
      );
    }
    // 递增单调队列入队
    while (
      !dq.isEmpty() &&
      dp[i] + tripsPreffix[i + 1][0] <=
        dp[dq.peekBack()] + tripsPreffix[dq.peekBack() + 1][0]
    ) {
      dq.dequeueBack();
    }
    dq.enqueueBack(i);
  }
  console.log(dp);
  return dp[n - 1];
};
// console.log(i, left, boxSum, weightSum, maxBoxes, maxWeight);
boxDelivering(
  [
    [1, 4],
    [1, 2],
    [2, 1],
    [2, 1],
    [3, 2],
    [3, 4],
    [1, 5],
    [1, 2],
    [2, 3],
    [2, 4],
    [3, 1],
  ],
  3,
  6,
  7
);

//  1 2 1 1 1 2 2 3 3 2 2 1
//0 1 2 2 2 3 3 4 4 5 5 6 7
//0 1 2 3 3 3 4 4 5 5 6 6 7

//  1 1 1 1 1 2 2 3 3 2 2 1
//0 0 0 0 0 1 1 2 2 3 3 4 5
//0 1 1 1 1 1 2 2 3 3 4 4 5
