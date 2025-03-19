#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
  int searchInsert(vector<int> &nums, int target) {
    const int n = nums.size();
    int left = 0;
    int right = n - 1;
    while (left <= right) {
      int mid = (left + right) / 2;
      if (nums[mid] == target)
        return mid;
      else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return left;
  }
};

int main(void) {
  vector<int> nums = {1, 2, 4, 7, 9, 11};
  Solution solution;
  cout << solution.searchInsert(nums, 5);
  return 0;
}