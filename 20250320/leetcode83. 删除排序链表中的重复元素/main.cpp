#include <iostream>
using namespace std;
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
  ListNode *deleteDuplicates(ListNode *head) {
    ListNode *header = new ListNode(-1, head);
    ListNode *pre = header;
    ListNode *node = head;
    while (node != nullptr && node->next != nullptr) {
      if (node->val == node->next->val) {
        // 删除当前节点
        ListNode *next = node->next;
        node->next = nullptr;
        pre->next = next;
        delete node; // 删除当前节点
        node = next;
      } else {
        pre = node;
        node = node->next;
      }
    }
    ListNode *res = header->next;
    header->next = nullptr;
    delete header;
    return res;
  }
};
