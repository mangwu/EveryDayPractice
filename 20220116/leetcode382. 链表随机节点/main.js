// 给你一个单链表，随机选择链表的一个节点，并返回相应的节点值。每个节点 被选中的概率一样 。

// 实现 Solution 类：

// Solution(ListNode head) 使用整数数组初始化对象。
// int getRandom() 从链表中随机选择一个节点并返回该节点的值。链表中所有节点被选中的概率相等。

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {Number} val
 * @param {ListNode} next
 * @description 节点类
 */
function ListNode(val, next) {
	this.val = (val === undefined ? 0 : val);
	this.next = (next === undefined ? null : next);
}

/**
 * @param {ListNode} head
 */
var Solution = function(head) {
	this.node = head;
	this.data = [];
	while(this.node) {
		this.data.push(this.node.val);
		this.node = this.node.next;
	}
	this.size = this.data.length;
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function() {
	const randomNum = Math.floor(Math.random() * this.size);
	return this.data[randomNum];
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */