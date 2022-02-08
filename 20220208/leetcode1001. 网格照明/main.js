/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-02-08 09:33:14                                                  *
 * @LastModifiedDate: 2022-02-08 16:36:25                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022                                                          *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 在大小为 n x n 的网格 grid 上，每个单元格都有一盏灯，最初灯都处于 关闭 状态。

// 给你一个由灯的位置组成的二维数组 lamps ，其中 lamps[i] = [rowi, coli] 表示 打开 位于 grid[rowi][coli] 的灯。即便同一盏灯可能在 lamps 中多次列出，不会影响这盏灯处于 打开 状态。

// 当一盏灯处于打开状态，它将会照亮 自身所在单元格 以及同一 行 、同一 列 和两条 对角线 上的 所有其他单元格 。

// 另给你一个二维数组 queries ，其中 queries[j] = [rowj, colj] 。对于第 j 个查询，如果单元格 [rowj, colj] 是被照亮的，则查询结果为 1 ，否则为 0 。在第 j 次查询之后 [按照查询的顺序] ，关闭 位于单元格 grid[rowj][colj] 上及相邻 8 个方向上（与单元格 grid[rowi][coli] 共享角或边）的任何灯。

// 返回一个整数数组 ans 作为答案， ans[j] 应等于第 j 次查询 queries[j] 的结果，1 表示照亮，0 表示未照亮。

// 四周
const DIRS = [
  [0, 0],
  [-1, -1],
  [0, -1],
  [1, -1],
  [-1, 0],
  [1, 0],
  [-1, 1],
  [0, 1],
  [1, 1],
];
/**
 * @param {number} n
 * @param {number[][]} lamps
 * @param {number[][]} queries
 * @return {number[]}
 */
var gridIllumination2 = function (n, lamps, queries) {
  // 此题的关键在于关灯操作后灯的变化如何处理
  // 如果关灯操作的8个位置没有灯源，那么灯的开闭状态是没有任何变化的
  // 如果关灯操作的8个位置中有灯源，那么实际上会影响的是该灯源的对角和行列
  // 由此引申出一个叠加灯的概念，如果该位置的灯由两个灯源照亮，那么一个灯熄灭了，另一个仍然影响它，它还是亮的
  // 使用一个数组表示n * n 灯的开闭状态，为空则表示该位置无任何灯源，为0则表示该位置曾经有灯源，被关闭了，为x，则表示该位置有x个灯源照亮它
  // 更细化的，在使用灯源渲染其它位置时，如果此处已经有了一个灯源就不必再需要添加一个灯源了，结果是一样的
  // 除此之外可以使用1.5表示灯源，便于再queries时对该处是否有灯源进行判断
  // 声明ans
  const ans = [];
  // 声明灯的开闭状态
  const switchs = [];
  for (let i = 0; i < n; i++) {
    switchs[i] = new Array(n).fill(0);
  }
  // 遍历lamps，对switchs进行开启
  for (const lamp of lamps) {
    const x = lamp[0];
    const y = lamp[1];
    const sw = switchs[x][y];
    // 如果此处有灯源可以跳过本轮渲染
    if (sw !== Math.floor(sw)) {
      continue;
    }
    // 没有灯源添加灯源和其它受影响灯
    // 横向和竖向
    for (let i = 0; i < n; i++) {
      switchs[x][i]++;
      switchs[i][y]++;
    }
    // 灯源处重置
    switchs[x][y] = sw + 1.5;
    // 斜向
    // 右下
    let x1 = x;
    let y1 = y;
    while (++x1 < n && ++y1 < n) {
      switchs[x1][y1]++;
    }
    // 左上
    let x2 = x;
    let y2 = y;
    while (--x2 >= 0 && --y2 >= 0) {
      switchs[x2][y2]++;
    }
    // 右上
    let x3 = x;
    let y3 = y;
    while (++x3 < n && --y3 >= 0) {
      switchs[x3][y3]++;
    }
    // 左下
    let x4 = x;
    let y4 = y;
    while (++y4 < n && --x4 >= 0) {
      switchs[x4][y4]++;
    }
  }
  console.log(switchs);
  // 遍历queries
  for (const querie of queries) {
    const i = querie[0];
    const j = querie[1];
    // 入队
    if (switchs[i][j]) {
      // 有值且不为0
      ans.push(1);
    } else {
      ans.push(0);
    }
    // 关灯
    for (const dir of DIRS) {
      const x = i + dir[0];
      const y = j + dir[1];
      // 在范围内且存在灯源
      if (
        x >= 0 &&
        y >= 0 &&
        x < n &&
        y < n &&
        switchs[x][y] !== Math.floor(switchs[x][y])
      ) {
        // 关闭灯源及其渲染部分
        // 横向和竖向
        for (let i = 0; i < n; i++) {
          switchs[x][i]--;
          switchs[i][y]--;
        }
        // 灯源处重置
        switchs[x][y] += 0.5;
        // 斜向
        // 右下
        let x1 = x;
        let y1 = y;
        while (++x1 < n && ++y1 < n) {
          switchs[x1][y1]--;
        }
        // 左上
        let x2 = x;
        let y2 = y;
        while (--x2 >= 0 && --y2 >= 0) {
          switchs[x2][y2]--;
        }
        // 右上
        let x3 = x;
        let y3 = y;
        while (++x3 < n && --y3 >= 0) {
          switchs[x3][y3]--;
        }
        // 左下
        let x4 = x;
        let y4 = y;
        while (++y4 < n && --x4 >= 0) {
          switchs[x4][y4]--;
        }
      }
    }
    console.log("----关闭了一次后的灯光----");
    console.log(switchs);
  }
  return ans;
};

