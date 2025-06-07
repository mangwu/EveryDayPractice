#include <stack>
#include <string>
#include <unordered_map>
#include <vector>

using namespace std;

class Solution {
public:
  string robotWithString(string s) {
    // t相当于一个栈
    stack<char> stk;
    string res;
    unordered_map<char, int> map;
    for (char ch : s) {
      map[ch]++;
    }
    // 为了使字典序最小，每次出栈时要是minChar
    // 除非剩余字符s中没有micChar字符了，这个时候就可以增加minChar
    char minChar = 'a';
    for (char ch : s) {
      // 入栈
      stk.push(ch);
      map[ch]--; // 剩余字符中减少了一个ch
      // 判断剩余字符是否没有minChar，没有就可以自增minChar选取下个字符
      while (minChar != 'z' && map[minChar] == 0) {
        minChar++;
      }
      // 在栈顶元素小于等于minChar时都可以出栈
      while (!stk.empty() && stk.top() <= minChar) {
        res.push_back(stk.top());
        stk.pop();
      }
    }
    return res;
  }
};