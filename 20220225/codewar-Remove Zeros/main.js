/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-02-25 11:23:27                                                  *
 * @LastModifiedDate: 2022-02-28 13:35:50                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 不使用额外的数组或者对象，仅仅对array进行排序，使得其中的0或者'0'排在后面
// 注意不能使用任何数组或者对象方法，包括shift, push

/**
 * @description remove zeros
 * @param {Array} array 需要将0移到最后的数组
 * @returns array 把0移到后面的数组
 */
function removeZeros(array) {
  let len = array.length;
  for (let i = 0; i < len; i++) {
    if (array[i] == 0 || array[i] == "0") {
      // 替换最后一项
      for (let j = len - 1; j > i; j--) {
        if (array[j] !== 0 && array[j] !== "0") {
          // 数组替换
          [array[i], array[j]] = [array[j], array[i]];
          // 更新len
          len = j;
          break;
        }
      }
    }
  }
  // Sort "array" so that all elements with the value of zero are moved to the
  // end of the array, while the other elements maintain order.
  // [0, 1, 2, 0, 3] --> [1, 2, 3, 0, 0]
  // Zero elements also maintain order in which they occurred.
  // [0, "0", 1, 2, 3] --> [1, 2, 3, 0, "0"]

  // Do not use any temporary arrays or objects. Additionally, you're not able
  // to use any Array or Object prototype methods such as .shift(), .push(), etc
  console.log(array);
  // the correctly sorted array should be returned.
  return array;
}

// 此方法会打乱数组中非0元素的顺序，不是正确解答
removeZeros([7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]);

/**
 * @description remove zeros
 * @param {Array} array 需要将0移到最后的数组
 * @returns array 把0移到后面的数组
 */
function removeZeros2(array) {
  // 每遇到一个0就将其和最近的非0元素替换位置
  let len = array.length;
  for (let i = 0; i < len; i++) {
    if (array[i] == 0 || array[i] == "0") {
      for (let j = i + 1; j < len; j++) {
        if (array[j] !== 0 && array[j] !== "0") {
          // 替换位置
          [array[i], array[j]] = [array[j], array[i]];
          break;
        }
      }
    }
  }
  console.log(array);
  return array;
}
// 错误的代码，仍然会出现0和"0"的顺序产生错误的情况，如下
removeZeros2([1, "0", 2, 0, 52, "0", 7, 0, "3", 1]);

/**
 * @description remove zeros
 * @param {Array} array 需要将0移到最后的数组
 * @returns array 把0移到后面的数组
 */
function removeZeros3(array) {
  let len = array.length;
  let num = 0;
  for (let i = 0; i < len; i++) {
    // 滑动窗口解法,中心从0，移向转移非0元素
    // 记录0的个数然后将非0元素移动到0的前面
    if (array[i] !== "0" && array[i] !== 0) {
      // 不是0 '0' 就移动元素
      if (num) {
        for (let j = 0; j < num; j++) {
          // 一个个替换
          [array[i - j], array[i - j - 1]] = [array[i - j - 1], array[i - j]];
        }
      }
    } else {
      num++;
    }
  }
  return array;
}

removeZeros3([1, "0", 2, 0, 52, "0", 7, 0, "3", 1])