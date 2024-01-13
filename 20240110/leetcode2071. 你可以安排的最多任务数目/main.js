// 给你 n 个任务和 m 个工人。每个任务需要一定的力量值才能完成，需要的力量值保存在下标从 0 开始的整数数组 tasks 中，第 i 个任务需要 tasks[i] 的力量才能完成。每个工人的力量值保存在下标从 0 开始的整数数组 workers 中，第 j 个工人的力量值为 workers[j] 。每个工人只能完成 一个 任务，且力量值需要 大于等于 该任务的力量要求值（即 workers[j] >= tasks[i] ）。

// 除此以外，你还有 pills 个神奇药丸，可以给 一个工人的力量值 增加 strength 。你可以决定给哪些工人使用药丸，但每个工人 最多 只能使用 一片 药丸。

// 给你下标从 0 开始的整数数组tasks 和 workers 以及两个整数 pills 和 strength ，请你返回 最多 有多少个任务可以被完成。

class Dqueue {
  constructor() {
    this.items = {};
    this.lowest = 0;
    this.highest = 1;
  }
  size() {
    return this.highest - this.lowest - 1;
  }
  isEmpty() {
    return this.size() === 0;
  }
  peekFront() {
    if (this.isEmpty()) return undefined;
    return this.items[this.lowest + 1];
  }
  peekBack() {
    if (this.isEmpty()) return undefined;
    return this.items[this.highest - 1];
  }
  enqueueFront(value) {
    if (value == null) return false;
    this.items[this.lowest--] = value;
    return true;
  }
  enqueueBack(value) {
    if (value == null) return false;
    this.items[this.highest++] = value;
    return true;
  }
  dequeueFront() {
    if (this.isEmpty()) return undefined;
    const res = this.items[++this.lowest];
    delete this.items[this.lowest];
    return res;
  }
  dequeueBack() {
    if (this.isEmpty()) return undefined;
    const res = this.items[--this.highest];
    delete this.items[this.highest];
    return res;
  }
}

/**
 * @param {number[]} tasks
 * @param {number[]} workers
 * @param {number} pills
 * @param {number} strength
 * @return {number}
 */
var maxTaskAssign = function (tasks, workers, pills, strength) {
  // 分配的问题
  // 优先完成需要力量小的工作任务
  const m = tasks.length;
  const n = workers.length;
  let left = 0;
  let right = Math.min(m, n);
  tasks.sort((a, b) => a - b);
  workers.sort((a, b) => b - a);
  const check = (num) => {
    // 检查能否完成数量为num的任务
    // 让力量前num的工人完成这num个任务
    const dq = new Dqueue();
    let last = 0;
    for (let i = 0; i < num; i++) {
      if (workers[i] + strength >= tasks[num - 1]) {
        dq.enqueueBack(i);
        last = i + 1;
      } else break;
    }
    // console.log("-------------------------");
    // console.log(`检查能否完成${num}个工作：`);
    // console.log("初始的队列：", dq.items);
    let k = 0; // 使用药丸的个数
    for (let i = num - 1; i >= 0; i--) {
      // 将能添加strength后能完成工作的工人入队
      while (last < num && workers[last] + strength >= tasks[i]) {
        dq.enqueueBack(last++);
      }
      if (!dq.isEmpty()) {
        // 要么选择第一个，要么选择最后一个+strength
        if (workers[dq.peekFront()] >= tasks[i]) {
          dq.dequeueFront();
          // console.log("使用第一个工人完成任务后的队列：", dq.items);
          continue;
        }
        // 选择最后一个
        dq.dequeueBack();
        // console.log("使用增加力量后的最后一个工人完成任务后的队列：", dq.items);
        k++;
      } else return false;
    }
    // console.log(`-----检查完毕，能否完成${num}个工作：${k <= pills}-------`);
    return k <= pills;
  };
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (check(mid)) {
      // mid 可以
      left = mid + 1;
    } else {
      // mid不可以
      right = mid - 1;
    }
  }
  return right;
};

// [13,12,11]
// [12,7,5]
// 2

maxTaskAssign(
  [
    52, 41, 999, 85, 4778, 225, 4441, 22, 6, 8544, 855, 2446, 895, 1456, 2248,
    8992,
  ],
  [
    46, 843, 3524, 3857, 5641, 6541, 23, 145, 864, 87, 1387, 6874, 2, 1, 654,
    12,
  ],
  7,
  2000
);
