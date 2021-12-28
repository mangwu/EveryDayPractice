/**
 * @description leetcode472 连接词
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-12-28 19:12:39
 * @copyright © 2021 wangzhihao, All rights reserved.
 */

//  给你一个 不含重复 单词的字符串数组 words ，请你找出并返回 words 中的所有 连接词 。

//  连接词 定义为：一个完全由给定数组中的至少两个较短单词组成的字符串。

// 这一题和leetcode43有相识之处，即判断一个单词能否由词典中的单词组成

/**
 * @description dfs解法
 */
const wordBreak = (s, wordDict) => {
  const len = s.length;
  const wordSet = new Set(wordDict);

  const canBreak = (start) => {
    // 判断从start到末尾的子串能否break
    if (start == len) {
      //指针越界，s一步步成功划分为单词，才走到越界这步，现在没有剩余子串
      return true; //返回真，结束递归
    }
    for (let i = start + 1; i <= len; i++) {
      //指针i去划分两部分，for枚举出当前所有的选项i
      const prefix = s.slice(start, i); // 切出的前缀部分
      if (wordSet.has(prefix) && canBreak(i)) {
        // 前缀部分是单词，且剩余子串能break，返回真
        return true;
      } // 如果前缀部分不是单词，就不会执行canBreak(i)。进入下一轮迭代，再切出一个前缀串，再试
    }
    return false; // 指针i怎么划分，都没有返回true，则返回false
  };

  return canBreak(0); // 递归的入口，从0到末尾的子串能否break
};

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function (words) {
  // 1. 假设能够组成words中其他单词的小单词放在一个数组中
  // 2. 只要遍历剩下的单词是否能够由小单词组成，如果可以，就作为ans的一个输出
  // 3. 否则也是不能由其他单词组成的小单词
  // 4. 因为每个单词不一样，所以不用考虑一样的情况
  // 5. 至少由两个单词构成，长度最小的两个单词必然不会被其他单词构成
  // 6. 先安装长度排序words，选出长度最小的两个单词作为组成其他单词的数组
  // 7. 遍历即可
  // 8. 重点即是leetcode43，判断一个单词能否由词典中的单词组成
  // 9. 使用动态规划，判断，word[i]是word的子串substring
  // 10. 如果word[i]能被字典中的单词表达，就知道了那么dp[i]就是真
  // 11. 继续迭代(i++)
  // 声明能由其他单词组成的数组
  const ans = [];
  // words长度
  const len = words.length;
  if (len <= 2) return ans;
  // 排序
  words.sort((a, b) => a.length - b.length);
  // 声明保存组成单词的数组
  const wordDict = [words[0], words[1]];
  // 从第三个开始遍历
  for (let i = 2; i < len; i++) {
    if (wordBreak(words[i], wordDict)) {
      ans.push(words[i]);
    } else {
      wordDict.push(words[i]);
    }
  }
  return ans;
};

/**
 *
 * @param {string} s 字符串
 * @param {string[]} wordDict 字符串列表
 * @returns {boolean} s能否由wordDict组成
 */
// var wordBreak = function (s, wordDict) {
//   const wordSet = new Set(wordDict);
//   const len = s.length;
//   const dp = new Array(len + 1).fill(false);
//   dp[0] = true;
//   for (let i = 1; i <= len; i++) {
//     for (let j = i - 1; j >= 0; j--) {
//       const suffix = s.slice(j, i);
//       if (wordSet.has(suffix) && dp[j]) {
//         dp[i] = true;
//         break;
//       }
//     }
//   }
//   return dp[len];
// };
console.log(wordBreak("leetcode", ["leet", "cod"]));

console.log(
  findAllConcatenatedWordsInADict([
    "cat",
    "cats",
    "catsdogcats",
    "dog",
    "dogcatsdog",
    "hippopotamuses",
    "rat",
    "ratcatdogcat",
  ])
);
