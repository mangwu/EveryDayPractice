/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-21 22:00:23                                                  *
 * @LastModifiedDate: 2022-10-21 22:02:23                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 请你给一个停车场设计一个停车系统。
// 停车场总共有三种不同大小的车位：大，中和小，每种尺寸分别有固定数目的车位。

// 请你实现 ParkingSystem 类：

// ParkingSystem(int big, int medium, int small)
// 初始化 ParkingSystem 类，三个参数分别对应每种停车位的数目。
// bool addCar(int carType) 检查是否有 carType 对应的停车位。
//  carType 有三种类型：大，中，小，分别用数字 1， 2 和 3 表示。
// 一辆车只能停在  carType 对应尺寸的停车位中。
// 如果没有空车位，请返回 false ，否则将该车停入车位并返回 true 。

/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function (big, medium, small) {
  this.data = [big, medium, small];
};

/**
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function (carType) {
  if (this.data[carType - 1] > 0) {
    this.data[carType - 1]--;
    return true;
  }
  return false;
};

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
