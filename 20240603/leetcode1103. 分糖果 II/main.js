/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-06-03 08:44:38                                                  *
 * @LastModifiedDate: 2024-06-03 09:08:53                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function (candies, num_people) {
  let ans = new Array(num_people).fill(0);
  let curAdd = 0;
  let curSum =
    ((curAdd * num_people + 1 + (curAdd + 1) * num_people) * num_people) / 2;
  while (candies >= curSum) {
    candies -= curSum;
    curAdd++;
    curSum =
      ((curAdd * num_people + 1 + (curAdd + 1) * num_people) * num_people) / 2;
  }
  if (curAdd)
    ans = ans.map(
      (v, i) => (i + 1) * curAdd + (num_people * (1 + curAdd - 1) * (curAdd - 1)) / 2
    );
  if (candies) {
    ans = ans.map((v, i) => {
      let addNum = i + 1 + curAdd * num_people;
      if (candies >= addNum) {
        candies -= addNum;
        return addNum + v;
      } else {
        v = v + candies;
        candies = 0;
        return v;
      }
    });
  }
  return ans;
};


// (1 + num_people) * num_people / 2

// (num_people + 1 + 2 * num_people) * num_people / 2

// 1 1+n  1+2 * n 1 + 3 * n
// 2 2+n  2 + 2 * n 2+3*n

// i * curAdd + n * (1 + curAdd) * curAdd / 2;
