// 实现支持下列接口的「快照数组」- SnapshotArray：

// SnapshotArray(int length) - 初始化一个与指定长度相等的 类数组 的数据结构。初始时，每个元素都等于 0。
// void set(index, val) - 会将指定索引 index 处的元素设置为 val。
// int snap() - 获取该数组的快照，并返回快照的编号 snap_id（快照号是调用 snap() 的总次数减去 1）。
// int get(index, snap_id) - 根据指定的 snap_id 选择快照，并返回该快照指定索引 index 的值。

/**
 * @param {number} length
 */
var SnapshotArray = function (length) {
  this.data = new Array(length).fill(0).map(() => new Array(0));
  this.snapId = 0;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function (index, val) {
  this.data[index].push([this.snapId, val]); // 第snapId快照的修改
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function () {
  return this.snapId++;
};

/**
 * @param {number} index
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function (index, snap_id) {
  // 二分查找
  const arr = this.data[index];
  let left = 0;
  let right = arr.length - 1;
  // 找到最后一个小于等于snap_id的索引，
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const [id, val] = arr[mid];
    if (id > snap_id) {
      right = mid - 1;
    } else left = mid + 1;
  }
  // right找到的索引
  if (right === -1) return 0;
  node && (node = 7);
  return arr[right][1];
};

/**
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */
