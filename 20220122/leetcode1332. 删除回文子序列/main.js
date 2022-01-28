// 给你一个字符串 s，它仅由字母 'a' 和 'b' 组成。每一次删除操作都可以从 s 中删除一个回文 子序列。

// 返回删除给定字符串中所有字符（字符串为空）的最小删除次数。

// 「子序列」定义：如果一个字符串可以通过删除原字符串某些字符而不改变原字符顺序得到，那么这个字符串就是原字符串的一个子序列。

// 「回文」定义：如果一个字符串向后和向前读是一致的，那么这个字符串就是一个回文。

/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function (s) {
  // 结果要么2要么1，
  // 子序列不需要连续，可以是间隔的
  // 且只有a，b两种情况，整个序列是否回文即可，如果回文就是1，不回文返回2即可
  // 提取所有的a，那么剩下的所有b必定是回文的
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    if (s[i] !== s[j]) {
      return 2;
    }
    i++;
    j--;
  }
  return 1;
};

/**
 * @author mangwu 2022-01-25 16:09:41
 * @class PlalindromeString
 * @description 回文子串方法
 */
class PlalindromeString {
  /**
   * @description 判断一个字符串是否回文
   * @param {String} s 字符串
   * @returns {Boolean}
   */
  isPlalindrome(s) {
    const len = s.length;
    for (let i = 0; i < len / 2; i++) {
      if (s[i] != s[len - i - 1]) {
        return false;
      }
    }
    return true;
  }
  /**
   * @description 在每个字符串中间加入"#"
   * @param {String} s 字符串
   * @returns {Stirng} s 处理过的字符串
   */
  preHandleString(s) {
    return "#" + s.split("").join("#") + "#";
  }
  /**
   * @description 获取最长回文子串
   * @param {String} s 预处理过的字符串
   * @returns {String}
   */
  findLongestPlalindromeString(s) {
    // 先预处理字符串
    let str = this.preHandleString(s);
    // console.log(str);
    // 处理后的字串长度
    const len = str.length;
    // 右边界
    let rightSide = 0;
    // 右边界对应的回文串中心
    let rightSideCenter = 0;
    // 保存以每个字符为中心的回文长度一半（向下取整）
    const halfLenArr = new Array(Math.floor(len / 2)).fill(0);
    // 记录回文中心
    let center = 0;
    // 记录最长回文长度
    let longestHalf = 0;
    for (let i = 0; i < len; i++) {
      // 是否需要中心扩展
      let needCalc = true;
      // 如果在右边界的覆盖之内
      if (rightSide > i) {
        // 计算相对rightSideCenter的对称位置
        let leftCenter = 2 * rightSideCenter - i;
        // 根据回文性质得到的结论
        halfLenArr[i] = halfLenArr[leftCenter];
        // 如果超过了右边界，进行调整
        if (i + halfLenArr[i] > rightSide) {
          halfLenArr[i] = rightSide - i;
        }
        // 如果根据已知条件计算得出的最长回文小于右边界，则不需要扩展了
        if (i + halfLenArr[leftCenter] < rightSide) {
          // 直接推出结论
          needCalc = false;
        }
      }
      // 中心扩展
      if (needCalc) {
        while (i - 1 - halfLenArr[i] >= 0 && i + 1 + halfLenArr[i] < len) {
          if (str[i + 1 + halfLenArr[i]] == str[i - 1 - halfLenArr[i]]) {
            halfLenArr[i]++;
          } else {
            break;
          }
        }
        // 更新右边界及中心
        rightSide = i + halfLenArr[i];
        rightSideCenter = i;
        // 记录最长回文串
        if (halfLenArr[i] > longestHalf) {
          center = i;
          longestHalf = halfLenArr[i];
        }
      }
    }
    // 去掉之前添加的#
    let sb = "";
    for (let i = center - longestHalf + 1; i <= center + longestHalf; i += 2) {
      sb += str[i];
    }
    return [
      sb,
      Math.floor((center - longestHalf + 1) / 2),
      Math.floor((center + longestHalf - 1) / 2),
    ];
  }
}

const ps = new PlalindromeString();
console.log(ps.findLongestPlalindromeString("abbc"));

/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub2 = function (s) {
  // 如果删除的是子字符串,就没有1或者2两种选择了
  // 删除子字符串后，剩余的字符串如果长度不为0，继续删除，知道长度为0
  const ps = new PlalindromeString();
  let ans = 0;
  while (s.length !== 0) {
    const maxPS = ps.findLongestPlalindromeString(s);
    console.log(maxPS);
    s = s.slice(0, maxPS[1]) + s.slice(maxPS[2] + 1);
    console.log(s);
    ans++;
  }
  return ans;
};
// removePalindromeSub2("aabbbbbbb")

// 最大回文
String.prototype.findLongestPlalindromeString = function () {
  // 声明预处理字符串
  let str = "#";
  // 预处理字符 转化为形如 #a#b#a#的形式
  for (let i = 0; i < this.length; i++) {
    str += this[i] + "#";
  }
  // 声明当前最长回文子串的中心和右边界
  let mid = 0,
    right = 0;
  // 声明最长回文子串的中心索引和长度
  let maxLen = 0,
    maxLenMid = 0;
  // 声明保存每个字符为中心的回文字符长度的数组
  const child = [];

  // 遍历处理过的字符串,以每个字符为中心进行扩展
  for (let i = 0; i < str.length; i++) {
    /*
     * 第 i 个字符是否还在右边界内
     *   Math.min(child[2*mid-i],right-i) 解释:这里为什么选两者中小的那个呢？
     *     1、当child[2*mid-i]较小时，说明以 i 点处字符为中心的回文*完全*在(mid,right)区间内，直接附值即可。
     *     2、当child[2*mid-i]较大时，说明以 i 点处字符为中心的回文*至少*在(mid,right)区间内，可能有
     *     超出的能够匹配的字符，所以先附值 right-i,然后再对超出 right 边界的字符一一做对称匹配。
     * 第 i 个字符不在有边界内，赋值1，然后正常扩展
     * 算出 child[i] 的值了，下面的 while 循环就是对接下来的字符做匹配操作的
     */
    child[i] = i < right ? Math.min(child[2 * mid - i], right - i) : 1;
    // 进行扩展 对于完全在右边界内的中心字符索引，此扩展一次都不会执行，而对于
    while (str.charAt(i + child[i]) == str.charAt(i - child[i])) {
      child[i]++;
    }
    // 是否更新右边界, 根据最新得到边界进行比较
    if (right < child[i] + i) {
      mid = i;
      right = child[i] + 1;
    }
    // 是否更新最长回文子串
    if (maxLen < child[i]) {
      maxLen = child[i];
      maxLenMid = i;
    }
  }
  // 根据两个遍历maxLen和maxLenMid得到最长回文子串
  return this.substring((maxLenMid + 1 - maxLen) / 2, maxLen - 1);
};
