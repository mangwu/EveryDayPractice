// 给定一个列表 accounts，每个元素 accounts[i] 是一个字符串列表，其中第一个元素 accounts[i][0] 是 名称 (name)，其余元素是 emails 表示该账户的邮箱地址。

// 现在，我们想合并这些账户。如果两个账户都有一些共同的邮箱地址，则两个账户必定属于同一个人。请注意，即使两个账户具有相同的名称，它们也可能属于不同的人，因为人们可能具有相同的名称。一个人最初可以拥有任意数量的账户，但其所有账户都具有相同的名称。

// 合并账户后，按以下格式返回账户：每个账户的第一个元素是名称，其余元素是 按字符 ASCII 顺序排列 的邮箱地址。账户本身可以以 任意顺序 返回。

/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {
  const n = accounts.length;
  const visited = new Array(n).fill(false);
  const ans = [];
  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;
    const curRes = new Set(accounts[i].slice(1));
    const aAccount = accounts[i];
    for (let j = i + 1; j < n; j++) {
      if (visited[j]) continue;
      const bAccount = accounts[j];
      const len = bAccount.length;
      if (aAccount[0] === bAccount[0]) {
        let flag = false;
        for (let k = 1; k < len; k++) {
          if (curRes.has(bAccount[k])) {
            flag = true;
            break;
          }
        }
        if (flag) {
          visited[j] = true;
          for (let k = 1; k < len; k++) curRes.add(bAccount[k]);
        }
      }
    }
    const arr = [...curRes].sort();
    ans.push([aAccount[0], ...arr]);
  }
  return ans;
};

class Dqueue {
  constructor() {
    this.items = {};
    this.lowest = 0;
    this.highest = 1;
  }
  size() {
    return this.highest - this.lowest - 1;
  }
  isEmpty() {
    return this.size() === 0;
  }
  enqueueFront(value) {
    this.items[this.lowest--] = value;
  }
  enqueueBack(value) {
    this.items[this.highest++] = value;
  }
  dequeueFront() {
    if (this.isEmpty()) return undefined;
    const res = this.items[++this.lowest];
    delete this.items[this.lowest];
    return res;
  }
  dequeueBack() {
    if (this.isEmpty()) return undefined;
    const res = this.items[--this.highest];
    delete this.items[this.highest];
    return res;
  }
}

/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {
  const hash = new Map();
  for (const account of accounts) {
    const [name, ...email] = account;
    if (hash.has(name)) {
      hash.get(name).enqueueBack(new Set([...email]));
    } else {
      const dqueue = new Dqueue();
      dqueue.enqueueBack(new Set([...email]));
      hash.set(name, dqueue);
    }
  }
  const ans = [];
  for (const [name, emailQueues] of hash) {
    while (!emailQueues.isEmpty()) {
      let curSet = emailQueues.dequeueFront();
      let size = emailQueues.size();
      let flag = true; // 本次是否完全没有相同交集
      while (size || !flag) {
        const nextSet = emailQueues.dequeueFront();
        if (hasSameEmail(curSet, nextSet)) {
          for (const item of nextSet) curSet.add(item);
          flag = false;
        } else {
          emailQueues.enqueueBack(nextSet);
        }
        size--;
        if (size === 0 && flag) break;
        else if (size === 0) {
          // 进行下一次循环
          size = emailQueues.size();
          flag = true;
        }
        // console.log(emailQueues, flag, size);
      }
      ans.push([name, ...[...curSet].sort()]);
    }
  }
  return ans;
};
/**
 * @description 两个字符串集合中是否有交集
 * @param {Set} set1
 * @param {Set} set2
 */
function hasSameEmail(set1, set2) {
  if (set1.size > set2.size) return hasSameEmail(set2, set1);
  for (const item of set1) {
    if (set2.has(item)) return true;
  }
  return false;
}
accountsMerge([
  [
    "Celine",
    "Celine12@m.co",
    "Celine7@m.co",
    "Celine6@m.co",
    "Celine10@m.co",
    "Celine7@m.co",
  ],
  [
    "Lily",
    "Lily13@m.co",
    "Lily10@m.co",
    "Lily10@m.co",
    "Lily0@m.co",
    "Lily4@m.co",
  ],
  [
    "Kevin",
    "Kevin12@m.co",
    "Kevin0@m.co",
    "Kevin8@m.co",
    "Kevin16@m.co",
    "Kevin10@m.co",
  ],
  ["Isa", "Isa7@m.co", "Isa19@m.co", "Isa4@m.co", "Isa20@m.co", "Isa5@m.co"],
  [
    "Alex",
    "Alex19@m.co",
    "Alex7@m.co",
    "Alex14@m.co",
    "Alex4@m.co",
    "Alex8@m.co",
  ],
  [
    "Alex",
    "Alex16@m.co",
    "Alex18@m.co",
    "Alex2@m.co",
    "Alex1@m.co",
    "Alex19@m.co",
  ],
  [
    "David",
    "David10@m.co",
    "David7@m.co",
    "David16@m.co",
    "David2@m.co",
    "David3@m.co",
  ],
  [
    "John",
    "John9@m.co",
    "John16@m.co",
    "John17@m.co",
    "John6@m.co",
    "John12@m.co",
  ],
  [
    "John",
    "John11@m.co",
    "John7@m.co",
    "John8@m.co",
    "John3@m.co",
    "John1@m.co",
  ],
  [
    "Alex",
    "Alex3@m.co",
    "Alex16@m.co",
    "Alex13@m.co",
    "Alex3@m.co",
    "Alex20@m.co",
  ],
  [
    "John",
    "John20@m.co",
    "John10@m.co",
    "John0@m.co",
    "John14@m.co",
    "John5@m.co",
  ],
  [
    "Lily",
    "Lily20@m.co",
    "Lily19@m.co",
    "Lily15@m.co",
    "Lily4@m.co",
    "Lily10@m.co",
  ],
  [
    "Ethan",
    "Ethan17@m.co",
    "Ethan16@m.co",
    "Ethan7@m.co",
    "Ethan11@m.co",
    "Ethan3@m.co",
  ],
  [
    "Gabe",
    "Gabe3@m.co",
    "Gabe14@m.co",
    "Gabe13@m.co",
    "Gabe8@m.co",
    "Gabe3@m.co",
  ],
  [
    "Lily",
    "Lily18@m.co",
    "Lily6@m.co",
    "Lily13@m.co",
    "Lily19@m.co",
    "Lily2@m.co",
  ],
  [
    "Lily",
    "Lily10@m.co",
    "Lily11@m.co",
    "Lily3@m.co",
    "Lily3@m.co",
    "Lily5@m.co",
  ],
  ["Isa", "Isa8@m.co", "Isa5@m.co", "Isa16@m.co", "Isa4@m.co", "Isa6@m.co"],
  [
    "Lily",
    "Lily8@m.co",
    "Lily4@m.co",
    "Lily16@m.co",
    "Lily0@m.co",
    "Lily4@m.co",
  ],
  ["Bob", "Bob20@m.co", "Bob16@m.co", "Bob18@m.co", "Bob2@m.co", "Bob7@m.co"],
  ["Isa", "Isa15@m.co", "Isa5@m.co", "Isa19@m.co", "Isa19@m.co", "Isa5@m.co"],
]);
