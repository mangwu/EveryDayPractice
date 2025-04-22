/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function (answers) {
  const hash = new Map();
  for (const ans of answers) {
    hash.set(ans, (hash.get(ans) || 0) + 1);
  }
  let res = 0;
  for (const [key, val] of hash) {
    res += Math.ceil(val / (key + 1)) * (key + 1);
  }
};
