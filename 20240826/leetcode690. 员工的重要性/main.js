// 你有一个保存员工信息的数据结构，它包含了员工唯一的 id ，重要度和直系下属的 id 。

// 给定一个员工数组 employees，其中：

// employees[i].id 是第 i 个员工的 ID。
// employees[i].importance 是第 i 个员工的重要度。
// employees[i].subordinates 是第 i 名员工的直接下属的 ID 列表。
// 给定一个整数 id 表示一个员工的 ID，返回这个员工和他所有下属的重要度的 总和。

/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function (employees, id) {
  // 先找到ID为id的员工
  const hash = new Map();
  let employee = null;
  for (const e of employees) {
    if (e.id === id) employee = e;
    hash.set(e.id, e);
  }
  let res = 0;
  let queue = [employee];
  while (queue.length) {
    const nxt = [];
    for (const q of queue) {
      res += q.importance;
      for (const next of q.subordinates || []) {
        nxt.push(hash.get(next));
      }
    }
    queue = nxt;
  }
  return res;
};
