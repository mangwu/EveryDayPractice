// 给定一个编码字符串 S。请你找出 解码字符串 并将其写入磁带。解码时，从编码字符串中 每次读取一个字符 ，并采取以下步骤：

// 如果所读的字符是字母，则将该字母写在磁带上。
// 如果所读的字符是数字（例如 d），则整个当前磁带总共会被重复写 d-1 次。
// 现在，对于给定的编码字符串 S 和索引 K，查找并返回解码字符串中的第 K 个字母。

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var decodeAtIndex = function (s, k) {
  const stack = [];
  let chNum = 0;
  const n = s.length;
  for (let i = 0; i < n; i++) {
    let ch = s[i];
    if (isNumber(ch)) {
      let cur = 1;
      while (i < n && isNumber(s[i])) {
        cur *= parseInt(s[i++]);
        if (chNum * cur >= k) {
          // 可以得出答案
          let remainder = k % chNum;
          if (remainder === 0) {
            const last = stack[stack.length - 1];
            return last[last.length - 1];
          }
          let sum = 0;
          while (remainder) {
            for (let j = 0; j < stack.length; j++) {
              if (j % 2 === 0) {
                // 偶数，是字符串
                sum += stack[j].length;
                if (sum >= remainder) {
                  sum -= stack[j].length;
                  return stack[j][remainder - sum - 1];
                }
              } else {
                // 奇数，数字
                if (sum * stack[j] >= remainder) {
                  // 找到了
                  remainder = remainder % sum;
                  if (remainder === 0) {
                    const pre = stack[j - 1];
                    return pre[pre.length - 1];
                  }
                  sum = 0;
                  break;
                }
                sum *= stack[j];
              }
            }
          }
        }
      }
      stack.push(cur);
      chNum *= cur;
      i--;
    } else {
      ch = "";
      while (i < n && !isNumber(s[i])) {
        chNum++;
        if (chNum === k) return s[i];
        ch += s[i++];
      }
      stack.push(ch);
      i--;
    }
  }
};

function isNumber(ch) {
  return !isNaN(parseInt(ch));
}
