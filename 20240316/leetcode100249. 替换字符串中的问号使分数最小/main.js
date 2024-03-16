/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-03-16 23:33:45                                                  *
 * @LastModifiedDate: 2024-03-16 23:51:03                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * @param {string} s
 * @return {string}
 */
var minimizeStringValue = function (s) {
  const n = s.length;
  const aphla = new Array(26).fill(0);
  const strArr = s.split("");
  // 计算出s中的?数量和预留的
  const aCode = "a".charCodeAt();
  let 
  let ans = 0;
  for (let i = 0; i < n; i++) {
    if (strArr[i] !== "?") {
      let curIdx = strArr[i].charCodeAt() - aCode;
      ans += aphla[curIdx];
      aphla[curIdx]++;
    } else {
      const curIdx = findMinIdx(aphla);
      strArr[i] = String.fromCharCode(curIdx + aCode);
      ans += aphla[curIdx];
      aphla[curIdx]++;
    }
  }
  console.log(ans);
  return strArr.join("");
};

/**
 *
 * @param {number[]} aphla
 */
function findMinIdx(aphla) {
  let minNum = aphla[0];
  let minIdx = 0;
  for (let i = 1; i < aphla.length; i++) {
    if (aphla[i] < minNum) {
      minNum = aphla[i];
      minIdx = i;
    }
  }
  return minIdx;
}



"abcdefghijklmnopqrstuvwxy??abcdefghijklmnopqrstuvwxy??";
"abcdefghijklmnopqrstuvwxyzaabcdefghijklmnopqrstuvwxyzb";
// 0 + 1 + 1 + 2
"abcdefghijklmnopqrstuvwxyaaabcdefghijklmnopqrstuvwxyzz";
// 1 + 2 + 0 + 1
