// 给定一个经过编码的字符串，返回它解码后的字符串。

// 编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。

// 你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。

// 此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const n = s.length;
  const stack = []; // 使用[2,"abc"]表示abc出现的次数
  for (let i = 0; i < n; i++) {
    if (isDigit(s[i])) {
      // 是数字
      const [num, end] = getSeriesNum(s, i);
      stack.push(num);
      i = end + 1; //
      stack.push(s[i]); // [
    } else if (s[i] === "]") {
      // 找到上一个[
      const pops = [];
      while (stack.length && stack[stack.length - 1] !== "[") {
        pops.push(stack.pop());
      }
      stack.pop(); // 移出[
      const num = stack.pop(); // 需要称的数字
      while (pops.length) {
        const pop = pops.pop();
        pop[0] *= num;
        stack.push(pop);
      }
    } else {
      // 是字母
      let cur = s[i++];
      while (i < n && !isDigit(s[i]) && s[i] !== "]" && s[i] !== "[") {
        cur += s[i++];
      }
      i--;
      stack.push([1, cur]);
    }
  }
  return stack.reduce((pre, cur) => pre + cur[1].repeat(cur[0]), "");
};

/**
 * @description 是不是数字字符
 * @param {string} ch
 */
function isDigit(ch) {
  return parseInt(ch).toString() === "NaN" ? false : true;
}

/**
 * @description 获取字符中的数字
 * @param {string} s
 * @param {number} i
 * @returns {[number, number]} // [num, idx]
 */
function getSeriesNum(s, i) {
  let isNegtive = false;
  if (s[i] === "-") {
    isNegtive = true;
    i++;
  }
  let cur = 0;
  while (isDigit(s[i])) {
    cur = cur * 10 + parseInt(s[i++]);
  }
  return [isNegtive ? -cur : cur, i - 1];
}
