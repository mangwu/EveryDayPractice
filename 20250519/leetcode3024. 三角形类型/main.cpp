#include <string>
#include <vector>

using namespace std;

class Solution {
public:
  string triangleType(vector<int> &nums) {
    if (nums[0] == nums[1] && nums[1] == nums[2]) {
      return "equilateral";
    }
    if (nums[0] == nums[1] && nums[0] + nums[1] > nums[2]) {
      return "isosceles";
    }
    if (nums[0] == nums[2] && nums[0] + nums[2] > nums[1]) {
      return "isosceles";
    }
    if (nums[1] == nums[2] && nums[1] + nums[2] > nums[0]) {
      return "isosceles";
    }
    if (
      nums[0] + nums[1] > nums[2] && nums[0] + nums[2] > nums[1] &&
      nums[1] + nums[2] > nums[0]) {
      return "scalene";
    }
    return "none";
  }
};