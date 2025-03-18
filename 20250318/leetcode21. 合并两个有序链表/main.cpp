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
  ListNode *mergeTwoLists(ListNode *list1, ListNode *list2) {
    ListNode *header = new ListNode(-1);
    ListNode *pre = header;
    while (list1 != nullptr || list2 != nullptr) {
      int a = list1 ? list1->val : INT_MAX;
      int b = list2 ? list2->val : INT_MAX;
      if (a < b) {
        pre->next = list1;
        list1 = list1->next;
      } else {
        pre->next = list2;
        list2 = list2->next;
      }
      pre = pre->next;
    }
    return header->next;
  }
};