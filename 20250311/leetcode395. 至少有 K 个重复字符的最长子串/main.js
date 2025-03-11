// 给你一个字符串 s 和一个整数 k ，请你找出 s 中的最长子串， 要求该子串中的每一字符出现次数都不少于 k 。返回这一子串的长度。

// 如果不存在这样的子字符串，则返回 0。

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {
  const n = s.length;
  if (k === 1) return n;
  const hash = new Map();
  const isValid = () => {
    if (hash.size === 0) return false;
    for (const [key, value] of hash) {
      if (value < k && value !== 0) return false;
    }
    return true;
  };
  let right = 0;
  let res = 0;
  for (let i = 0; i < n; i++) {
    while (right < n && !isValid()) {
      hash.set(s[right], (hash.get(s[right]) || 0) + 1);
      right++;
    }
    if (isValid()) {
      while (right < n && isValid()) {
        hash.set(s[right], (hash.get(s[right]) || 0) + 1);
        right++;
      }
      right--;
      hash.set(s[right], (hash.get(s[right]) || 0) - 1);
      res = Math.max(res, right - i);
    }
    const num = hash.get(s[i]);
    if (num === 1) hash.delete(s[i]);
    else hash.set(s[i], num - 1);
  }
  return res;
};
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {
  const n = s.length;
  if (k === 1) return n;
  const dfs = (start, end) => {
    if (end - start + 1 < k) return 0;
    const hash = new Map();
    for (let i = start; i <= end; i++) {
      const arr = hash.get(s[i]) || [];
      arr.push(i);
      hash.set(s[i], arr);
    }
    const splitArr = [];
    for (const [key, arr] of hash) {
      if (arr.length < k) {
        splitArr.push(...arr);
      }
    }
    if (splitArr.length === 0) return end - start + 1;
    splitArr.sort((a, b) => a - b);
    let res = 0;
    for (let i = 0; i <= splitArr.length; i++) {
      let newStart = i === 0 ? start : splitArr[i - 1] + 1;
      let newEnd = i === splitArr.length ? end : splitArr[i] - 1;
      res = Math.max(res, dfs(newStart, newEnd));
    }
    return res;
  };
  const res = dfs(0, n - 1);
  return res;
};
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {
  const n = s.length;
  if (k === 1) return n;
  // 滑动窗口，设定一个t，表示当前字符串应该包含的不同种类的字符数量
  // 然后对每个t进行一次滑动操作
  let res = 0;
  for (let t = 1; t <= 26; t++) {
    let left = 0; // 左指针
    let cnts = new Map(); // 记录不同字符数量
    let less = 0; // 记录当前小于k的不同字符数量，当1 -> 0或者 k-1 -> k时减1，当0 -> 1或者 k -> k - 1时加1
    for (let right = 0; right < n; right++) {
      const num = cnts.get(s[right]) || 0;
      cnts.set(s[right], num + 1);
      if (num === 0) less++;
      else if (num === k - 1) less--;
      // 当不同字符种类大于t时需要右移左指针
      while (cnts.size > t) {
        const curNum = cnts.get(s[left]);
        cnts.set(s[left], curNum - 1);
        if (curNum === 1) {
          cnts.delete(s[left]);
          less--;
        } else if (curNum === k) less++;
        left++;
      }
      if (less === 0) res = Math.max(res, right - left + 1);
    }
  }
  return res;
};
