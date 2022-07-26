/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-07-26 09:07:57                                                  *
 * @LastModifiedDate: 2022-07-26 09:12:23                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

var Skiplist = function () {
  this.hash = new Map();
};

/**
 * @param {number} target
 * @return {boolean}
 */
Skiplist.prototype.search = function (target) {
  return this.hash.has(target);
};

/**
 * @param {number} num
 * @return {void}
 */
Skiplist.prototype.add = function (num) {
  if (this.hash.has(num)) {
    const k = this.hash.get(num);
    this.hash.set(num, k + 1);
  } else {
    this.hash.set(num, 1);
  }
};

/**
 * @param {number} num
 * @return {boolean}
 */
Skiplist.prototype.erase = function (num) {
  if (this.hash.has(num)) {
    const k = this.hash.get(num);
    if (k == 1) {
      this.hash.delete(num);
      return true;
    }
    this.hash.set(num, k - 1);
    return true;
  }
  return false;
};

/**
 * Your Skiplist object will be instantiated and called as such:
 * var obj = new Skiplist()
 * var param_1 = obj.search(target)
 * obj.add(num)
 * var param_3 = obj.erase(num)
 */
