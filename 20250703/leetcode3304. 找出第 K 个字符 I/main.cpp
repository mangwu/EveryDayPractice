#include <string>
#include <vector>
using namespace std;

class Solution {
public:
  char kthCharacter(int k) {
    string str = "a";
    while (str.size() < k) {
      int n = str.size();
      for (int i = 0; i < n; i++) {
        if (str[i] == 'z') {
          str.push_back('a');
        } else {
          str.push_back(char(str[i] + 1));
        }
      }
    }
    return str[k - 1];
  }
};

// 1 -> 2 -> 4 -> 8 -> 16 ->