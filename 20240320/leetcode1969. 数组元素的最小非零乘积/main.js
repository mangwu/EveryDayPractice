// 给你一个正整数 p 。你有一个下标从 1 开始的数组 nums ，这个数组包含范围 [1, 2p - 1] 内所有整数的二进制形式（两端都 包含）。你可以进行以下操作 任意 次：

// 从 nums 中选择两个元素 x 和 y  。
// 选择 x 中的一位与 y 对应位置的位交换。对应位置指的是两个整数 相同位置 的二进制位。
// 比方说，如果 x = 1101 且 y = 0011 ，交换右边数起第 2 位后，我们得到 x = 1111 和 y = 0001 。

// 请你算出进行以上操作 任意次 以后，nums 能得到的 最小非零 乘积。将乘积对 109 + 7 取余 后返回。

// 注意：答案应为取余 之前 的最小值。
const MOD = 10n ** 9n + 7n;

/**
 * @param {number} p
 * @return {number}
 */
var minNonZeroProduct = function (p) {
  // 共有 2 ^ (p-1) - 1 个2 ** p - 2相乘，最后再乘以2 ^ p - 1
  let ans = 2n ** BigInt(p) - 1n;
  const cache = new Map();
  const dfs = (base, num) => {
    if (num === 0n) return 1n;
    if (num === 1n) return base;
    if (cache.has(num)) return cache.get(num);
    if (num % 2n === 0n) {
      const res = dfs(base, num / 2n) ** 2n % MOD;
      cache.set(num, res);
      return res;
    } else {
      const res =
        (dfs(base, (num + 1n) / 2n) * dfs(base, (num - 1n) / 2n)) % MOD;
      cache.set(num, res);
      return res;
    }
  };
  return (ans * dfs(2n ** BigInt(p) - 2n, 2n ** BigInt(p - 1) - 1n)) % MOD;
};

// [001, 010, 011, 100, 101, 110, 111]
//        |    |    |    |
// 101 <=> 010    5   2  =>  1  6
// 100 <=> 011    4   3  =>  6  1

// 0001 0010 0011 0100 0101 0110 0111 1000 1001 1010 1011 1100 1101 1110 1111
//       |    |     |    |   |    |    |    |    |    |    |    |

// p => 4 会有6对交换，共有6个14相乘
// p => 3 会有2对交换，共有2个6相乘
// p => 5 会有14对交换，共有14个30相乘
// p 会有2**(p-1) - 2对交换，共有2**(p-1) - 2个2 ** p - 2相乘

/**
 * @param {number} p
 * @return {number}
 */
var minNonZeroProduct = function (p) {
  // 共有 2 ^ (p-1) - 1 个2 ** p - 2相乘，最后再乘以2 ^ p - 1
  // 递归的快速幂公式
  const mod = 10 ** 9 + 7;
  let res = (2 ** p - 1) % mod;
  res = (res * fastPow(2 ** p - 2, 2 ** (p - 1) - 1, mod)) % mod;
  return res;
};

/**
 * @description 模意义下取幂
 * @param {number} a 基数
 * @param {number} b 指数
 * @param {number} mod 取模
 * @returns {number}
 */
function fastPow(a, b, mod) {
  let res = 1;
  a %= mod;
  while (b > 0) {
    if (b & 1) res = (res * a) % mod; // 奇数，
    a = (a * a) % mod;
    b = Math.floor(b / 2);
  }
  return res;
}
// 因为(10 * 9 + 7)**2超过Number.MAX_SAFE_INTER
