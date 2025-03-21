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
  bool hasPathSum(TreeNode *root, int targetSum) {
    if (root == nullptr) {
      return targetSum == 0;
    }
    if (targetSum < 0)
      return false;
    if (root->left == nullptr && root->right == nullptr)
      return targetSum - root->val == 0;
    if (root->left == nullptr)
      return hasPathSum(root->right, targetSum - root->val);
    if (root->right == nullptr)
      return hasPathSum(root->left, targetSum - root->val);
    return hasPathSum(root->right, targetSum - root->val) ||
           hasPathSum(root->left, targetSum - root->val);
  }
};