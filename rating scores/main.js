/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-11-06 02:04:05                                                  *
 * @LastModifiedDate: 2022-11-06 16:33:53                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

(function () {
  function getCurTableTitlesID() {
    return [
      ...document
        .querySelectorAll("div[role=table] div[role=rowgroup] div[role=row]")
        .values(),
    ];
  }
  async function getZerotracData() {
    return fetch("https://zerotrac.github.io/leetcode_problem_rating/data.json")
      .then((res) => res.json())
      .then((data) => {
        const m = [];
        for (const item of data) {
          const { ContestID_zh, ID, Rating } = item;
          m[ID] = [ContestID_zh, Rating];
        }
        return m;
      });
  }
  function addTableTitle() {
    const fuben = document
      .querySelector(
        "div[role=table] div.border-b div[role=row] div:nth-child(2)"
      )
      .cloneNode(true);

    const tableHeader = document.querySelector(
      "div[role=table] div.border-b div[role=row]"
    );
    const sortedIcon = fuben.querySelector("span");
    sortedIcon.style.display = "none";
    fuben.children[0].removeChild(sortedIcon);
    fuben.textContent = "周赛分数";
    tableHeader.appendChild(fuben);
  }
  // 获取一个复制的表格单元
  let origin = null;
  function getAColumn() {
    return document
      .querySelector(
        "div[role=table] div[role=rowgroup] div[role=row] div[role=cell]:nth-child(2)"
      )
      .cloneNode(true);
  }
  // 数据
  let p = getZerotracData();
  // 保存添加的单元格
  let cells = [];
  function addColumns() {
    // 增加一行
    const curIds = getCurTableTitlesID();
    if (cells.length > 0) {
      cells.forEach((v) => v.remove());
      cells = [];
    }
    p.then((res) => {
      curIds.forEach((v, i) => {
        let id = parseInt(
          v.querySelector("div[role=cell]:nth-child(2)").textContent
        );
        let cell = origin.cloneNode(true);
        cells.push(cell);
        cell.textContent = "-";
        v.append(cell);
        if (res[id]) {
          cell.textContent = `${res[id][1].toFixed(2)}(${res[id][0]})`;
        }
      });
    });
  }
  document.addEventListener("DOMContentLoaded", () => {
    origin = getAColumn();
    addTableTitle();
    // 网络请求
    function perfObserver(list, observer) {
      let k = getNetworkRequest(
        list.getEntriesByName("https://leetcode.cn/graphql/")
      );
      console.log(k);
      addColumns();
    }
    // 得到满足条件的网络请求
    function getNetworkRequest(
      entries = performance.getEntriesByType("resource")
    ) {
      return entries;
    }
    // 监测网络变化
    var observer = new PerformanceObserver(perfObserver);
    observer.observe({ entryTypes: ["resource"] });
  });
})();
