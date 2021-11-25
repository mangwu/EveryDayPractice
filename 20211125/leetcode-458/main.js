// 有 buckets 桶液体，其中 正好 有一桶含有毒药，其余装的都是水。
// 它们从外观看起来都一样。为了弄清楚哪只水桶含有毒药，你可以喂一些猪喝，通过观察猪是否会死进行判断。
// 不幸的是，你只有 minutesToTest 分钟时间来确定哪桶液体是有毒的。

// 喂猪的规则如下：

// 选择若干活猪进行喂养
// 可以允许小猪同时饮用任意数量的桶中的水，并且该过程不需要时间。
// 小猪喝完水后，必须有 minutesToDie 分钟的冷却时间。在这段时间里，你只能观察，而不允许继续喂猪。
// 过了 minutesToDie 分钟后，所有喝到毒药的猪都会死去，其他所有猪都会活下来。
// 重复这一过程，直到时间用完。
// 给你桶的数目 buckets ，minutesToDie 和 minutesToTest ，返回在规定时间内判断哪个桶有毒所需的 最小 猪数。

/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
var poorPigs = function (buckets, minutesToDie, minutesToTest) {
  // 一只小猪在规定时间内最多得知 minutesToTest / minutesToDie + 1 桶的水是否有毒
  // 重点在于两只猪能判别几桶水有毒，如果只是简单的 2 * minutesToTest / minutesToDie + 1 就是简单的在一个维度上思考
  // 实际上可以把把每只小猪携带的信息量看成是 base进制数，两只小猪的信息量应该是 (minutesToTest / minutesToDie + 1)^2
  // 两只小猪实际上是两个维度的，把25桶水分为5×5，一只猪喝一行的混合水，一只猪喝一列的混合水，两只猪同时喝死的那一列的交点就是毒水
  // n只小猪最多能判断的桶数为 (minutesToTest / minutesToDie + 1)^n >= buckets

  // 信息量
  const baseInfo = Math.floor(minutesToTest / minutesToDie) + 1;
  // baseInfo ^ n >= buckets  =>  n>= log baseInfo(buckets);
  const n = Math.log(buckets) / Math.log(baseInfo);
  const ans = Math.ceil(n);
  return ans;
};
