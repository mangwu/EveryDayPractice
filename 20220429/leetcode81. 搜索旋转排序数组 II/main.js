/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-29 11:25:20                                                  *
 * @LastModifiedDate: 2022-04-29 14:45:29                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// 已知存在一个按非降序排列的整数数组 nums ，数组中的值不必互不相同。

// 在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转 ，使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。例如， [0,1,2,4,4,4,5,6,6,7] 在下标 5 处经旋转后可能变为 [4,5,6,6,7,0,1,2,4,4] 。

// 给你 旋转后 的数组 nums 和一个整数 target ，请你编写一个函数来判断给定的目标值是否存在于数组中。如果 nums 中存在这个目标值 target ，则返回 true ，否则返回 false 。

// 你必须尽可能减少整个操作步骤。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  return nums.indexOf(target) !== -1;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  const len = nums.length;
  if (nums[0] == target || nums[len - 1] == target) {
    return true;
  }

  // [0,len-1]
  let left = 0;
  let right = len - 1;
  while (left <= right) {
    let mid = (left + right) >> 1;
    console.log(left, right, nums[mid], mid);
    if (nums[mid] == target) {
      return true;
    }
    if (nums[mid] == nums[left] && nums[mid] == nums[right]) {
      left++;
      right--;
      continue;
    }
    if (nums[mid] >= nums[left]) {
      // 左边是有序的
      if (target < nums[mid] && target >= nums[left]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      // 右边是有序的
      if (target > nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return false;
};

// [2,5,6,0,0,1,2]
// 0
//  [2,2,5,6,0,0,1]

// [2,2,3,4,4,6,7,8,8,0,0,1,1,1,2]
// 5
// 1
// 对于数组中有重复元素的情况，二分查找时可能会有 a[l]=a[\textit{mid}]=a[r]a[l]=a[mid]=a[r]，
// 此时无法判断区间 [l,\textit{mid}][l,mid] 和区间 [\textit{mid}+1,r][mid+1,r] 哪个是有序的。
