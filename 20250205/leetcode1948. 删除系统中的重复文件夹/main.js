// 由于一个漏洞，文件系统中存在许多重复文件夹。给你一个二维数组 paths，其中 paths[i] 是一个表示文件系统中第 i 个文件夹的绝对路径的数组。

// 例如，["one", "two", "three"] 表示路径 "/one/two/three" 。
// 如果两个文件夹（不需要在同一层级）包含 非空且相同的 子文件夹 集合 并具有相同的子文件夹结构，则认为这两个文件夹是相同文件夹。相同文件夹的根层级 不 需要相同。如果存在两个（或两个以上）相同 文件夹，则需要将这些文件夹和所有它们的子文件夹 标记 为待删除。

// 例如，下面文件结构中的文件夹 "/a" 和 "/b" 相同。它们（以及它们的子文件夹）应该被 全部 标记为待删除：
// /a
// /a/x
// /a/x/y
// /a/z
// /b
// /b/x
// /b/x/y
// /b/z
// 然而，如果文件结构中还包含路径 "/b/w" ，那么文件夹 "/a" 和 "/b" 就不相同。注意，即便添加了新的文件夹 "/b/w" ，仍然认为 "/a/x" 和 "/b/x" 相同。
// 一旦所有的相同文件夹和它们的子文件夹都被标记为待删除，文件系统将会 删除 所有上述文件夹。文件系统只会执行一次删除操作。执行完这一次删除操作后，不会删除新出现的相同文件夹。

// 返回二维数组 ans ，该数组包含删除所有标记文件夹之后剩余文件夹的路径。路径可以按 任意顺序 返回。

class Trie {
  constructor(val = undefined) {
    this.children = new Map();
    this.del = false; // 删除标记
    this.val = val; // 文件夹名称
  }
  insert(path) {
    let node = this;
    for (const name of path) {
      const children = node.children;
      if (children.has(name)) {
        node = children.get(name);
      } else {
        children.set(name, new Trie(name));
        node = children.get(name);
      }
    }
  }
}
/**
 * @param {string[][]} paths
 * @return {string[][]}
 */
var deleteDuplicateFolder = function (paths) {
  // 节点的子树结构可以用字符串表示，例如["a","x","y"],["a","z"]，a节点的子树结构可以表示成(x(y))(z)
  // 节点的子树结构用字符串表示后，可以存储在hash表中，对于子树结构字符串表示相同的节点，需要被删除
  // 使用字典树记录文件结构
  const trie = new Trie();
  for (const path of paths) {
    trie.insert(path);
  }
  const folders = new Map(); // 记录具有相同子树字符串的节点
  const dfs = (node) => {
    const children = node.children;
    if (node.children.size === 0) return "(" + node.val + ")";
    const res = [];
    const keys = [];
    for (const [key] of children) {
      keys.push(key);
    }
    keys.sort(); // 使用固定顺序遍历子节点
    for (const key of keys) {
      res.push(dfs(children.get(key)));
    }
    const subTreeStr = res.join("");
    folders.has(subTreeStr)
      ? folders.get(subTreeStr).push(node)
      : folders.set(subTreeStr, [node]);
    return "(" + node.val + subTreeStr + ")";
  };
  dfs(trie);
  // 设置具有相同子树结构节点应该被删除
  for (const [_subTreeStr, nodes] of folders) {
    if (nodes.length > 1) {
      for (const node of nodes) {
        node.del = true;
      }
    }
  }
  // 再次dfs字典树，访问不被删除的节点，记录所有路径
  const path = [];
  const ans = [];
  const dfs2 = (node) => {
    if (node.del) return;
    path.push(node.val);
    ans.push(path.slice());
    for (const [_key, nextNode] of node.children) {
      dfs2(nextNode);
    }
    path.pop();
  };
  for (const [_key, node] of trie.children) {
    dfs2(node);
  }
  return ans;
};
