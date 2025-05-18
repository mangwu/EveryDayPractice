#include <vector>

using namespace std;

class Solution {
public:
  void sortColors(vector<int> &nums) {
    int n = nums.size();
    int red = 0;
    int white = 0;
    for (int num : nums) {
      if (num == 0) {
        red++;
      } else if (num == 1) {
        white++;
      }
    }
    for (int i = 0; i < n; i++) {
      if (red > 0) {
        nums[i] = 0;
        red--;
      } else if (white > 0) {
        nums[i] = 1;
        white--;
      } else {
        nums[i] = 2;
      }
    }
  }
};