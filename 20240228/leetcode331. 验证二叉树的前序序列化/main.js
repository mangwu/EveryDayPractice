// 序列化二叉树的一种方法是使用 前序遍历 。当我们遇到一个非空节点时，我们可以记录下这个节点的值。如果它是一个空节点，我们可以使用一个标记值记录，例如 #。

// 例如，上面的二叉树可以被序列化为字符串 "9,3,4,#,#,1,#,#,2,#,6,#,#"，其中 # 代表一个空节点。

// 给定一串以逗号分隔的序列，验证它是否是正确的二叉树的前序序列化。编写一个在不重构树的条件下的可行算法。

// 保证 每个以逗号分隔的字符或为一个整数或为一个表示 null 指针的 '#' 。

// 你可以认为输入格式总是有效的

// 例如它永远不会包含两个连续的逗号，比如 "1,,3" 。
// 注意：不允许重建树。

/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function (preorder) {
  const arr = preorder.split(",");
  // 前序遍历，先左节点，后右节点
  const stack = [];
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    if (arr[i] !== "#") {
      // 一个新节点
      stack.push(arr[i]);
    } else {
      // 空节点 #，上一个只能是一个新节点或者左空节点
      const top = stack.pop();
      if (top && top === "#") {
        // 找到一个叶子节点
        let leaf = stack.pop();
        if (!leaf) return false;
        stack.push("#"); // 叶子节点当作已遍历过的空节点
        while (stack.length > 1 && stack[stack.length - 2] === "#") {
          stack.pop();
          stack.pop();
          leaf = stack.pop();
          if (!leaf) return false;
          stack.push("#");
        }
      } else if (top) {
        stack.push(top);
        stack.push("#");
      } else stack.push("#");
    }
  }
  return stack.length === 1 && stack[0] === "#";
};

/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function (preorder) {
  const arr = preorder.split(",");
  const stack = [1];
  // 槽位计算：如果新增一个#，则减少一个槽位，如果新增一个数字则减去一个槽位但增加了两个槽位
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    if (!stack.length) return false;
    let top = stack.pop();
    top--;
    if (top > 0) stack.push(top);
    if (arr[i] !== "#") {
      stack.push(2);
    }
  }
  return stack.length === 0;
};

/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function (preorder) {
  const arr = preorder.split(",");
  // 槽位计算：如果新增一个#，则减少一个槽位，如果新增一个数字则减去一个槽位但增加了两个槽位
  let slots = 1;
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    if (!slots) return false;
    slots--;
    if (arr[i] !== "#") {
      slots += 2;
    }
  }
  return slots === 0;
};
