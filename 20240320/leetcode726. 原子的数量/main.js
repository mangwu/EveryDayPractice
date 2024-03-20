// 给你一个字符串化学式 formula ，返回 每种原子的数量 。

// 原子总是以一个大写字母开始，接着跟随 0 个或任意个小写字母，表示原子的名字。

// 如果数量大于 1，原子后会跟着数字表示原子的数量。如果数量等于 1 则不会跟数字。

// 例如，"H2O" 和 "H2O2" 是可行的，但 "H1O2" 这个表达是不可行的。
// 两个化学式连在一起可以构成新的化学式。

// 例如 "H2O2He3Mg4" 也是化学式。
// 由括号括起的化学式并佐以数字（可选择性添加）也是化学式。

// 例如 "(H2O2)" 和 "(H2O2)3" 是化学式。
// 返回所有原子的数量，格式为：第一个（按字典序）原子的名字，跟着它的数量（如果数量大于 1），然后是第二个原子的名字（按字典序），跟着它的数量（如果数量大于 1），以此类推。

/**
 * @param {string} formula
 * @return {string}
 */
var countOfAtoms = function (formula) {
  // 栈
  const stack = [];
  const n = formula.length;
  for (let i = 0; i < n; i++) {
    if (isChNumber(formula[i])) {
      // 是数字，需要计算出数字，对括号中的元素加倍
      let cur = parseInt(formula[i]);
      while (i + 1 < n && isChNumber(formula[i + 1])) {
        cur = cur * 10 + parseInt(formula[++i]);
      }
      const tempStack = [];
      stack.pop(); // 弹出 ")"
      while (stack[stack.length - 1] !== "(") {
        const top = stack.pop();
        top[1] *= cur;
        tempStack.push(top);
      }
      stack.pop(); // 弹出 "("
      while (tempStack.length) {
        stack.push(tempStack.pop());
      }
    } else if (isBracket(formula[i])) {
      // 是括号
      stack.push(formula[i]);
    } else {
      // 是元素，首先判断是否是二字元素
      let element = formula[i];
      if (isSmallCh(formula[i + 1])) {
        element += formula[++i];
      }
      let num = 1;
      // 后面接着数字?
      if (isChNumber(formula[i + 1])) {
        num = parseInt(formula[++i]);
        while (i + 1 < n && isChNumber(formula[i + 1])) {
          num = num * 10 + parseInt(formula[++i]);
        }
      }
      stack.push([element, num]);
    }
  }
  console.log(stack);
  const hash = new Map();
  stack.forEach((v) => {
    if (!isBracket(v)) {
      const [ele, num] = v;
      hash.set(ele, (hash.get(ele) | 0) + num);
    }
  });
  return [...hash]
    .sort()
    .map(([ele, num]) => (num > 1 ? ele + num : ele))
    .join("");
};

/**
 * @description 字符是否是括号
 * @param {string} ch
 * @returns {boolean}
 */
function isBracket(ch) {
  return ch === "(" || ch === ")";
}
/**
 * @description 字符是否是小写字母
 * @param {string} ch
 * @returns {boolean}
 */
function isSmallCh(ch) {
  return ch && ch.toLocaleUpperCase() !== ch;
}

/**
 * @description 字符是否是数字
 * @param {string} ch
 * @returns {boolean}
 */
function isChNumber(ch) {
  return !isNaN(parseInt(ch));
}
