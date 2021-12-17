/**
 * @description leetcode1518
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-12-17 18:12:31
 * @copyright © 2021 wangzhihao, All rights reserved.
 */
//  小区便利店正在促销，用 numExchange 个空酒瓶可以兑换一瓶新酒。你购入了 numBottles 瓶酒。

//  如果喝掉了酒瓶中的酒，那么酒瓶就会变成空的。

//  请你计算 最多 能喝到多少瓶酒。

/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
  // 声明喝过的酒瓶数
  let ans = numBottles;
  // 全部喝完可替换的酒瓶数
  let replace = Math.floor(numBottles / numExchange);
  // 替换之后剩余的酒瓶数
  let shengyu = numBottles % numExchange;
  // 当可替换的酒瓶数为0时退出循环
  while (replace !== 0) {
    // 喝掉替换的酒瓶数，加入到喝过的酒瓶数中
    ans += replace;
    // 喝掉后总的空瓶数
    let total = replace + shengyu;
    // 再次替换
    replace = Math.floor(total / numExchange);
    // 替换之后剩余的酒瓶数
    shengyu = total % numExchange;
  }
  return ans;
};
console.log(numWaterBottles(15, 4));
console.log(numWaterBottles(5, 5));

console.log(numWaterBottles(15, 8));
console.log(numWaterBottles(15, 9));
console.log(numWaterBottles(14, 15));

/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles2 = function (numBottles, numExchange) {
  // 上面的方法使用除法和取余，比较耗费性能
  // 考虑到每次只替换一个酒瓶，然后增加，通过比较空瓶数和可替换数判断是否仍然可替换
  // 喝掉全部酒瓶计入喝掉的结果中
  let ans = numBottles;
  // 空瓶数
  let empty = numBottles;
  // 当空瓶数大于可交换瓶数时，做一次交互
  while (empty >= numExchange) {
    // 做一次交互
    empty -= numExchange;

    // 喝掉交互的一瓶酒
    ans++;
    // 获得一个空瓶
    empty++;
  }
  return ans;
};
