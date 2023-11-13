// 给你一个数组 nums ，请你完成两类查询。

// 其中一类查询要求 更新 数组 nums 下标对应的值
// 另一类查询要求返回数组 nums 中索引 left 和索引 right 之间（ 包含 ）的nums元素的 和 ，其中 left <= right
// 实现 NumArray 类：

// NumArray(int[] nums) 用整数数组 nums 初始化对象
// void update(int index, int val) 将 nums[index] 的值 更新 为 val
// int sumRange(int left, int right) 返回数组 nums 中索引 left 和索引 right 之间（ 包含 ）的nums元素的 和 （即，nums[left] + nums[left + 1], ..., nums[right]）

/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.nums = nums;
  // 分块处理
  const n = nums.length;
  const blockSize = Math.floor(Math.sqrt(n));
  const blockNums = Math.ceil(n / blockSize);
  this.blocks = new Array(blockNums).fill(0);
  this.blockSize = blockSize;
  for (let i = 0; i < blockNums; i++) {
    let cur = 0;
    for (let j = 0; j < blockSize; j++) {
      if (i * blockSize + j < n) {
        cur += nums[i * blockSize + j];
      } else break;
    }
    this.blocks[i] = cur;
  }
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function (index, val) {
  let diff = val - this.nums[index];
  this.nums[index] = val;
  const blockIdx = Math.floor(index / this.blockSize);
  this.blocks[blockIdx] += diff;
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  const leftBlockIdx = Math.floor(left / this.blockSize);
  const rightBlockIdx = Math.floor(right / this.blockSize);
  if (leftBlockIdx === rightBlockIdx) {
    let sum = 0;
    for (let i = left; i <= right; i++) {
      sum += this.nums[i];
    }
    return sum;
  }
  let sum1 = 0;
  let sum2 = 0;
  let sum3 = 0;
  for (let i = left; i < (leftBlockIdx + 1) * this.blockSize; i++) {
    sum1 += this.nums[i];
  }
  for (let i = leftBlockIdx + 1; i < rightBlockIdx; i++) {
    sum2 += this.blocks[i];
  }
  for (let i = rightBlockIdx * this.blockSize; i <= right; i++) {
    sum3 += this.nums[i];
  }
  return sum1 + sum2 + sum3;
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */
