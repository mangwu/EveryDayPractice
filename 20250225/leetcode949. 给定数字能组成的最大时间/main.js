// 给定一个由 4 位数字组成的数组，返回可以设置的符合 24 小时制的最大时间。

// 24 小时格式为 "HH:MM" ，其中 HH 在 00 到 23 之间，MM 在 00 到 59 之间。最小的 24 小时制时间是 00:00 ，而最大的是 23:59 。从 00:00 （午夜）开始算起，过得越久，时间越大。

// 以长度为 5 的字符串，按 "HH:MM" 格式返回答案。如果不能确定有效时间，则返回空字符串。

/**
 * @param {number[]} arr
 * @return {string}
 */
var largestTimeFromDigits = function (arr) {
  // 暴力解法，计算出每个可能的结果
  const isValid = (time) => {
    const [hour, min] = time.split(":").map((v) => parseInt(v));
    if (hour > 23 || min > 59) return false;
    return true;
  };
  const parseTime = (time) => {
    const [hour, min] = time.split(":").map((v) => parseInt(v));
    return hour * 60 + min;
  };
  let res = "";
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (j === i) continue;
      for (let k = 0; k < 4; k++) {
        if (k === j || k === i) continue;
        for (let l = 0; l < 4; l++) {
          if (l !== i && l !== j && l !== k) {
            const str = [arr[i], arr[j], ":", arr[k], arr[l]].join("");
            if (isValid(str)) {
              if (!res) res = str;
              else if (parseTime(str) > parseTime(res)) {
                res = str;
              }
            }
          }
        }
      }
    }
  }
  return res;
};
