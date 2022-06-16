/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-06-16 17:07:38                                                  *
 * @LastModifiedDate: 2022-06-16 17:39:02                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 城市类
class City {
  constructor() {
    // 生命元
    this.lifeYuan = 0;
    // 红方武士
    this.redSamurai = null;
    // 南方武士
    this.blueSamurai = null;
    // 旗帜
    this.flag = null;
    // 记录被攻占的次数
    this.record = {
      red: 0,
      blue: 0,
    };
  }
  // 生成生命元
  generateLife() {
    this.lifeYuan += 10;
  }
  // 取走生命元
  takeLife() {
    let val = this.lifeYuan;
    this.lifeYuan = 0;
    return val;
  }
  // 武士登陆
  landing(samurai) {
    if (samurai.camp == "red") {
      this.redSamurai = samurai;
    } else {
      this.blueSamurai = camp;
    }
  }
  // 被攻占记录
  isCaptured(samurai) {
    if (samurai.camp == "red") {
      this.record["red"]++;
      this.record["blue"] = 0;
      if (this.record["red"] >= 2) {
        this.flag = "red";
      }
    } else {
      this.record["blue"]++;
      this.record["red"] = 0;
      if (this.record["blue"] >= 2) {
        this.flag = "blue";
      }
    }
  }
}

var warcraft = function (M, N, T, redRule, blueRule) {};
