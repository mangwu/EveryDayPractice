// 给你一个整数数组 target 和一个数组 initial ，initial 数组与 target  数组有同样的维度，且一开始全部为 0 。

// 请你返回从 initial 得到  target 的最少操作次数，每次操作需遵循以下规则：

// 在 initial 中选择 任意 子数组，并将子数组中每个元素增加 1 。
// 答案保证在 32 位有符号整数以内。

/**
 * @param {number[]} target
 * @return {number}
 */
var minNumberOperations = function (target) {
  // 把target变成全是0的数组需要操作子数组的次数
  const n = target.length;
  const dfs = (start, end) => {
    if (start > end) return 0;
    if (start === end) return target[start];
    let res = 0;
    let pre = target[start];
    for (let i = 1; i <= end; i++) {
      
    }
  };
};

// 寻找山峰peak
// 对于一个山峰子数组而言，将其全变成0的操作次数就是山峰值，例如；
// 1 3 5 2 1
// => 0 2 4 1 0
// => 1 3 0
// => 0 2
// => 1
// => 0   经过5次减少

// 对于有个突起的子数组而言，在它们转换的过程中会经过多个突起转换为单个突起的过程，如下

// 1 3 5 2 1 4 2 3
// => 0 2 4 1 0 3 1 2 => 2 4 1 | 3 1 2     +1
// => 1 3 0 | 2 0 1 => 1 3 | 2 | 1   +2
// => 0 2 | 1 | 0   +3
// => 1 | 0     +2
// => 0   +1
