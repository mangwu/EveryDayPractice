#include <string>
#include <iostream>

using namespace std;

class Solution
{
public:
  bool isBalanced(string num)
  {
    int odd = 0;
    int even = 0;
    bool flag = false; // 是否是奇数
    for (char c : num)
    {
      int curNum = stoi(string(1, c));
      if (flag)
      {
        odd += curNum;
      }
      else
      {
        even += curNum;
      }
      flag = !flag;
    }
    cout << odd << endl;
    cout << even << endl;
    return odd == even;
  }
};

int main()
{
  Solution obj;
  cout << obj.isBalanced("1234") << endl;
  return 0;
}