// 在一条无限长的公路上有 n 辆汽车正在行驶。汽车按从左到右的顺序按从 0 到 n - 1 编号，每辆车都在一个 独特的 位置。

// 给你一个下标从 0 开始的字符串 directions ，长度为 n 。directions[i] 可以是 'L'、'R' 或 'S' 分别表示第 i 辆车是向 左 、向 右 或者 停留 在当前位置。每辆车移动时 速度相同 。

// 碰撞次数可以按下述方式计算：

// 当两辆移动方向 相反 的车相撞时，碰撞次数加 2 。
// 当一辆移动的车和一辆静止的车相撞时，碰撞次数加 1 。
// 碰撞发生后，涉及的车辆将无法继续移动并停留在碰撞位置。除此之外，汽车不能改变它们的状态或移动方向。

// 返回在这条道路上发生的 碰撞总次数 。

/**
 * @param {string} directions
 * @return {number}
 */
var countCollisions = function (directions) {
  const stack = [];
  let ans = 0;
  for (const dir of directions) {
    let top = stack[stack.length - 1];
    if (dir === "L") {
      if (top === "S") ans++;
      else if (top === "R") {
        ans += 2;
        stack.pop();
        while (stack.length && stack[stack.length - 1] === "R") {
          stack.pop();
          ans++;
        }
        stack.push("S");
      } else stack.push(dir);
    } else if (dir === "S") {
      while (top === "R") {
        ans++;
        stack.pop();
        top = stack[stack.length - 1];
      }
      stack.push(dir);
    } else stack.push(dir);
  }
  return ans;
};

/**
 * @param {string} directions
 * @return {number}
 */
var countCollisions = function (directions) {
  // 每个车至多碰撞一次，将左右不会碰撞的车移除，结果就是剩下的非静止的车的数量
  directions = directions.replace(new RegExp("^[L]+"), "");
  directions = directions.replace(new RegExp("[R]+$"), "");
  return directions.split("").filter((v) => v !== "S").length;
};

/**
 * @param {string} directions
 * @return {number}
 */
var countCollisions = function (directions) {
  // 每个车至多碰撞一次，将左右不会碰撞的车移除，结果就是剩下的非静止的车的数量
  let ans = 0;
  const n = directions.length;
  let left = 0;
  let right = n - 1;
  while (directions[left] === "L") left++;
  while (directions[right] === "R") right--;
  while (left < right) {
    if (directions[left] !== "S") ans++;
    if (directions[right] !== "S") ans++;
    left++;
    right--;
  }
  if (left === right && directions[left] !== "S") ans++;
  return ans;
};
