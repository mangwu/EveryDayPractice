/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-04-08 14:10:42                                                  *
 * @LastModifiedDate: 2023-04-08 15:27:05                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 作为项目经理，你规划了一份需求的技能清单 req_skills，并打算从备选人员名单 people 中选出些人组成一个「必要团队」（ 编号为 i 的备选人员 people[i] 含有一份该备选人员掌握的技能列表）。

// 所谓「必要团队」，就是在这个团队中，对于所需求的技能列表 req_skills 中列出的每项技能，团队中至少有一名成员已经掌握。可以用每个人的编号来表示团队中的成员：

// 例如，团队 team = [0, 1, 3] 表示掌握技能分别为 people[0]，people[1]，和 people[3] 的备选人员。
// 请你返回 任一 规模最小的必要团队，团队成员用人员编号表示。你可以按 任意顺序 返回答案，题目数据保证答案存在。

/**
 * @param {string[]} req_skills
 * @param {string[][]} people
 * @return {number[]}
 */
var smallestSufficientTeam = function (req_skills, people) {
  // 可以用一个mask数字表示已经选择的req_skills
  const hash = new Map();
  const n = req_skills.length;
  for (let i = 0; i < n; i++) {
    hash.set(req_skills[i], i);
  }
  const k = (1 << n) - 1;
  // cur当前人，choose，已选人数, mask技能
  let res = Infinity;
  const path = [];
  let ans = null;
  const dfs = (cur, choose, mask) => {
    if (cur === people.length) {
      if (mask === k) {
        if (choose < res) {
          res = choose;
          ans = path.slice();
        }
      }
      return;
    }
    if (mask === k) {
      if (choose < res) {
        res = choose;
        ans = path.slice();
      }
      return; // 提前结束
    }
    if (choose >= res) {
      return; // 减枝
    }
    let flag = false; // 能否选择
    let newMask = mask;
    for (const skill of people) {
      const idx = hash.get(skill);
      if (((mask >> idx) & 1) !== 1) {
        flag = true;
        newMask = newMask | (1 << idx);
      }
    }
    dfs(cur + 1, choose, mask); // 不选当前
    if (flag) {
      path.push(cur);
      dfs(cur + 1, choose + 1, newMask); // 选择当前
      path.pop();
    }
  };
  dfs(0, 0, 0);
  return ans;
};

/**
 * @param {string[]} req_skills
 * @param {string[][]} people
 * @return {number[]}
 */
var smallestSufficientTeam = function (req_skills, people) {
  // 可以用一个mask数字表示已经选择的req_skills
  const hash = new Map();
  const n = req_skills.length;
  for (let i = 0; i < n; i++) {
    hash.set(req_skills[i], i);
  }
  const k = (1 << n) - 1;
  const m = people.length;
  const peopleHash = new Set();
  for (let i = 0; i < m; i++) {
    let cur = 0;
    for (const skill of people[i]) {
      const idx = hash.get(skill);
      cur = cur | (1 << idx);
    }
    people[i] = cur;
    if (peopleHash.has(cur)) {
      people[i] = false;
    } else {
      peopleHash.add(cur); // 去重
    }
  }
  for (let i = 0; i < m; i++) {
    const cur = people[i];
    if (cur !== false) {
      for (let j = 0; j < n; j++) {
        let mask = cur | (1 < j);
        if (mask !== cur && peopleHash.has(mask)) {
          people[i] = false;
          break;
        }
      }
    }
  }

  // cur当前人，choose，已选人数, mask技能
  let res = Infinity;
  const path = [];
  let ans = [];
  const dfs = (cur, choose, mask) => {
    if (cur === people.length) {
      if (mask === k) {
        if (choose < res) {
          res = choose;
          ans = path.slice();
        }
      }
      return;
    }
    if (mask === k) {
      if (choose < res) {
        res = choose;
        ans = path.slice();
      }
      return; // 提前结束
    }
    if (choose >= res) {
      return; // 减枝
    }

    let newMask = mask | people[cur];
    let flag = newMask !== mask; // 能否选择
    dfs(cur + 1, choose, mask); // 不选当前
    if (flag && people[cur] !== false) {
      path.push(cur);
      dfs(cur + 1, choose + 1, newMask); // 选择当前
      path.pop();
    }
  };
  dfs(0, 0, 0);
  return ans;
};
