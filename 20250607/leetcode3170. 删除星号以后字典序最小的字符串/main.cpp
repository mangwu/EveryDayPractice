#include <iostream>
#include <stack>
#include <vector>
using namespace std;

class Solution {
public:
  string clearStars(string s) {
    int n = s.size();
    // 使用26个栈记录每个字母的索引
    // 遍历到*时，优先出栈字典序小的字母，
    // 字典序最小的字母出栈的是靠后的索引，
    // 保证该字母的前索引保留以获取最小字典序字符串
    vector<stack<int>> alpha(26, stack<int>());
    for (int i = 0; i < n; i++) {
      if (s[i] == '*') {
        // 出栈操作
        for (int j = 0; j < 26; j++) {
          if (!alpha[j].empty()) {
            s[alpha[j].top()] = '*';
            alpha[j].pop();
            break;
          }
        }
      } else {
        alpha[s[i] - 'a'].push(i);
      }
    }
    string res;
    for (char ch : s) {
      if (ch != '*') {
        res.push_back(ch);
      }
    }
    return res;
  }
};

int main(void) {
  Solution s;
  cout << s.clearStars("acbca*bc*");
  return 0;
}