// 有一个书店老板，他的书店开了 n 分钟。每分钟都有一些顾客进入这家商店。给定一个长度为 n 的整数数组 customers ，其中 customers[i] 是在第 i 分钟开始时进入商店的顾客数量，所有这些顾客在第 i 分钟结束后离开。

// 在某些时候，书店老板会生气。 如果书店老板在第 i 分钟生气，那么 grumpy[i] = 1，否则 grumpy[i] = 0。

// 当书店老板生气时，那一分钟的顾客就会不满意，若老板不生气则顾客是满意的。

// 书店老板知道一个秘密技巧，能抑制自己的情绪，可以让自己连续 minutes 分钟不生气，但却只能使用一次。

// 请你返回 这一天营业下来，最多有多少客户能够感到满意 。

/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function (customers, grumpy, minutes) {
  // 滑动窗口
  const n = grumpy.length;
  let right = minutes;
  let curRes = 0;
  let res = 0;
  for (let i = 0; i < right; i++) {
    curRes += customers[i];
  }
  for (let i = right; i < n; i++) {
    if (!grumpy[i]) curRes += customers[i];
  }
  res = curRes;
  while (right < n) {
    if (grumpy[right]) {
      // 生气老板不生气了
      curRes += customers[right];
    }
    if (grumpy[right - minutes]) {
      // 压抑老板重新生气了
      curRes -= customers[right - minutes];
    }
    res = Math.max(res, curRes);
    right++;
  }
  return res;
};