// gridIllumination(
//   5,
//   [
//     [0, 0],
//     [0, 0],
//     [0, 2],
//     [0, 1],
//     [0, 4],
//     [2, 4],
//     [2, 4],
//     [2, 3],
//     [4, 4],
//     [4, 3],
//     [3, 1],
//     [3, 2],
//   ],
//   [
//     [0, 0],
//     [0, 0],
//     [1, 4],
//     [1, 4],
//     [2, 2],
//     [2, 2],
//     [3, 3],
//     [3, 3],
//     [1, 2],
//     [2, 4],
//     [0, 4],
//   ]
// );
// 上面的方法结果上是正确的，但是如果n足够大，那么会出现内存不足的情况

// 进一步，不需要使用数组保存每个位置的灯光情况，判断此处的灯光是否有灯光，只需判断灯源是否能辐射到此处即可

/**
 * @param {number} n
 * @param {number[][]} lamps
 * @param {number[][]} queries
 * @return {number[]}
 */
var gridIllumination2 = function (n, lamps, queries) {
  // 使用hash表存储lamps
  // 如果查询的处无灯光，则其四周一定没有灯源，因为如果四周有灯源，那么它一定会有灯光
  // 查询处有灯光，其四周可能有灯源
  // 在判断该处是否有灯光的方法是，同x值是否有灯源，或者同y值是否有灯源，如果都没有，最后再遍历所有灯源，判断绝对减值是否相等

  // 声明ans
  const ans = [];
  // 声明hash
  const hashx = new Map();
  // const hashy = new Map();
  // 遍历lamps，保存hash
  for (const lamp of lamps) {
    // 获取x和y
    const x = lamp[0];
    const y = lamp[1];
    // 添加到两个hash列表中
    if (hashx.has(x)) {
      const set = hashx.get(x);
      set.add(y);
      hashx.set(x, set);
    } else {
      const set = new Set();
      set.add(y);
      hashx.set(x, set);
    }
    // // 以y为key的hash
    // if (hashy.has(y)) {
    //   const set = hashy.get(y);
    //   set.add(x);
    //   hashx.set(y, set);
    // } else {
    //   const set = new Set();
    //   set.add(x);
    //   hashx.set(y, set);
    // }
  }
  console.log(hashx);
  // 遍历 queries 查看是否有灯
  for (const querie of queries) {
    let hasLamp = false;
    const x = querie[0];
    const y = querie[1];
    // 处于横向或者竖向灯光中
    if (hashx.has(x)) {
      hasLamp = true;
    }
    // 检查斜向灯光和竖向
    if (!hasLamp) {
      for (const [a, set] of hashx) {
        if (set.has(y)) {
          hasLamp = true;
        }
        if (hasLamp) break;
        const offset = Math.abs(a - x);
        for (const v of set) {
          if (Math.abs(v - y) == offset) {
            hasLamp = true;
            break;
          }
        }
      }
    }
    // 判断ans
    if (hasLamp) {
      ans.push(1);
      // 消除灯光
      for (const dir of DIRS) {
        const i = x + dir[0];
        const j = y + dir[1];
        if (i >= 0 && j >= 0 && i < n && j < n) {
          if (hashx.has(i)) {
            const set = hashx.get(i);
            set.delete(j);
            hashx.set(i, set);
            if (set.size == 0) {
              hashx.delete(i);
            }
          }
        }
      }
    } else {
      // 无灯光就无需遍历DIRS
      ans.push(0);
    }
    console.log("---每一次查询消除---");
    console.log(`应当消除(${x}, ${y})周围的`);
    console.log(hashx);
  }
  return ans;
};

