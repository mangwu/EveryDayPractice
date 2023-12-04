// 车上最初有 capacity 个空座位。车 只能 向一个方向行驶（也就是说，不允许掉头或改变方向）

// 给定整数 capacity 和一个数组 trips ,  trip[i] = [numPassengersi, fromi, toi] 表示第 i 次旅行有 numPassengersi 乘客，接他们和放他们的位置分别是 fromi 和 toi 。这些位置是从汽车的初始位置向东的公里数。

// 当且仅当你可以在所有给定的行程中接送所有乘客时，返回 true，否则请返回 false。

/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function (trips, capacity) {
  // 差分数组
  const roadsDiff = new Array(1001).fill(0);
  for (const [num, from, to] of trips) {
    roadsDiff[from] += num;
    roadsDiff[to] -= num;
  }
  // 求差分数组的前缀和
  let sum = 0;
  for (const item of roadsDiff) {
    sum += item;
    if (sum > capacity) return false;
  }
  return true;
};
