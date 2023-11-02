// 总计有 n 个环，环的颜色可以是红、绿、蓝中的一种。这些环分别穿在 10 根编号为 0 到 9 的杆上。

// 给你一个长度为 2n 的字符串 rings ，表示这 n 个环在杆上的分布。rings 中每两个字符形成一个 颜色位置对 ，用于描述每个环：

// 第 i 对中的 第一个 字符表示第 i 个环的 颜色（'R'、'G'、'B'）。
// 第 i 对中的 第二个 字符表示第 i 个环的 位置，也就是位于哪根杆上（'0' 到 '9'）。
// 例如，"R3G2B1" 表示：共有 n == 3 个环，红色的环在编号为 3 的杆上，绿色的环在编号为 2 的杆上，蓝色的环在编号为 1 的杆上。

// 找出所有集齐 全部三种颜色 环的杆，并返回这种杆的数量。

/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function (rings) {
  const rods = new Array(10).fill(0).map(() => new Set());
  const n = rings.length;
  for (let i = 0; i < n; i += 2) {
    rods[parseInt(rings[i + 1])].add(rings[i]);
  }
  return rods.reduce((pre, cur) => (cur.size === 3 ? pre + 1 : pre), 0);
};
