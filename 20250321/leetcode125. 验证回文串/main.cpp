#include <algorithm>
#include <cctype>
#include <iostream>
#include <string>
#include <vector>

using namespace std;

class Solution {
public:
  bool isPalindrome(string s) {
    vector<char> str;
    for (char x : s) {
      char lowX = static_cast<char>(tolower(x));
      if (lowX >= 'a' && lowX <= 'z' || (lowX >= '0' && lowX <= '9')) {
        str.push_back(lowX);
      }
    }
    int n = str.size();
    for (int i = 0; i < n / 2; i++) {
      if (str[i] != str[n - i - 1])
        return false;
    }
    return true;
  }
  bool isPalindrome2(string s) {
    string str;
    for (char x : s) {
      if (isalnum(x)) {
        str += tolower(x);
      }
    }
    string dest(str.size(), '\0');
    reverse_copy(str.begin(), str.end(), dest.begin());
    return dest == str;
  }
};

int main(void) {
  Solution solution;
  cout << solution.isPalindrome2("A man, a plan, a canal: Panama");
  return 0;
}