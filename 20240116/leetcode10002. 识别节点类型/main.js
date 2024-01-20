/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-01-16 15:19:31                                                  *
 * @LastModifiedDate: 2024-01-16 15:24:52                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 实现一个名为 recognizeNodeType 的函数，它接受一个 DOM 节点作为输入，并以字符串形式返回其类型。

// 该函数将识别节点类型，如
// ELEMENT_NODE
// （元素节点）、
// ATTRIBUTE_NODE
// （属性节点）、
// TEXT_NODE
// （文本节点）、
// COMMENT_NODE
// （注释节点）和
// DOCUMENT_NODE
// （文档节点）。你可以假设输入始终是这些指定的节点类型之一。

/**
 * @param {Node} node
 * @return {string}
 */
export const recognizeNodeType = (node) => {
  switch (node.nodeType) {
    case Node.ELEMENT_NODE:
      return "ELEMENT_NODE";
    case Node.ATTRIBUTE_NODE:
      return "ATTRIBUTE_NODE";
    case Node.TEXT_NODE:
      return "TEXT_NODE";
    case Node.COMMENT_NODE:
      return "COMMENT_NODE";
    case Node.DOCUMENT_NODE:
      return "DOCUMENT_NODE";
    default:
      return "";
  }
};
