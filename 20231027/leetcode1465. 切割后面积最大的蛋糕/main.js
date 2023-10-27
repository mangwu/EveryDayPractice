// 矩形蛋糕的高度为 h 且宽度为 w，给你两个整数数组 horizontalCuts 和 verticalCuts，其中：

//  horizontalCuts[i] 是从矩形蛋糕顶部到第  i 个水平切口的距离
// verticalCuts[j] 是从矩形蛋糕的左侧到第 j 个竖直切口的距离
// 请你按数组 horizontalCuts 和 verticalCuts 中提供的水平和竖直位置切割后，请你找出 面积最大 的那份蛋糕，并返回其 面积 。由于答案可能是一个很大的数字，因此需要将结果 对 109 + 7 取余 后返回。
const MOD = 10n ** 9n + 7n;
/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
var maxArea = function (h, w, horizontalCuts, verticalCuts) {
  horizontalCuts.push(0);
  horizontalCuts.push(h);
  horizontalCuts.sort((a, b) => a - b);
  verticalCuts.push(0);
  verticalCuts.push(w);
  verticalCuts.sort((a, b) => a - b);
  let maxHeight = 1;
  let maxWidth = 1;
  const m = horizontalCuts.length;
  const n = verticalCuts.length;
  for (let i = 1; i < m; i++) {
    maxHeight = Math.max(maxHeight, horizontalCuts[i] - horizontalCuts[i - 1]);
  }
  for (let i = 1; i < n; i++) {
    maxWidth = Math.max(maxWidth, verticalCuts[i] - verticalCuts[i - 1]);
  }
  return (BigInt(maxHeight) * BigInt(maxWidth)) % MOD;
};
