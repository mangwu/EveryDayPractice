// 在本题中，我们需要处理地址信息，其由
// I
// P
// IP 地址和子网掩码组成，这两者均形如
// "*.*.*.*"
// "*.*.*.*" ，由四段数字组成，每段数字之间以点分隔。

// 我们定义五类
// I
// P
// IP 地址：
// ∙
//
// ∙A类：
// "1.0.0.0"-"126.255.255.255"
// "1.0.0.0"-"126.255.255.255" ；
// ∙
//
// ∙B类：
// "128.0.0.0"-"191.255.255.255"
// "128.0.0.0"-"191.255.255.255" ；
// ∙
//
// ∙C类：
// "192.0.0.0"-"223.255.255.255"
// "192.0.0.0"-"223.255.255.255" ；
// ∙
//
// ∙D类：
// "224.0.0.0"-"239.255.255.255"
// "224.0.0.0"-"239.255.255.255" ；
// ∙
//
// ∙E类：
// "240.0.0.0"-"255.255.255.255"
// "240.0.0.0"-"255.255.255.255" 。

// 我们定义私有
// IP 地址：
// "10.0.0.0"-"10.255.255.255"
// "172.16.0.0"-"172.31.255.255"
// "192.168.0.0"-"192.168.255.255" 。

// 我们定义合法的子网掩码：
// ∙将
// IP 地址转换为二进制后，必须由若干个连续的
// 1 后跟若干个连续的
// 0 组成；
// ∙例如，
// "1.1.1.5"
// "1.1.1.5" 是一个非法的子网掩码，因为它转换为二进制后为
// 1.1.1.101
// 1.1.1.101 ，中间出现了
// 0 后又出现了
// 1 ；
//
// ∙注意，全为
// 1 或全为
// 0 的子网掩码也是非法的。

// 现在，你需要分类统计ABCDE类地址的数量、错误
// IP 或错误子网掩码的数量、私有
// IP 的数量。

// 特别地，我们还有以下提示：
// ∙
//
// ∙类似于
// "0.*.*.*"
// "0.*.*.*" 和
// "127.*.*.*"
// "127.*.*.*" 的
// IP 地址不属于上述输入的任意一类，也不属于不合法
// IP 地址；
// ∙
// ∙一个
// IP 地址既可以是私有
// IP 地址，也可以是五类
// IP 地址之一，计数时请分别计入。

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const asyncFnc = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await asyncFnc())) {
    inputs.push(line.split("~"));
  }
  // 检查合法ip的方法
  const ipIsPass = (ip) => {
    // 只有数字，点
    if (/[^0-9.]/.test(ip)) return false;
    const arr = ip.split(".");
    if (arr.length !== 4) return false; // 必须是四位
    // 每一位数字在0-255之间，大于0不能以0开头
    for (const item of arr) {
      if (item.length === 0) return false;
      const num = parseInt(item);
      if (num < 0 || num > 255) return false;
      // 大于0则不能以0开头
      if (num > 0 && item.startsWith(0)) return false;
    }
    return true;
  };
  // 检查合法掩码

  const maskCodeIsPass = (mask) => {
    if (!ipIsPass(mask)) return false; // 首先要是合法IP
    const arr = mask.split(".");
    // 转化成二进制计算
    const binaryStr = arr
      .map((v) => parseInt(v).toString(2).padStart(8, "0"))
      .join("");
    // 前面为连续1，后面为连续0
    return /^1+0+$/.test(binaryStr);
  };

  const a = [],
    b = [],
    c = [],
    d = [],
    e = [],
    err = [],
    private = [];
  for (const [ip, mask] of inputs) {
    // 获取ip的第一个地址,判断是否是不计数的
    const ips = ip.split(".");
    const first = ips[0];
    if (first == 0 || first == 127) continue;
    if (ipIsPass(ip) && maskCodeIsPass(mask)) {
      const second = ips[1];
      // 私网ip
      if (
        first == 10 ||
        (first == 172 && second >= 16 && second <= 31) ||
        (first == 192 && second == 168)
      ) {
        private.push(ip);
      }
      // a,b,c,d,e类
      if (first >= 1 && first <= 126) a.push(ip);
      else if (first >= 128 && first <= 191) b.push(ip);
      else if (first >= 192 && first <= 223) c.push(ip);
      else if (first >= 224 && first <= 239) d.push(ip);
      else if (first >= 240 && first <= 255) e.push(ip);
    } else {
      err.push(ip);
    }
  }
  console.log(
    [
      a.length,
      b.length,
      c.length,
      d.length,
      e.length,
      err.length,
      private.length,
    ].join(" ")
  );
}
solution();
