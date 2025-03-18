#include <iostream>
#include <vector>

using namespace std;
class Solution {
public:
  int removeElement(vector<int> &nums, int val) {
    for (int i = 0; i < nums.size(); i++) {
      while (i < nums.size() && nums[i] == val) {
        swap(i, nums.size() - 1, nums);
        nums.pop_back();
      }
    }
    return nums.size();
  }
  void swap(int a, int b, vector<int> &nums) {
    int temp = nums[a];
    nums[a] = nums[b];
    nums[b] = temp;
  }
};

int main(void) {
  Solution solution;
  vector<int> nums = {1, 2, 2, 3, 4};
  cout << solution.removeElement(nums, 2) << endl;
  return 0;
}