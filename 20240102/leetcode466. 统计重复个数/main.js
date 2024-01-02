// 定义 str = [s, n] 表示 str 由 n 个字符串 s 连接构成。

// 例如，str == ["abc", 3] =="abcabcabc" 。
// 如果可以从 s2 中删除某些字符使其变为 s1，则称字符串 s1 可以从字符串 s2 获得。

// 例如，根据定义，s1 = "abc" 可以从 s2 = "abdbec" 获得，仅需要删除加粗且用斜体标识的字符。
// 现在给你两个字符串 s1 和 s2 和两个整数 n1 和 n2 。由此构造得到两个字符串，其中 str1 = [s1, n1]、str2 = [s2, n2] 。

// 请你找出一个最大整数 m ，以满足 str = [str2, m] 可以从 str1 获得。

/**
 * @param {string} s1
 * @param {number} n1
 * @param {string} s2
 * @param {number} n2
 * @return {number}
 */
var getMaxRepetitions = function (s1, n1, s2, n2) {
  const str1 = s1.repeat(n1);
  const str2 = s2.repeat(n2);
  // 二分查找
  const str1Len = str1.length;
  const str2Len = str2.length;
  if (str2Len > str1Len) return 0;
  let left = 0;
  let right = Math.floor(str1.length / str2.length);
  const check = (m) => {
    const str = str2.repeat(m);
    // 判断str是否可以从str1获得
    let j = 0;
    for (let i = 0; i < str.length; i++) {
      while (j < str1Len && str1[j] !== str[i]) {
        j++;
      }
      if (j === str1Len) return false;
      j++;
    }
    return true;
  };
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (check(mid)) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return Math.max(0, right);
};

/**
 * @param {string} s1
 * @param {number} n1
 * @param {string} s2
 * @param {number} n2
 * @return {number}
 */
var getMaxRepetitions = function (s1, n1, s2, n2) {
  const str1 = s1.repeat(n1);
  const str2 = s2.repeat(n2);
  const str1Len = str1.length;
  const str2Len = str2.length;
  if (str2Len > str1Len) return 0;
  // 不断重复匹配
  // 判断str是否可以从str1获得
  let maxM = Math.floor(str1Len / str2Len);
  let j = 0; // str1
  let m = 0;
  for (let i = 0; i < str2Len * maxM; i++) {
    newI = i % str2Len; // 不断重复匹配
    while (j < str1Len && str1[j] !== str2[newI]) {
      j++;
    }
    if (j === str1Len) return m;
    // 本次匹配成功
    m = Math.floor((i + 1) / str2Len);
    j++;
  }
  return m;
};

/**
 * @param {string} s1
 * @param {number} n1
 * @param {string} s2
 * @param {number} n2
 * @return {number}
 */
var getMaxRepetitions = function (s1, n1, s2, n2) {
  const s1Len = s1.length;
  const s2Len = s2.length;
  // 首先判断不可能从s1获取到s2的情况
  if (s2Len * n2 > s1Len * n1 || !isValid(s1, s2)) return 0;
  // 如果能构成，那么计算出比例
  // 例如m个s1恰好能构成n个s2，一般而言，这种比例循环节有关
  // 查找循环节
  const recall = new Map(); // 记录以s2字符串索引为key，以s1数量为value 的值
  let s1cnt = 0,
    index = 0,
    s2cnt = 0;
  // 假设遍历了s1cnt个s1，此时匹配到了第s2cnt个s2中的第index个字符
  // 如果在之前的匹配过程中，已经遍历到了s1cnt个s1时，匹配到的是第s2cnt个s2中同样的index个字符
  // 那么就找到了循环节，用(s1cnt'，s2cnt'，index)和(s1cnt，s2cnt，index)表示两次包含相同index的匹配结果
  // hash中的映射key就是index，值就是s1cnt'和s2cnt'二元组
  // 循环节就是：前s1cnt'个s1包含了s2cnt'个s2
  //  以后的每(s1cnt - s1cnt')个s1包含了(s2cnt - s2cnt')个s2
  //  还会剩下 (n1 - s1cnt') % (s1cnt - s1cnt')个s1
  let preLoop = new Array(2).fill(0);
  let inLoop = new Array(2).fill(0);
  while (true) {
    ++s1cnt;
    // 遍历一次s1，查找是否存在循环节
    for (let i = 0; i < s1Len; i++) {
      if (s1[i] === s2[index]) {
        index++;
        if (index === s2Len) {
          s2cnt++;
          index = 0;
        }
      }
    }
    // 还没有找到循环节，s1就遍历完了（说明至少一个s1不能构成循环节）
    if (s1cnt === n1) {
      // 特殊情况
      return Math.floor(s2cnt / n2);
    }
    // 记录index
    if (recall.has(index)) {
      const [s1cntPrime, s2cntPrime] = recall.get(index);
      // 前s1cnt'个s1包含了s2cnt'个s2
      preLoop = [s1cntPrime, s2cntPrime];
      // 找到的循环节
      inLoop = [s1cnt - s1cntPrime, s2cnt - s2cntPrime];
      break;
    } else {
      recall.set(index, [s1cnt, s2cnt]);
    }
  }
  let ans = preLoop[1] + Math.floor((n1 - preLoop[0]) / inLoop[0]) * inLoop[1];
  let rest = (n1 - preLoop[0]) % inLoop[0];
  for (let i = 0; i < rest; i++) {
    for (let j = 0; j < s1Len; j++) {
      if (s1[j] === s2[index]) {
        index++;
        if (index === s2Len) {
          ans++;
          index = 0;
        }
      }
    }
  }
  return Math.floor(ans / n2);
};

/**
 *
 * @param {string} s1
 * @param {string} s2
 */
function isValid(s1, s2) {
  const set1 = new Set(s1.split(""));
  for (const ch of s2) if (!set1.has(ch)) return false;
  return true;
}

//  bdcda  bdcda  bdcda bdcda  bdcda bdcda
//  daddc
// 1 => 0
// 2 => 0
// 3 => 1
// 4 => 1
// 5 => 2
// 6 => 2
// 7 => 3
// [1,0]
// [5,3]

// 0 + (20 - 1) / 5 * 3
