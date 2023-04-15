/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-04-15 00:07:52                                                  *
 * @LastModifiedDate: 2023-04-15 02:03:48                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const getTextSize = (fontSize, text, customStyle = {}) => {
  const content = document.createElement("div");
  const wrapper = document.createElement("div");
  wrapper.style.width = "50px";
  wrapper.style.position = "absolute";
  wrapper.style.overflow = "hidden";
  wrapper.style.visibility = "hidden";

  content.style = { ...content.style, ...customStyle };
  content.style.whiteSpace = "nowrap";
  content.style.fontSize = fontSize;
  content.style.display = "inline-block";
  content.textContent = text;

  wrapper.appendChild(content);
  document.body.appendChild(wrapper);

  const { width, height } = window.getComputedStyle(content);
  return [parseFloat(width), parseFloat(height)];
};
