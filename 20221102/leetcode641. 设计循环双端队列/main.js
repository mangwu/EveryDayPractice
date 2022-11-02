/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-11-02 16:47:28                                                  *
 * @LastModifiedDate: 2022-11-02 16:54:09                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

class MyCircularDeque {
  constructor(k) {
    this.maxLen = k;
    this.front = -1;
    this.back = 0;
    this.items = {};
  }
  insertFront(...eles) {
    if (this.isFull()) {
      return false;
    }
    for (const ele of eles) {
      this.items[this.front--] = ele;
    }
    return true;
  }
  insertLast(...eles) {
    if (this.isFull()) {
      return false;
    }
    for (const ele of eles) {
      this.items[this.back++] = ele;
    }
    return true;
  }
  size() {
    return this.back - this.front - 1;
  }
  isEmpty() {
    return this.size() === 0;
  }
  isFull() {
    return this.size() === this.maxLen;
  }
  deleteFront() {
    if (this.isEmpty()) {
      return false;
    }
    let res = this.items[++this.front];
    delete this.items[this.front];
    return true;
  }
  deleteLast() {
    if (this.isEmpty()) {
      return false;
    }
    let res = this.items[--this.back];
    delete this.items[this.back];
    return true;
  }
  getFront() {
    if (this.isEmpty()) {
      return -1;
    }
    return this.items[this.front + 1];
  }
  getRear() {
    if (this.isEmpty()) {
      return -1;
    }
    return this.items[this.back - 1];
  }
  toString() {
    if (this.isEmpty()) {
      return "";
    }
    let n = this.size();
    let str = `${this.items[this.front + 1]}`;
    for (let i = 1; i < n; i++) {
      str += `,${this.items[this.front + i + 1]}`;
    }
    return str;
  }
}
