// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

// 你可以假设每种输入只会对应一个答案，并且你不能使用两次相同的元素。

// 你可以按任意顺序返回答案。

#include <vector>
#include <unordered_map>
#include <iostream>

using namespace std;

class Solution
{
public:
  vector<int> twoSum(vector<int> &nums, int target)
  {
    int n = nums.size();
    unordered_map<int, int> hashtable;
    for (int i = 0; i < n; i++)
    {
      auto it = hashtable.find(target - nums[i]);
      if (it != hashtable.end())
      {
        return {it->second, i};
      }
      hashtable[nums[i]] = i;
    }
    return {};
  }
};

int main(void)
{
  // Solution solution = new Solution();
  auto nums = {1, 2, 3, 4};
  cout << nums << endl;
  // vector<int> ans = solution.twoSum({1, 2, 3, 4}, 5);
  // cin >> ans;
  // cout << ans << endl;
  return 0;
}