#include <iostream>
#include <string>
using namespace std;

class Solution {
public:
  bool canBeValid(string s, string locked) {
    int n = s.size();
    if (n % 2 == 1)
      return false;
    // 正序遍历，( => +1 ) => -1 ，前缀和保证一定大于等于0;
    int sum = 0;
    int unlocked = 0;
    for (int i = 0; i < n; i++) {
      if (locked[i] == '0') {
        unlocked++;
      } else if (s[i] == '(') {
        sum++;
      } else { // ')'
        if (unlocked > 0) {
          // 先使用可以转换的字符
          unlocked--;
        } else {
          sum--;
        }
        if (sum < 0) {
          return false;
        }
      }
    }
    // 倒叙遍历， ) => +1, ( => -1，后缀和保证一定大于等于0;
    sum = 0;
    unlocked = 0;
    for (int i = n - 1; i >= 0; i--) {
      if (locked[i] == '0') {
        unlocked++;
      } else if (s[i] == ')') {
        sum++;
      } else { // ')'
        if (unlocked > 0) {
          // 先使用可以转换的字符
          unlocked--;
        } else {
          sum--;
        }
        if (sum < 0) {
          return false;
        }
      }
    }
    return true;
  }
};