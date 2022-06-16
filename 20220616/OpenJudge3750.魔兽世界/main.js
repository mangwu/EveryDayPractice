/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-06-16 17:07:38                                                  *
 * @LastModifiedDate: 2022-06-16 22:51:03                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 题目地址：http://bailian.openjudge.cn/practice/3750/
// 武士类
class Samurai {
  // 各个武士的父类
  constructor(num, initalLife, initalDamage, camp, cityIdx) {
    // 编号
    this.num = num;
    // 生命
    this.life = initalLife;
    // 攻击伤害
    this.damage = initalDamage;
    // 阵营
    this.camp = camp;
    // 所在城市索引
    this.cityIdx = cityIdx;
  }
  attck(samurai) {
    samurai.life -= this.damage;
  }
  // 反击
  fightBack(samurai) {
    if (this.life > 0) {
      samurai.life -= Math.floor(this.damage / 2);
    }
  }
  // 移动
  move() {
    if (this.camp == "red") {
      this.cityIdx++;
    } else {
      this.cityIdx--;
    }
  }
}

class Dragon extends Samurai {
  constructor(num, initalLife, initalDamage, camp) {
    super(num, initalLife, initalDamage, camp);
    this.type = "dragon";
  }
  attck(samurai) {
    super(samurai);
    // 欢呼
    console.log("dragon attack enemy!");
  }
}
class Ninja extends Samurai {
  constructor(num, initalLife, initalDamage, camp) {
    super(num, initalLife, initalDamage, camp);
    this.type = "ninja";
  }
  fightBack(_samurai) {
    // doNothing
  }
}
class Iceman extends Samurai {
  constructor(num, initalLife, initalDamage, camp) {
    super(num, initalLife, initalDamage, camp);
    this.type = "iceman";
  }
  move() {
    super();
    if (this.camp == "red") {
      if (this.cityIdx % 2 == 1) {
        this.life -= 9;
        this.damage += 20;
        if (this.life <= 0) {
          this.life = 1;
        }
      }
    } else {
      if ((n - this.cityIdx) % 2 == 0) {
        this.life -= 9;
        this.damage += 20;
        if (this.life <= 0) {
          this.life = 1;
        }
      }
    }
  }
}

class Lion extends Samurai {
  constructor(num, initalLife, initalDamage, camp) {
    super(num, initalLife, initalDamage, camp);
    this.type = "lion";
  }
  fightBack(samurai) {
    super(samurai);
    if (this.life <= 0) {
      let add = samurai.type == "wolf" ? samurai.damage / 2 : samurai.damage;
      samurai.life += this.life + add;
    }
  }
}

class Wolf extends Samurai {
  constructor(num, initalLife, initalDamage, camp) {
    super(num, initalLife, initalDamage, camp);
    this.type = "wolf";
    this.killNum = 0;
  }
  attck(samurai) {
    super(samurai);
    if (samurai.life <= 0) {
      this.killNum++;
    }
    if (this.killNum % 2 == 0) {
      this.life *= 2;
      this.damage *= 2;
    }
  }
}

// 城市类
class City {
  constructor(idx) {
    this.idx = idx;
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

// 司令部
class Command {
  constructor(type, lifeYuan) {
    this.type = type;
    this.enemyNum = 0;
    this.lifeYuan = lifeYuan;
    this.samurai = null;
  }
  checkForFailure() {
    if (this.enemyNum >= 2) {
      // 宣布失败
    }
  }
  generateSamurai(idx, rules, N) {
    const type = rules[idx % N];
    this.samurai = new type[0](idx, type[1], type[2]);
  }
}
const redRules = [2, 3, 4, 1, 0];
const blueRules = [3, 0, 1, 2, 4];

const Samurais = [[Dragon], [Ninja], [Iceman], [Lion], [Wolf]];

// 生成对应武士的生命与攻击
const initalRules = (lifeRule, damageRule) => {
  for (let i = 0; i < lifeRule.length; i++) {
    Samurais[i].push(lifeRule[i]);
    Samurais[i].push(damageRule[i]);
  }
};

class TimeRecord {
  constructor(endTime) {
    this.endTime = endTime;
    this.currentTime = 0;
  }
  // 返回整个时间hhh:mm格式
  getFullTime() {
    // 返回指定格式时间
    let hour = Math.floor(this.currentTime / 60).toString();
    let minute = (this.currentTime % 60).toString();
    return (
      "0".repeat(3 - hour.length) +
      hour +
      ":" +
      "0".repeat(2 - minute.length) +
      minute
    );
  }
  // 返回mm 时间
  getMinuteTime() {
    let minute = this.currentTime % 60;
    return minute;
  }
  // 时间流逝
  timeGoes() {
    this.currentTime += 10;
  }
  // 检查是否到了终止时间
  checkForEnd() {
    return this.endTime <= this.currentTime;
  }
}

/**
 * @description 魔兽世界
 * @param {number} M 声明元
 * @param {number} N 城市数量
 * @param {number} T 终止时间
 * @param {number[]} lifeRule 武士生命
 * @param {number[]} damageRule 武士攻击
 */
var warcraft = function (M, N, T, lifeRule, damageRule) {
  // 初始化规则
  initalRules(lifeRule, damageRule);
  // 初始化时间
  const tr = new TimeRecord(T);
  // 初始化司令部
  const redC = new Command("red", M);
  const blueC = new Command("bule", M);
  // 初始化城市
  const citys = new Array(N).fill(0).map((_v, i) => new City(i));

  // 魔兽战斗的情况
  while(!tr.checkForEnd()) {
    switch(tr.getMinuteTime()) {
      // 根据
    }
    tr.timeGoes();
  }
};
