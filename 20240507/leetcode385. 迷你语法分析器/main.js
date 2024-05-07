// 给定一个字符串 s 表示一个整数嵌套列表，实现一个解析它的语法分析器并返回解析的结果 NestedInteger 。

// 列表中的每个元素只可能是整数或整数嵌套列表

/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {string} s
 * @return {NestedInteger}
 */
var deserialize = function (s) {
  const n = s.length;
  const niStack = [];
  let res = null;
  for (let i = 0; i < n; i++) {
    if (s[i] === "[") {
      // 新建嵌套
      const ni = new NestedInteger();
      if (niStack.length) niStack[niStack.length - 1].add(ni);
      niStack.push(ni);
    } else if (s[i] === "]") {
      // 弹出已结束补充的ni
      res = niStack.pop();
    } else if (s[i] === ",") {
      continue;
    } else {
      // 数字
      const [num, end] = getSeriesNum(s, i);
      i = end;
      const ni = new NestedInteger();
      ni.setInteger(num);
      if (niStack.length) {
        niStack[niStack.length - 1].add(ni);
      } else niStack.push(ni);
    }
  }
  return res || niStack[0];
};

/**
 * @description 获取数字
 * @param {string} s
 * @param {number} start
 * @returns {number[]} [num, end] num是获取到的数字，end是数字的结束索引
 */
function getSeriesNum(s, start) {
  let isNegtive = false;
  if (s[start] === "-") {
    isNegtive = true;
    start++;
  }
  let cur = parseInt(s[start++]);
  while (!isNaN(parseInt(s[start]))) {
    cur = cur * 10 + parseInt(s[start++]);
  }
  return [isNegtive ? -cur : cur, start - 1];
}
