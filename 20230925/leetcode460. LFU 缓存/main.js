// 请你为 最不经常使用（LFU）缓存算法设计并实现数据结构。

// 实现 LFUCache 类：

// LFUCache(int capacity) - 用数据结构的容量 capacity 初始化对象
// int get(int key) - 如果键 key 存在于缓存中，则获取键的值，否则返回 -1 。
// void put(int key, int value) - 如果键 key 已存在，则变更其值；如果键不存在，请插入键值对。当缓存达到其容量 capacity 时，则应该在插入新项之前，移除最不经常使用的项。在此问题中，当存在平局（即两个或更多个键具有相同使用频率）时，应该去除 最近最久未使用 的键。
// 为了确定最不常使用的键，可以为缓存中的每个键维护一个 使用计数器 。使用计数最小的键是最久未使用的键。

// 当一个键首次插入到缓存中时，它的使用计数器被设置为 1 (由于 put 操作)。对缓存中的键执行 get 或 put 操作，使用计数器的值将会递增。

// 函数 get 和 put 必须以 O(1) 的平均时间复杂度运行。

/**
 * @param {number} capacity
 */
var LFUCache = function (capacity) {
  this.counts = []; // 计数器
  this.hash = new Map(); // 记录key的[value, cuont] count为使用次数
  this.latestIdx = 1;
  this.capacity = capacity;
};

/**
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function (key) {
  if (this.hash.has(key)) {
    const arr = this.hash.get(key);
    const [value, count] = arr;
    const set = this.counts[count];
    set.delete(key);
    if (count === this.latestIdx && set.size === 0) {
      // 更新latestIdx
      this.latestIdx++;
    }
    if (this.counts[count + 1]) {
      this.counts[count + 1].add(key);
    } else {
      this.counts[count + 1] = new Set([key]);
    }
    arr[1]++;
    return value;
  }
  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function (key, value) {
  if (this.hash.has(key)) {
    const arr = this.hash.get(key);
    const [_oldValue, count] = arr;
    arr[0] = value; // 替换新值
    // count加一
    const set = this.counts[count];
    set.delete(key);
    if (count === this.latestIdx && set.size === 0) {
      // 更新latestIdx
      this.latestIdx++;
    }
    if (this.counts[count + 1]) {
      this.counts[count + 1].add(key);
    } else {
      this.counts[count + 1] = new Set([key]);
    }
  } else {
    // 没有key，查看是否超过容量
    if (this.hash.size === this.capacity) {
      // 要舍弃最近最久的未使用的键，latestIdx记录最小的计数
      const set = this.counts[this.latestIdx];
      for (const item of set) {
        set.delete(item); // 删除key
        this.hash.delete(item); // 删除key
        break;
      }
    }
    // 添加新key
    this.hash.set(key, [value, 1]);
    if (this.counts[1]) {
      this.counts.add(key);
    } else {
      this.counts = new Set(key);
    }
    this.latestIdx = 1;
  }
};

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
