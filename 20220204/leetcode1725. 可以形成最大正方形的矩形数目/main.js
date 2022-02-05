/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function(rectangles) {
  // 保存当前最大边长
  // 如果得到一个比最大边长大的数就重置个数为1
  // 如果遇到和最大边才相等的数，就增加个数
  // 否则不进行任何操作

  // 声明个数
  let ans = 0;
  // 最大值
  let maxLen = 0;
  // 遍历数组
  for (const r of rectangles) {
    //小值
    const sqR = Math.min(r[0], r[1]);
    // 比较
    if (sqR > maxLen) {
      // 重置
      ans = 1;
      maxLen = sqR;
    } else if (sqR == maxLen) {
      ans++;
    }
  }
  return ans;
};