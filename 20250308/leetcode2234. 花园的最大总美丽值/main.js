// Alice 是 n 个花园的园丁，她想通过种花，最大化她所有花园的总美丽值。

// 给你一个下标从 0 开始大小为 n 的整数数组 flowers ，其中 flowers[i] 是第 i 个花园里已经种的花的数目。已经种了的花 不能 移走。同时给你 newFlowers ，表示 Alice 额外可以种花的 最大数目 。同时给你的还有整数 target ，full 和 partial 。

// 如果一个花园有 至少 target 朵花，那么这个花园称为 完善的 ，花园的 总美丽值 为以下分数之 和 ：

// 完善 花园数目乘以 full.
// 剩余 不完善 花园里，花的 最少数目 乘以 partial 。如果没有不完善花园，那么这一部分的值为 0 。
// 请你返回 Alice 种最多 newFlowers 朵花以后，能得到的 最大 总美丽值。

/**
 * @param {number[]} flowers
 * @param {number} newFlowers
 * @param {number} target
 * @param {number} full
 * @param {number} partial
 * @return {number}
 */
var maximumBeauty = function (flowers, newFlowers, target, full, partial) {
  flowers.sort((a, b) => b - a);
  const n = flowers.length;
  if (flowers[n - 1] >= target) return n * full; // 特殊情况，全是美丽的
  // 前缀和思想，完善前i个需要多少个花朵
  const prefix = [0];
  let num = 0; // 记录已是完善花园的数目
  for (let i = 0; i < n; i++) {
    if (flowers[i] >= target) num++;
    let add = Math.max(0, target - flowers[i]);
    let sum = add + prefix[prefix.length - 1];
    if (sum > newFlowers) break;
    prefix.push(sum);
  }
  // 同理，保证后j个的最小值为倒数第j+1个元素的值，需要多少个花朵
  const suffix = [0]; // 默认最小值为最后的元素
  for (let j = n - 2; j >= 0; j--) {
    if (flowers[j] >= target) break;
    if (flowers[j] === flowers[j + 1]) {
      suffix.push(suffix[suffix.length - 1]);
    } else {
      let add = suffix.length * (flowers[j] - flowers[j + 1]);
      const sum = suffix[suffix.length - 1] + add;
      if (sum > newFlowers) break;
      suffix.push(suffix[suffix.length - 1] + add);
    }
  }
  let right = suffix.length - 1;
  let res = 0;
  for (let i = 0; i < prefix.length; i++) {
    // 完善前i个花朵
    let fullVal = Math.max(i, num) * full;
    // 剩余花朵数
    let leftFlower = newFlowers - prefix[i];
    // 左移right，保证花费小于leftFlower，且个数不能超过最大未完善的个数n-i
    while ((right >= 0 && leftFlower < suffix[right]) || right + 1 > n - i)
      right--;
    if (right < 0) {
      // 全部填充
      res = Math.max(res, fullVal);
      break;
    }
    // 后right+1个取最小值flowers[n - right - 1]
    leftFlower -= suffix[right];
    let min = Math.min(
      target - 1,
      flowers[n - right - 1] + Math.floor(leftFlower / (right + 1))
    );
    let partialVal = min * partial;
    res = Math.max(res, partialVal + fullVal);
  }
  return res;
};
