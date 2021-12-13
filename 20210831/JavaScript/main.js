/**
 * @description  main.js
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-12-13 20:37:45
 * @copyright © 2021 wangzhihao, All rights reserved.
 */
//  ### 这一题是起源题
//  用递归算法实现，数组长度为5且元素的随机数在2-32间不重复的值
//  描述：
//  1. 这是一道大题目，把考点拆成了4个小项；需要侯选人用递归算法实现（限制15行代码以内实现；限制时间10分钟内完成）：
//  a) 生成一个长度为5的空数组arr。
//  b) 生成一个（2－32）之间的随机整数rand。
//  c) 把随机数rand插入到数组arr内，如果数组arr内已存在与rand相同的数字，则重新生成随机数rand并插入到arr内[需要使用递归实现，不能使用for/while等循环]
//  d) 最终输出一个长度为5，且内容不重复的数组arr。
// var randomNumber = () => {
//   return Math.floor(Math.random() * 31 + 2);
// };
let num = randomNumber();

// 声明生成了多少个随机数的记录i
let i = 0;
// 声明递归方法
var randomArr = function (arr, num) {
  if (arr.indexOf(num) === -1) {
    // 不存在此随机数就添加到数组中且增加i的记录
    i++;
    arr[i] = num;
  } else {
    // 否则再次生成
    num = randomNumber();
  }
  if (i >= arr.length) {
    // 说明arr已经有5个随机值了，退出递归
    return;
  } else {
    // 否则继续生成
    randomArr(arr, randnum);
  }
};

// // var arr = new Array(5);
// var num = randomNumber();
// var i = 0;
// function randomArr(arr, num) {
//   if (arr.indexOf(num) < 0) {
//     arr[i] = num;
//     i++;
//   } else {
//     num = randomNumber();
//   }
//   if (i >= arr.length) {
//     console.log(arr);
//     return;
//   } else {
//     randomArr(arr, num);
//   }
// }
// randomArr(arr,num);
function randomNumber() {
  return Math.floor(Math.random() * 31 + 2);
}
var randomFiveArray = function () {
  // 声明数组
  let arr = new Array(5);
  // 声明生成2-32的随机数方法
  randomArr(arr, num);
  return arr;
};
console.log(randomFiveArray());
// console.log(randomNumber());
// console.log(arr);
