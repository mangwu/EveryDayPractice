// 超市正在促销，你可以用 numExchange 个空水瓶从超市兑换一瓶水。最开始，你一共购入了 numBottles 瓶水。

// 如果喝掉了水瓶中的水，那么水瓶就会变成空的。

// 给你两个整数 numBottles 和 numExchange ，返回你 最多 可以喝到多少瓶水。

/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
  let ans = numBottles;
  let curBottles = numBottles;
  while (curBottles >= numExchange) {
    const bottles = Math.floor(curBottles / numExchange);
    ans += bottles;
    curBottles = (curBottles % numExchange) + bottles;
  }
  return ans;
};

// a当前瓶数，b交换个数
// 每喝完一个就考虑换酒，当空瓶数量到达b个时，就会换一次，这时总体上损失了b-1个瓶子
// 如果换n次，那么就会损失 n * (b-1)个瓶子，换瓶子时会保证当前瓶子数量大于等于交换数量，即：
// a - n * (b-1) >= b 在n次交换过程中始终成立
// 我们要计算出第一个打破这个条件的n是多少，就能知道最大的交换次数（就是前述的第一个打破条件的n）了，
// 所以需要找到使得  a - n * (b-1) < b的最小的n
// 化简得到 n > (a - b) / (b - 1)
// 所以n_min = floor((a - b) / (b-1) + 1)

/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
  return numBottles < numExchange
    ? numBottles
    : Math.floor((numBottles - numExchange) / (numExchange - 1) + 1) +
        numBottles;
};
