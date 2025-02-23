// 在 「力扣挑战赛」 开幕式的压轴节目 「无人机方阵」中，每一架无人机展示一种灯光颜色。 无人机方阵通过两种操作进行颜色图案变换：

// 调整无人机的位置布局
// 切换无人机展示的灯光颜色
// 给定两个大小均为N*M的二维数组source和target表示无人机方阵表演的两种颜色图案，由于无人机切换灯光颜色的耗能很大，请返回从source到target最少需要多少架无人机切换灯光颜色。

// 注意：调整无人机的位置布局时无人机的位置可以随意变动。

/**
 * @param {number[][]} source
 * @param {number[][]} target
 * @return {number}
 */
var minimumSwitchingTimes = function (source, target) {
  // 计算每个数字的个数
  const m = source.length;
  const n = source[0].length;
  const sourceCnts = new Map();
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++)
      sourceCnts.set(source[i][j], (sourceCnts.get(source[i][j]) || 0) + 1);
  }
  let res = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (sourceCnts.has(target[i][j])) {
        const num = sourceCnts.get(target[i][j]);
        if (num > 1) sourceCnts.set(target[i][j], num - 1);
        else sourceCnts.delete(target[i][j]);
      } else res++;
    }
  }
  return res;
};
