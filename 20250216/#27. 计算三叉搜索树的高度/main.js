/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-16 19:44:16                                                  *
 * @LastModifiedDate: 2025-02-16 21:42:12                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.mid = null;
      this.right = null;
    }
  }
  const n = parseInt(inputs[0]);
  const vals = inputs[1].split(" ").map((v) => parseInt(v));
  if (n !== vals.length) {
    for (let i = 2; i < inputs.length; i++) {
      vals.push(parseInt(inputs[i]));
    }
  }
  const root = new Node(vals[0]);
  let res = 1;
  const insert = (node, val, h) => {
    res = Math.max(h, res);
    if (!node) return new Node(val);
    if (val < node.val - 500) {
      node.left = insert(node.left, val, h + 1);
    } else if (val > node.val + 500) {
      node.right = insert(node.right, val, h + 1);
    } else {
      node.mid = insert(node.mid, val, h + 1);
    }
    return node;
  };
  for (let i = 1; i < vals.length; i++) {
    insert(root, vals[i], 1);
  }
  console.log(res);
}
solution();

// Node {
//   val: 5000,
//   left: Node {
//     val: 2000,
//     left: null,
//     mid: Node { val: 1800, left: null, mid: null, right: null },
//     right: null
//   },
//   mid: Node { val: 5000, left: null, mid: null, right: null },
//   right: Node { val: 8000, left: null, mid: null
