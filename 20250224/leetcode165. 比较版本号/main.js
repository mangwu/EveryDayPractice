// 给你两个 版本号字符串 version1 和 version2 ，请你比较它们。版本号由被点 '.' 分开的修订号组成。修订号的值 是它 转换为整数 并忽略前导零。

// 比较版本号时，请按 从左到右的顺序 依次比较它们的修订号。如果其中一个版本字符串的修订号较少，则将缺失的修订号视为 0。

// 返回规则如下：

// 如果 version1 < version2 返回 -1，
// 如果 version1 > version2 返回 1，
// 除此之外返回 0。

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  const v1Arr = version1.split(".").map((v) => parseInt(v));
  const v2Arr = version2.split(".").map((v) => parseInt(v));
  const m = v1Arr.length;
  const n = v2Arr.length;
  let i = 0;
  let j = 0;
  while (i < m || j < n) {
    const v1 = i < m ? v1Arr[i] : 0;
    const v2 = j < n ? v2Arr[j] : 0;
    if (v1 > v2) return 1;
    if (v1 < v2) return -1;
    i++;
    j++;
  }
  return 0;
};
