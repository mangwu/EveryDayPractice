#include <cstring>
#include <iostream>
#include <unordered_map>

using namespace std;

class Solution {
public:
  // hash表
  unordered_map<char, int> hash = {
      {'I', 1},   {'V', 5},   {'X', 10},   {'L', 50},
      {'C', 100}, {'D', 500}, {'M', 1000},
  };
  int romanToInt(string s) {
    const int n = s.size();
    int res = 0;
    for (int i = 0; i < n; i++) {
      // 需要判断特殊情况
      if (s[i] == 'I') {
        if (i < n && s[i + 1] == 'V') {
          res += 4;
          i++;
        } else if (i < n && s[i + 1] == 'X') {
          res += 9;
          i++;
        } else
          res++;
      } else if (s[i] == 'X') {
        if (i < n && s[i + 1] == 'L') {
          res += 40;
          i++;
        } else if (i < n && s[i + 1] == 'C') {
          res += 90;
          i++;
        } else
          res += 10;
      } else if (s[i] == 'C') {
        if (i < n && s[i + 1] == 'D') {
          res += 400;
          i++;
        } else if (i < n && s[i + 1] == 'M') {
          res += 900;
          i++;
        } else
          res += 100;
      } else if (s[i] == 'V') {
        res += 5;
      } else if (s[i] == 'L') {
        res += 50;
      } else if (s[i] == 'D') {
        res += 500;
      } else if (s[i] == 'M') {
        res += 1000;
      }
    }
    return res;
  }
  int romanToInt2(string s) {
    const int n = s.size();
    int res = 0;
    for (int i = 0; i < n; i++) {
      int value = hash[s[i]];
      if (i < n && value < hash[s[i + 1]]) {
        res -= value;
      } else
        res += value;
    }
    return res;
  }
};

int main(void) {
  Solution solution;
  cout << solution.romanToInt("MCMXCIV") << endl;
  cout << solution.romanToInt2("MCMXCIV") << endl;
  return 0;
}