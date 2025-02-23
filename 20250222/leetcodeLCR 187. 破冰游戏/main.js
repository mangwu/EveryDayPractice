// 社团共有 num 位成员参与破冰游戏，编号为 0 ~ num-1。成员们按照编号顺序围绕圆桌而坐。社长抽取一个数字 target，从 0 号成员起开始计数，排在第 target 位的成员离开圆桌，且成员离开后从下一个成员开始计数。请返回游戏结束时最后一位成员的编号。

/**
 * @param {number} num
 * @param {number} target
 * @return {number}
 */
var iceBreakingGame = function (num, target) {
  if (num === 1) return 0;
  const x = iceBreakingGame(num - 1, target);
  // 当前删除元素为target % num编号的元素
  return (target + x) % num;
};

/**
 * @param {number} num
 * @param {number} target
 * @return {number}
 */
var iceBreakingGame = function (num, target) {
  // 最后一个元素的编号为0
  // 那么依次求出最后第二个，第三个...
  let cur = 0;
  for (let i = 2; i <= num; i++) {
    // i个时的编号
    cur = (target + cur) % i;
  }
  return cur;
};

// (target % num + x) % num
