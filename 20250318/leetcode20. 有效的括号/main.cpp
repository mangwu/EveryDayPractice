#include <iostream>
#include <stack>
#include <string>
#include <unordered_map>
#include <vector>
using namespace std;

class Solution {
public:
  bool isValid(string s) {
    vector<char> stack = {};
    for (char ch : s) {
      if (ch == ')') {
        if (!stack.size() || stack.back() != '(')
          return false;
        stack.pop_back();
      } else if (ch == ']') {
        if (!stack.size() || stack.back() != '[')
          return false;
        stack.pop_back();

      } else if (ch == '}') {
        if (!stack.size() || stack.back() != '{')
          return false;
        stack.pop_back();
      } else {
        stack.push_back(ch);
      }
    }
    return stack.size() == 0;
  }
  bool isValid2(string s) {
    const int n = s.size();
    if (n % 2 == 1)
      return false;
    stack<char> stk;
    unordered_map<char, char> pairs = {{')', '('}, {']', '['}, {'}', '{'}};
    for (char ch : s) {
      if (pairs.count(ch)) {
        if (stk.empty() || stk.top() != pairs[ch]) {
          return false;
        }
        stk.pop();
      } else {
        stk.push(ch);
      }
    }
    return stk.empty();
  }
};

int main(void) {
  Solution solution;
  cout << solution.isValid("()[]{}{[(())()]}") << endl;
  cout << solution.isValid2("()[]{}{[(())()]}") << endl;
  return 0;
}