// 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。

// 如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。

// 假设环境不允许存储 64 位整数（有符号或无符号）。

using namespace std;
class Solution {
public:
  int reverse(int x) {
    bool isNegtive = false;
    if (x < 0) {
      isNegtive = true;
      if (x == INT_MIN) {
        return 0;
      }
      x = -x;
    }
    int len = 0;
    int copyX = x;
    while (copyX) {
      copyX /= 10;
      len++;
    }
    long res = 0;
    while (x) {
      res += (x % 10) * pow(10, --len);
      x /= 10;
    }
    if (isNegtive) {
      res = -res;
    }
    if (res >= INT_MAX || res <= INT_MIN) {
      return 0;
    }
    return res;
  }
};