// 给定一个二叉树的根节点 root ，返回 它的 中序 遍历 。
#include <vector>
using namespace std;
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
  vector<int> inorderTraversal(TreeNode *root) {
    vector<int> nums;
    dfs(root, nums);
    return nums;
  }
  void dfs(TreeNode *node, vector<int> &nums) {
    if (!node) {
      return;
    }
    dfs(node->left, nums);
    nums.push_back(node->val);
    dfs(node->right, nums);
  }
};