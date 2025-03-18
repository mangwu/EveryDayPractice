#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
  int removeDuplicates(vector<int> &nums) {
    // 快慢指针
    const int n = nums.size();
    int fast = 1;
    int slow = 1;
    while (fast < n) {
      if (nums[fast] != nums[fast - 1]) {
        // 出现了新元素
        nums[slow] = nums[fast];
        fast++;
        slow++;
      } else {
        // 重复元素，可以省略
        fast++;
      }
    }
    return slow;
  }
};

int main(void) {
  Solution soluton;
  vector<int> nums = {1, 2, 2, 3, 3, 3, 4, 5, 6, 7, 7, 7, 9};
  cout << soluton.removeDuplicates(nums) << endl;
  return 0;
}