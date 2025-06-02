#include <cmath>
#include <vector>
using namespace std;

class Solution {
public:
  int candy(vector<int> &ratings) {
    int n = ratings.size();
    // 每个低谷向两边自增
    // 首位和尾位默认都是递归，向一边自增
    vector<int> candys(n, 1); // 每个至少一个
    int header = 0;
    while (header < n - 1 && ratings[header + 1] > ratings[header]) {
      // 右边的分高，糖果会更多
      candys[header + 1] = max(candys[header + 1], candys[header] + 1);
      header++;
    }
    int tail = n - 1;
    while (tail > 0 && ratings[tail] < ratings[tail - 1]) {
      // 左边分更高，糖果会更多
      candys[tail - 1] = max(candys[tail - 1], candys[tail] + 1);
      tail--;
    }
    // 找到低谷后，进行如上的操作
    for (int i = 1; i < n - 1; i++) {
      // 低谷的判断，有一边可以是相等的
      if (ratings[i] <= ratings[i - 1] && ratings[i] <= ratings[i + 1]) {
        int left = i;
        int right = i;
        while (left > 0 && ratings[left] < ratings[left - 1]) {
          candys[left - 1] = max(candys[left - 1], candys[left] + 1);
          left--;
        }
        while (right < n - 1 && ratings[right + 1] > ratings[right]) {
          candys[right + 1] = max(candys[right + 1], candys[right] + 1);
          right++;
        }
      }
    }
    int res = 0;
    for (int num : candys) {
      res += num;
    }
    return res;
  }
};