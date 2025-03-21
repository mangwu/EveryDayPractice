/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left),
 * right(right) {}
 * };
 */
class Solution {
public:
  TreeNode *sortedArrayToBST(vector<int> &nums) {
    int n = nums.size();
    return buildBst(nums, 0, n - 1);
  }
  TreeNode *buildBst(vector<int> &nums, int start, int end) {
    if (start > end)
      return nullptr;
    if (start == end)
      return new TreeNode(nums[start]);
    int m = (start + end) / 2;
    return new TreeNode(nums[m], buildBst(nums, start, m - 1),
                        buildBst(nums, m + 1, end));
  }
};