#include <cstring>
#include <iostream>
using namespace std;

class Solution {
public:
  bool isPalindrome(int x) {
    if (x < 0)
      return false;
    string str = to_string(x); //
    const int n = str.size();
    for (int i = 0; i < n / 2; i++) {
      if (str[i] != str[n - i - 1])
        return false;
    }
    return true;
  }
  bool isPalindrome2(int x) {
    // 第二种解法，
    if (x < 0 || (x % 10 == 0 && x != 0))
      return false;
    // 获取从后到前数的后半部分大小
    int reNum = 0;
    while (x > reNum) {
      reNum = reNum * 10 + x % 10;
      x /= 10;
    }
    // x的长度为偶数，如1221，那么最终x=12 reNum=12
    // x的长度为奇数，如12321，那么最终x=12, reNum=123，所以要判断reNum / 10 ==
    // x
    return x == reNum || x == reNum / 10;
  }
};

int main(void) {
  Solution solution;
  cout << solution.isPalindrome(12321) << endl;
  cout << solution.isPalindrome2(12321) << endl;
  return 0;
}