gridIllumination2(
  5,
  [
    [0, 0],
    [0, 4],
    [2, 2],
    [2, 3],
    [3, 2],
  ],
  [
    [0, 4],
    [0, 1],
    [1, 4],
    [0, 2],
    [0, 3],
    [1, 3],
    [1, 4],
  ]
);

// 上述方法在空间复杂度上是没有问题的，但是在时间复杂度上存在问题，因为需要不断搜选斜向的灯光源

/**
 * @param {number} n
 * @param {number[][]} lamps
 * @param {number[][]} queries
 * @return {number[]}
 */
var gridIllumination3 = function (n, lamps, queries) {
  // 斜向的灯光源的判断使用遍历hash的方式时间复杂度会骤升
  // 需要注意到：对于横向的灯光源，只需要考虑是否存在与y值相同的灯光源
  // 对于竖向的灯光源，只需要考虑到是否存在与x值相同的灯光源
  // 而对于斜向灯，在上面的方法中是通过偏移量来计算的，即abs(x - i) === abs(y -j)，则说明斜向存在灯光源
  // 对此上面斜向灯的式子进行简化可以得出 x±y === i±j
  // 所以可以使用x+y 表示左到右斜向上的坐标，如(2, 5) (3, 4) 加起来是相等的，所以比较从左到右的斜向上是否有灯光源，比较x+y即可
  // 使用x - y 表示左到右斜向下的坐标，如(2, 5) (3, 6) x - y都等于-3，所以比较从左到右的斜向下是否有灯光源，比较x+y即可

  // 综上所述需要4和hash表保存x, y, x+y, x-y的个数，使用一个set保存每个灯源点
  // 当灯源点被关闭，操作其对应的x, y, x+y 和x-y hash表，减去1，当减到0时就删除这项

  const hashX = new Map();
  const hashY = new Map();
  const hashXAndY = new Map();
  const hashXSubY = new Map();
  const points = new Set();

  const ans = [];

  // 声明操作方法
  // 更新指定map中的hash值
  function update(map, key, val) {
    // 存在
    if (map.has(key)) {
      let v = map.get(key);
      v = v + val;
      if (v === 0) {
        // v为0时删除
        map.delete(key);
      } else {
        map.set(key, v);
      }
    } else {
      map.set(key, val);
    }
  }
  // 统一更新的操作
  function operate(x, y, diff) {
    // x
    update(hashX, x, diff);
    update(hashY, y, diff);
    update(hashXAndY, x + y, diff);
    update(hashXSubY, x - y, diff);
  }
  // 遍历灯源，添加节点，更新hash表示
  for (const lamp of lamps) {
    const x = lamp[0];
    const y = lamp[1];
    // 添加到节点set
    // 使用这种方法存储灯节点的原因在于存储数组无法判断set无法判断是否存在
    const point = BigInt(x * n + y);
    if (!points.has(point)) {
      points.add(point);
      // 只需要添加一次灯源,无需重复添加
      operate(x, y, 1);
    }
  }
  // 遍历查询点
  for (const querie of queries) {
    const x = querie[0];
    const y = querie[1];
    // 判断是否有灯源辐射
    if (
      hashX.has(x) ||
      hashY.has(y) ||
      hashXAndY.has(x + y) ||
      hashXSubY.has(x - y)
    ) {
      // 存在就添加
      ans.push(1);
      // 遍历消除节点
      for (const dir of DIRS) {
        const i = x + dir[0];
        const j = y + dir[1];
        if (i >= 0 && j >= 0 && i < n && j < n) {
          // 判断所有灯源中是否存在
          const point = BigInt(i * n + j);
          if (points.has(point)) {
            // 删除灯源
            points.delete(point);
            // 更新hash
            operate(i, j, -1);
          }
        }
      }
    } else {
      // 不存在辐灯源辐射
      ans.push(0);
    }
  }
  return ans;
};
