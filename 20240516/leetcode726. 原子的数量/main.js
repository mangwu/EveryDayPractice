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
  const hash = new Map();
  const stack = [];
  const n = formula.length;
  for (let i = 0; i < n; i++) {
    const ch = formula[i];
    if (isUpperAplha(ch)) {
      const [atomName, end1] = getAtomName(formula, i);
      i = end1 + 1;
      // 下一个是数字
      if (isDigit(formula[i])) {
        const [num, end2] = getNumber(formula, i);
        stack.push([atomName, num]);
        i = end2;
      } else {
        stack.push([atomName, 1]);
        i--;
      }
    } else if (ch === ")") {
      const pops = [];
      let num = 1;
      if (isDigit(formula[i + 1])) {
        const [curNum, end] = getNumber(formula, i + 1);
        i = end;
        num = curNum;
      }
      while (stack.length && stack[stack.length - 1] !== "(") {
        const curPop = stack.pop();
        curPop[1] *= num;
        pops.push(curPop);
      }
      stack.pop();
      while (pops.length) {
        stack.push(pops.pop());
      }
    } else stack.push(ch); // (
  }
  for (const [atomName, num] of stack) {
    hash.set(atomName, (hash.get(atomName) | 0) + num);
  }
  return [...hash]
    .map((v) => v[0])
    .sort()
    .map((v) => v + (hash.get(v) > 1 ? hash.get(v) : ""))
    .join("");
};

/**
 * @description 获取原子的名称
 * @param {string} str
 * @param {number} start
 * @returns {[string, number]}
 */
function getAtomName(str, start) {
  const res = [str[start++]];
  const n = str.length;
  while (start < n && isLowerAplha(str[start])) {
    res.push(str[start++]);
  }
  return [res.join(""), start - 1];
}
/**
 * @description 获取数字
 * @param {string} str
 * @param {number} start
 * @returns {[number,number]}
 */
function getNumber(str, start) {
  let res = 0;
  const n = str.length;
  while (start < n && isDigit(str[start])) {
    res = res * 10 + parseInt(str[start++]);
  }
  return [res, start - 1];
}

/**
 * @description 是不是大写字母
 * @param {string} ch
 * @returns {boolean}
 */
function isUpperAplha(ch) {
  const code = ch.charCodeAt();
  return code >= 65 && code <= 90;
}

/**
 * @description 是不是小写字母
 * @param {string} ch
 * @returns {boolean}
 */
function isLowerAplha(ch) {
  const code = ch.charCodeAt();
  return code >= 97 && code <= 122;
}

/**
 * @description 是不是数字
 * @param {string} ch
 * @returns {boolean}
 */
function isDigit(ch) {
  return !isNaN(parseInt(ch));
}
console.log(countOfAtoms("Mg(OH)21"));
