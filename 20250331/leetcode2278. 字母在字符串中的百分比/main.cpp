#include <string>

using namespace std;

class Solution {
public:
  int percentageLetter(string s, char letter) {
    int n = s.size();
    int cnts = 0;
    for (char ch : s) {
      if (ch == letter) {
        cnts++;
      }
    }
    return cnts * 100 / n;
  }
};