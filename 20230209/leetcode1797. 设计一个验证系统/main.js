/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-02-09 09:03:48                                                  *
 * @LastModifiedDate: 2023-02-09 09:14:18                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 你需要设计一个包含验证码的验证系统。每一次验证中，用户会收到一个新的验证码，这个验证码在 currentTime 时刻之后 timeToLive 秒过期。如果验证码被更新了，那么它会在 currentTime （可能与之前的 currentTime 不同）时刻延长 timeToLive 秒。

// 请你实现 AuthenticationManager 类：

// AuthenticationManager(int timeToLive) 构造 AuthenticationManager 并设置 timeToLive 参数。
// generate(string tokenId, int currentTime) 给定 tokenId ，在当前时间 currentTime 生成一个新的验证码。
// renew(string tokenId, int currentTime) 将给定 tokenId 且 未过期 的验证码在 currentTime 时刻更新。如果给定 tokenId 对应的验证码不存在或已过期，请你忽略该操作，不会有任何更新操作发生。
// countUnexpiredTokens(int currentTime) 请返回在给定 currentTime 时刻，未过期 的验证码数目。
// 如果一个验证码在时刻 t 过期，且另一个操作恰好在时刻 t 发生（renew 或者 countUnexpiredTokens 操作），过期事件 优先于 其他操作。

  /**
   * @param {number} timeToLive
   */
  var AuthenticationManager = function (timeToLive) {
    this.timeToLive = timeToLive;
    this.hash = new Map();
  };

  /**
   * @param {string} tokenId
   * @param {number} currentTime
   * @return {void}
   */
  AuthenticationManager.prototype.generate = function (tokenId, currentTime) {
    this.hash.set(tokenId, currentTime);
  };

  /**
   * @param {string} tokenId
   * @param {number} currentTime
   * @return {void}
   */
  AuthenticationManager.prototype.renew = function (tokenId, currentTime) {
    if (
      this.hash.has(tokenId) &&
      this.hash.get(tokenId) + this.timeToLive > currentTime
    ) {
      this.hash.set(tokenId, currentTime);
    }
  };

  /**
   * @param {number} currentTime
   * @return {number}
   */
  AuthenticationManager.prototype.countUnexpiredTokens = function (currentTime) {
    let res = 0;
    for (const [id, cur] of this.hash) {
      if (cur + this.timeToLive > currentTime) {
        res++;
      }
    }
    return res;
  };

  /**
   * Your AuthenticationManager object will be instantiated and called as such:
   * var obj = new AuthenticationManager(timeToLive)
   * obj.generate(tokenId,currentTime)
   * obj.renew(tokenId,currentTime)
   * var param_3 = obj.countUnexpiredTokens(currentTime)
   */
