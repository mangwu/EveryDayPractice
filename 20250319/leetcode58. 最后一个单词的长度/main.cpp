#include <iostream>
#include <string>

using namespace std;

class Solution {
public:
  int lengthOfLastWord(string s) {
    const int n = s.size();
    int lastIdx = n - 1;
    while (lastIdx >= 0 && s[lastIdx] == ' ') {
      lastIdx--;
    }
    int startIdx = lastIdx;
    while (startIdx >= 0 && s[startIdx] != ' ') {
      startIdx--;
    }
    return lastIdx - startIdx;
  }
};

int main(void) {
  Solution solution;
  cout << solution.lengthOfLastWord(" ab ccbgsg uyfsc mnabfwy  mangwu  ");
  return 0;
}