/**
 * @description  main.js
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2022-01-21 10:17:03
 * @copyright © 2021 wangzhihao, All rights reserved.
 */

//  给你一个整数数组 arr ，你一开始在数组的第一个元素处（下标为 0）。

//  每一步，你可以从下标 i 跳到下标：

//  i + 1 满足：i + 1 < arr.length
//  i - 1 满足：i - 1 >= 0
//  j 满足：arr[i] == arr[j] 且 i != j
//  请你返回到达数组最后一个元素的下标处所需的 最少操作次数 。

//  注意：任何时候你都不能跳到数组外面。

/**
 * @param {number[]} arr
 * @return {number}
 */
var minJumps = function (arr) {
  // 从0出发，判断前面是否具有值的索引，可以直接跳跃到改节点
  // 没有就向前或向后跳一步，继续跳跃,计算最小步骤
  // 在向前后先后跳跃时，有不同的选择，属于广度优先搜索
  // 剔除连续的相同的元素
  let pre;
  let preN = 2;
  const len1 = arr.length;
  // 数组长度为1时，0步，数组长度为2时,1步
  if (len1 <= 2) {
    return len1 - 1;
  }
  // 缩减为两个
  const newArr = arr.filter((v) => {
    // 超过的缩减为两个
    if (pre === v) {
      preN--;
      if (preN <= 0) {
        // 为0时
        return false;
      } else {
        return true;
      }
    } else {
      preN = 2;
      pre = v;
      return true;
    }
  });
  // console.log(newArr);
  // 数组长度
  const len = newArr.length;

  // // 声明步数
  // let ans = Number.MAX_SAFE_INTEGER;

  // 声明记录索引和
  const map = new Map();
  // 声明无向图graph（相邻的都是可跳跃的）
  // const graph = [];
  for (let i = 0; i < len; i++) {
    // if (i + 1 < len) {
    //   graph.push([i, i + 1]);
    // }

    const idx = map.get(newArr[i]);
    // 如果map中有相关的索引记录，就记录并添加
    if (idx !== undefined) {
      // 不是相邻的索引就可以额外添加
      // for (let k of idx) {
      //   // 如果和当前的i不相邻就可以添加
      //   if (k + 1 < i) {
      //     graph.push([k, i]);
      //   }
      // }
      map.set(newArr[i], [...idx, i]);
      continue;
    }
    // map中记录的都是靠后的值索引
    map.set(newArr[i], [i]);
  }
  // console.log(map);
  // 得到graph， 开始广度优先搜索，得到最短路径

  // 已访问次数
  const visited = [true];
  // 记录次数遍历次数
  let k = 0;
  // 记录每轮入队个数
  let everyRounds = [1];
  // 队列, 从0开始出发
  const q = [0];
  // 开始bfs搜索 ，广度优先搜索，记录最近的到达终点的
  while (q.length > 0) {
    // 出队
    const idx = q.shift();
    // 当第一次遍历到idx为最后一位时就可以结束广度优先遍历,直接返回轮数
    // if (idx === len - 1) {
    //   return k;
    // }
    // idxdx
    const idxTo = map.get(newArr[idx]);
    // 记录下一轮加入个数
    if (!everyRounds[k + 1]) {
      // 如果下一轮加入是新开始的
      everyRounds[k + 1] = 0;
    }
    // 入队跳跃的
    for (let i = 0; i < idxTo.length; i++) {
      // 未访问过就添加入队
      if (!visited[idxTo[i]]) {
        visited[idxTo[i]] = true;
        everyRounds[k + 1]++;
        if (idxTo[i] === len - 1) {
          return k + 1;
        }
        // 入队
        q.push(idxTo[i]);
      }
    }
    // 入队前后的
    if (!visited[idx + 1] && idx + 1 < len) {
      if (idx + 1 === len - 1) {
        return k + 1;
      }
      q.push(idx + 1);
      visited[idx + 1] = true;
      everyRounds[k + 1]++;
    }
    if (idx - 1 > 0 && !visited[idx - 1]) {
      q.push(idx - 1);
      visited[idx + 1] = true;
      everyRounds[k + 1]++;
    }
    // 这一轮的个数减去1
    everyRounds[k]--;
    if (everyRounds[k] === 0) {
      // 这一轮入队的没了，就可以进入下一轮
      k++;
    }
    // console.log(q);
  }
};
console.log(minJumps([1, 1, 1, 2,5,2,2,5]));


/**
 * @param {number[]} arr
 * @return {number}
 */
 var minJumps2 = function(arr) {
  const idxMap = new Map(), explored = new Set()
  for(let i=0;i<arr.length;i++){
      if(idxMap.has(arr[i]))
          idxMap.get(arr[i]).push(i)
      else
          idxMap.set(arr[i], [i])
  }
  let nodes = [0], step = 0
  explored.add(0)
  while(nodes.length > 0){
      const nxt = new Array()
      for(const cur of nodes){
          if(cur == arr.length - 1)
              return step
          if(idxMap.has(arr[cur])){
              for(const other of idxMap.get(arr[cur])){
                  if(!explored.has(other)){
                      explored.add(other)
                      nxt.push(other)
                  }
              }
              idxMap.delete(arr[cur])
          }
          if(!explored.has(cur + 1)){
              explored.add(cur + 1)
              nxt.push(cur + 1)               
          }
          if(cur > 0 && !explored.has(cur - 1)){
              explored.add(cur - 1)
              nxt.push(cur - 1)
          }
      }
      nodes = nxt
      step++
  }
  return arr.length - 1
};
