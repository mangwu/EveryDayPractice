/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-02-14 09:10:55                                                  *
 * @LastModifiedDate: 2022-02-14 10:56:20                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022                                                          *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个仅由整数组成的有序数组，其中每个元素都会出现两次，唯有一个数只会出现一次。

// 请你找出并返回只出现一次的那个数。

// 你设计的解决方案必须满足 O(log n) 时间复杂度和 O(1) 空间复杂度。

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  // 使用二分查找法
  // 如果mid在left合right组成的数组中是偶数 如果被选中mid与左边不相等，与右边相等，则取右边
  // 如果mid在left合right组成的数组中是奇数，如果被选中mid与左边不相等，与右边相等，则取左边
  // 查找范围[0, length - 1]
  let left = 0;
  let right = nums.length - 1;

  // 求得中间值
  let mid = 0;
  // 查找
  while (right > left) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid] !== nums[mid - 1] && nums[mid] !== nums[mid + 1]) {
      return nums[mid];
    }
    // 灵活选取
    if (Math.floor((right - left + 1) / 2) % 2 == 0) {
      // 偶数
      if (nums[mid] !== nums[mid - 1] && nums[mid] === nums[mid + 1]) {
        // 取右边 [mid, right]
        left = mid;
      } else {
        // 取左边
        right = mid;
      }
    } else {
      // 奇数
      if (nums[mid] !== nums[mid - 1] && nums[mid] === nums[mid + 1]) {
        // 取左边[left, mid-1]
        right = mid - 1;
      } else {
        // 取右边[mid + 1, right];
        left = mid + 1;
      }
    }
  }
  return nums[left];
};

singleNonDuplicate([3, 3, 7, 7, 10, 10, 11, 11, 12, 12, 15]);

// [3,3,7,7,10,'10',11,11,12,12,15] => [11, 11, '12', 12, 15] => [12, 12, 15] => [15]


// /利用按位异或的性质，可以得到 mid 和相邻的数之间的如下关系
// mid为偶数 mid + 1 = mid ⊕ 1
// mid为偶数 mid - 1 = mid ⊕ 1
// 根据这一原则，可以将上述的判断统一简化
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate2 = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let mid = 0;
  // 查找
  while (right > left) {
    mid = Math.floor((left + right) / 2);
    // 灵活选取 异或，偶数就是 mid + 1 奇数就是mid - 1
    if (nums[mid] === nums[mid ^ 1]) {
      // 在整体上，mid 为偶数，需要与右边的比较,如果相等，则取右边（没有被单个元素打乱），不相等则取左边
      // 在整体上，mid 为奇数，需要与左边比较，如果相等（没有被单个元素打乱），则取右边，不相等则取左边
      // [mid+1, right]
      left = mid + 1;
    } else {
      // [left, mid]
      right = mid;
    }
  }
  return nums[left];
};

