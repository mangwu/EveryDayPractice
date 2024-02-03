// 秋日市集上，魔术师邀请小扣与他互动。魔术师的道具为分别写有数字 1~N 的 N 张卡牌，然后请小扣思考一个 N 张卡牌的排列 target。

// 魔术师的目标是找到一个数字 k（k >= 1），使得初始排列顺序为 1~N 的卡牌经过特殊的洗牌方式最终变成小扣所想的排列 target，特殊的洗牌方式为：

// 第一步，魔术师将当前位于 偶数位置 的卡牌（下标自 1 开始），保持 当前排列顺序 放在位于 奇数位置 的卡牌之前。例如：将当前排列 [1,2,3,4,5] 位于偶数位置的 [2,4] 置于奇数位置的 [1,3,5] 前，排列变为 [2,4,1,3,5]；
// 第二步，若当前卡牌数量小于等于 k，则魔术师按排列顺序取走全部卡牌；若当前卡牌数量大于 k，则取走前 k 张卡牌，剩余卡牌继续重复这两个步骤，直至所有卡牌全部被取走；
// 卡牌按照魔术师取走顺序构成的新排列为「魔术取数排列」，请返回是否存在这个数字 k 使得「魔术取数排列」恰好就是 target，从而让小扣感到大吃一惊。

class DQ {
  constructor() {
    this.items = {};
    this.lowest = 0;
    this.count = 0;
  }
  size() {
    return this.count;
  }
  isEmpty() {
    return this.count === 0;
  }
  enqueue(value) {
    this.items[this.lowest + this.count++] = value;
  }
  dequeue() {
    if (this.isEmpty()) return undefined;
    const res = this.items[this.lowest++];
    delete this.items[this.lowest - 1];
    this.count--;
    return res;
  }
  peek() {
    if (this.isEmpty()) return undefined;
    return this.items[this.lowest];
  }
}

/**
 * @param {number[]} target
 * @return {boolean}
 */
var isMagic = function (target) {
  let queue = [];
  const n = target.length;
  for (let i = 2; i <= n; i += 2) queue.push(i);
  for (let i = 1; i <= n; i += 2) queue.push(i);
  // 找出k
  let k = 0;
  let i = 0;
  while (i < n) {
    if (queue.length && queue[0] === target[i]) {
      k++;
      i++;
      queue.shift();
    } else break;
  }
  if (k === 0) return false;
  // 然后通过k进行循环遍历
  while (queue.length) {
    const oddArr = [];
    const evenArr = [];
    for (let j = 0; j < queue.length; j++) {
      if (j % 2 === 0) {
        oddArr.push(queue[j]);
      } else evenArr.push(queue[j]);
    }
    evenArr.push(...oddArr);
    queue = evenArr;
    let start = i;
    for (; i < Math.min(n, start + k); i++) {
      if (queue[0] !== target[i]) return false;
      queue.shift();
    }
  }
  return true;
};

// 3 5

// [2,4,6,8,12,3,7,11,1,9,10,5]
// 2 4 6 8 10 12 1 3 5 7 9 11
// k = 4
// 12 3 7 11 10 1 5 9

// 1 9 10 5

// 