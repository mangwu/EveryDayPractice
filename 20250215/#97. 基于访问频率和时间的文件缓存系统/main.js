// 请设计一个文件缓存系统，该文件缓存系统可以指定缓存的最大值（单位为字节）。

// 文件缓存系统有两种操作：

// 存储文件（put）
// 读取文件（get）
// 操作命令为：

// put fileName fileSize
// get fileName
// 存储文件是把文件放入文件缓存系统中；

// 读取文件是从文件缓存系统中访问已存在，如果文件不存在，则不作任何操作。

// 当缓存空间不足以存放新的文件时，根据规则删除文件，直到剩余空间满足新的文件大小位置，再存放新文件。

// 具体的删除规则为：

// 文件访问过后，会更新文件的最近访问时间和总的访问次数，当缓存不够时，按照第一优先顺序为访问次数从少到多，第二顺序为时间从老到新的方式来删除文件。

// 输入描述

// 第一行为缓存最大值 m（整数，取值范围为 0 < m ≤ 52428800）

// 第二行为文件操作序列个数 n（0 ≤ n ≤ 300000）

// 从第三行起为文件操作序列，每个序列单独一行，文件操作定义为：

// op  file_name  file_size

// file_name 是文件名，file_size 是文件大小

// 输出描述

// 输出当前文件缓存中的文件名列表，文件名用英文逗号分隔，按字典顺序排序，如：

// a,c
// 如果文件缓存中没有文件，则输出NONE

// 备注

// 如果新文件的文件名和文件缓存中已有的文件名相同，则不会放在缓存中
// 新的文件第一次存入到文件缓存中时，文件的总访问次数不会变化，文件的最近访问时间会更新到最新时间
// 每次文件访问后，总访问次数加1，最近访问时间更新到最新时间
// 任何两个文件的最近访问时间不会重复
// 文件名不会为空，均为小写字母，最大长度为10
// 缓存空间不足时，不能存放新文件
// 每个文件大小都是大于 0 的整数

const rl = require("readline").createInterface({
  input: process.stdin,
});
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  const m = parseInt(inputs[0]);
  const n = parseInt(inputs[1]);
  const res = []; // [fileName, fileSize, time, cnt] 名称 尺寸 最近时间 访问次数
  let rest = m; // 剩余空间
  for (let i = 2; i < n + 2; i++) {
    let [op, file_name, file_size = 0] = inputs[i].split(" ");
    if (op === "get") {
      // 访问文件
      const item = res.find((file) => file[0] === file_name);
      if (item) {
        item[3]++; // 增加访问次数
        item[2] = i; // 更新访问时间
      }
    } else {
      file_size = parseInt(file_size);
      // 存储文件 // 查找是否已经存在
      const idx = res.findIndex((item) => item[0] === file_name);
      // 不存在
      if (idx === -1) {
        // 文件过大时，删除文件以腾出空间
        while (rest < file_size && res.length) rest += res.pop()[1];
        if (file_size <= rest) {
          rest -= file_size;
          res.push([file_name, file_size, i, 1]);
        }
      }
    }
    res.sort((a, b) => {
      if (a[3] !== b[3]) return b[3] - a[3]; // 次数少的放后面
      return b[2] - a[2]; // 最远访问的放后面
    });
    console.log(res);
  }
  if (res.length) {
    console.log(
      res
        .map((v) => v[0])
        .sort()
        .join(",")
    );
  } else {
    console.log("NONE");
  }
}

solution();
