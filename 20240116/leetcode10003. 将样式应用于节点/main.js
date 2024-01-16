/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-01-16 15:26:20                                                  *
 * @LastModifiedDate: 2024-01-16 15:28:32                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 创建一个名为 applyStylesToNode 的函数，接收一个 DOM 节点作为参数，并将指定的 CSS 样式应用于它。

// 所需的样式：

// background-color: ""#ffa015"";
// color: ""white"";
// font-size: ""16px"";
// border-style: ""none"";
// 预期输出:

/**
 * @param {HTMLElement} node
 * @return {void}
 */
export const applyStylesToNode = (node) => {
  node.style.backgroundColor = "#ffa015";
  node.style.color = "white";
  node.style.fontSize = "16px";
  node.style.borderStyle = "none";
};
