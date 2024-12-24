// 在考场里，一排有 N 个座位，分别编号为 0, 1, 2, ..., N-1 。

// 当学生进入考场后，他必须坐在能够使他与离他最近的人之间的距离达到最大化的座位上。如果有多个这样的座位，他会坐在编号最小的座位上。(另外，如果考场里没有人，那么学生就坐在 0 号座位上。)

// 返回 ExamRoom(int N) 类，它有两个公开的函数：其中，函数 ExamRoom.seat() 会返回一个 int （整型数据），代表学生坐的位置；函数 ExamRoom.leave(int p) 代表坐在座位 p 上的学生现在离开了考场。每次调用 ExamRoom.leave(p) 时都保证有学生坐在座位 p 上。

const AvlTree = (() => {
  var t = {},
    e = {};
  class r {
    constructor(t) {
      (this._value = t),
        (this._left = null),
        (this._right = null),
        (this._parent = null);
    }
    setValue(t) {
      return (this._value = t), this;
    }
    getValue() {
      return this._value;
    }
    setLeft(t) {
      if (t && !(t instanceof r))
        throw new Error("setLeft expects a BinarySearchTreeNode");
      return (this._left = t || null), this;
    }
    getLeft() {
      return this._left;
    }
    hasLeft() {
      return this._left instanceof r;
    }
    setRight(t) {
      if (t && !(t instanceof r))
        throw new Error("setRight expects a BinarySearchTreeNode or null");
      return (this._right = t || null), this;
    }
    getRight() {
      return this._right;
    }
    hasRight() {
      return this._right instanceof r;
    }
    setParent(t) {
      if (t && !(t instanceof r))
        throw new Error("setParent expects a BinarySearchTreeNode or null");
      return (this._parent = t || null), this;
    }
    getParent() {
      return this._parent;
    }
    hasParent() {
      return this._parent instanceof r;
    }
    isRoot() {
      return null === this._parent;
    }
    isLeaf() {
      return !this.hasLeft() && !this.hasRight();
    }
  }
  e.BinarySearchTreeNode = r;
  const { BinarySearchTreeNode: i } = e,
    s = (t, e) => (t === e ? 0 : t > e ? 1 : -1);
  t.BinarySearchTree = class {
    constructor(t, e) {
      if (t && "function" != typeof t)
        throw new Error(
          "BinarySearchTree constructor expects a compare function"
        );
      (this._compare = t || s),
        (this._options = e || {}),
        (this._root = null),
        (this._count = 0);
    }
    insert(t) {
      const e = new i(t),
        r = (i) => {
          const s = this._compare(e.getValue(), i.getValue());
          s < 0
            ? i.hasLeft()
              ? r(i.getLeft())
              : (i.setLeft(e.setParent(i)), (this._count += 1))
            : s > 0
            ? i.hasRight()
              ? r(i.getRight())
              : (i.setRight(e.setParent(i)), (this._count += 1))
            : i.setValue(t);
        };
      return (
        null === this._root
          ? ((this._root = e), (this._count += 1))
          : r(this._root),
        this
      );
    }
    has(t) {
      const e = (r) => {
        if (null === r) return !1;
        const i = this._compare(t, r.getValue());
        return 0 === i || e(i < 0 ? r.getLeft() : r.getRight());
      };
      return e(this._root);
    }
    hasKey(t) {
      if (void 0 === this._options.key || null === this._options.key)
        throw new Error("Missing key prop name in constructor options");
      return this.has({ [this._options.key]: t });
    }
    find(t) {
      const e = (r) => {
        if (null === r) return null;
        const i = this._compare(t, r.getValue());
        return 0 === i ? r : e(i < 0 ? r.getLeft() : r.getRight());
      };
      return e(this._root);
    }
    findKey(t) {
      if (void 0 === this._options.key || null === this._options.key)
        throw new Error("Missing key prop name in constructor options");
      return this.find({ [this._options.key]: t });
    }
    max(t = this._root) {
      return null === t ? null : t.hasRight() ? this.max(t.getRight()) : t;
    }
    min(t = this._root) {
      return null === t ? null : t.hasLeft() ? this.min(t.getLeft()) : t;
    }
    lowerBound(t, e = !0) {
      let r = null;
      const i = (s) => {
        if (null === s) return r;
        const n = this._compare(t, s.getValue());
        return n > 0 || (e && 0 === n)
          ? ((null === r || this._compare(r.getValue(), s.getValue()) <= 0) &&
              (r = s),
            i(s.getRight()))
          : i(s.getLeft());
      };
      return i(this._root);
    }
    floor(t, e = !0) {
      return this.lowerBound(t, e);
    }
    upperBound(t, e = !0) {
      let r = null;
      const i = (s) => {
        if (null === s) return r;
        const n = this._compare(t, s.getValue());
        return n < 0 || (e && 0 === n)
          ? ((null === r || this._compare(r.getValue(), s.getValue()) >= 0) &&
              (r = s),
            i(s.getLeft()))
          : i(s.getRight());
      };
      return i(this._root);
    }
    ceil(t, e = !0) {
      return this.upperBound(t, e);
    }
    root() {
      return this._root;
    }
    count() {
      return this._count;
    }
    remove(t) {
      const e = (t, r) => {
        if (null === r) return !1;
        const i = this._compare(t, r.getValue());
        if (i < 0) return e(t, r.getLeft());
        if (i > 0) return e(t, r.getRight());
        if (r.isLeaf())
          return (
            r.isRoot()
              ? (this._root = null)
              : this._compare(t, r.getParent().getValue()) < 0
              ? r.getParent().setLeft(null)
              : r.getParent().setRight(null),
            (this._count -= 1),
            !0
          );
        if (!r.hasRight())
          return (
            r.isRoot()
              ? (this._root = r.getLeft())
              : this._compare(t, r.getParent().getValue()) < 0
              ? r.getParent().setLeft(r.getLeft())
              : r.getParent().setRight(r.getLeft()),
            r.getLeft().setParent(r.getParent()),
            (this._count -= 1),
            !0
          );
        if (!r.hasLeft())
          return (
            r.isRoot()
              ? (this._root = r.getRight())
              : this._compare(t, r.getParent().getValue()) < 0
              ? r.getParent().setLeft(r.getRight())
              : r.getParent().setRight(r.getRight()),
            r.getRight().setParent(r.getParent()),
            (this._count -= 1),
            !0
          );
        const s = this.min(r.getRight());
        return r.setValue(s.getValue()), e(s.getValue(), s);
      };
      return e(t, this._root);
    }
    traverseInOrder(t, e) {
      if ("function" != typeof t)
        throw new Error(".traverseInOrder expects a callback function");
      const r = (i) => {
        null === i ||
          (e && e()) ||
          (r(i.getLeft()), (e && e()) || (t(i), r(i.getRight())));
      };
      r(this._root);
    }
    traversePreOrder(t, e) {
      if ("function" != typeof t)
        throw new Error(".traversePreOrder expects a callback function");
      const r = (i) => {
        null === i || (e && e()) || (t(i), r(i.getLeft()), r(i.getRight()));
      };
      r(this._root);
    }
    traversePostOrder(t, e) {
      if ("function" != typeof t)
        throw new Error(".traversePostOrder expects a callback function");
      const r = (i) => {
        null === i ||
          (e && e()) ||
          (r(i.getLeft()), r(i.getRight()), (e && e()) || t(i));
      };
      r(this._root);
    }
    clear() {
      (this._root = null), (this._count = 0);
    }
  };
  var n = {},
    h = {};
  const a = (t, e) => (t === e ? 0 : t > e ? 1 : -1);
  class o {
    constructor(t, e) {
      if (e && "function" != typeof e)
        throw new Error("AvlTreeNode constructor expects a compare function");
      (this._value = t),
        (this._compare = e || a),
        (this._left = null),
        (this._right = null),
        (this._parent = null),
        (this._height = 1);
    }
    setValue(t) {
      return (this._value = t), this;
    }
    getValue() {
      return this._value;
    }
    setLeft(t) {
      if (t && !(t instanceof o))
        throw new Error("setLeft expects an AvlTreeNode");
      return (this._left = t || null), this;
    }
    getLeft() {
      return this._left;
    }
    hasLeft() {
      return this._left instanceof o;
    }
    setRight(t) {
      if (t && !(t instanceof o))
        throw new Error("setRight expects a AvlTreeNode or null");
      return (this._right = t || null), this;
    }
    getRight() {
      return this._right;
    }
    hasRight() {
      return this._right instanceof o;
    }
    setParent(t) {
      if (t && !(t instanceof o))
        throw new Error("setParent expects an AvlTreeNode");
      return (this._parent = t || null), this;
    }
    getParent() {
      return this._parent;
    }
    hasParent() {
      return this._parent instanceof o;
    }
    isRoot() {
      return null === this._parent;
    }
    isLeaf() {
      return !this.hasLeft() && !this.hasRight();
    }
    rotateLeft() {
      const t = this._right;
      return (
        null !== t &&
          (t.hasLeft() && t.getLeft().setParent(this),
          (this._right = t.getLeft()),
          t.setLeft(this),
          t.setParent(this._parent)),
        this.hasParent() &&
          null !== t &&
          (this._compare(this._parent.getValue(), t.getValue()) < 0
            ? this._parent.setRight(t)
            : this._parent.setLeft(t)),
        (this._parent = t),
        this.updateHeight(),
        this.hasParent() && this._parent.updateHeight(),
        this
      );
    }
    rotateRight() {
      const t = this._left;
      return (
        null !== t &&
          (t.hasRight() && t.getRight().setParent(this),
          (this._left = t.getRight()),
          t.setRight(this),
          t.setParent(this._parent)),
        this.hasParent() &&
          null !== t &&
          (this._compare(this._parent.getValue(), t.getValue()) > 0
            ? this._parent.setLeft(t)
            : this._parent.setRight(t)),
        (this._parent = t),
        this.updateHeight(),
        this.hasParent() && this._parent.updateHeight(),
        this
      );
    }
    rotateLeftRight() {
      return (
        this.hasLeft() && this._left.rotateLeft(), this.rotateRight(), this
      );
    }
    rotateRightLeft() {
      return (
        this.hasRight() && this._right.rotateRight(), this.rotateLeft(), this
      );
    }
    getLeftHeight() {
      return this.hasLeft() ? this.getLeft().getHeight() : 0;
    }
    getRightHeight() {
      return this.hasRight() ? this.getRight().getHeight() : 0;
    }
    updateHeight() {
      return (
        (this._height =
          Math.max(this.getLeftHeight(), this.getRightHeight()) + 1),
        this
      );
    }
    getHeight() {
      return this._height;
    }
    getBalance() {
      return this.getLeftHeight() - this.getRightHeight();
    }
    isBalanced() {
      const t = this.getBalance();
      return t >= -1 && t <= 1;
    }
  }
  h.AvlTreeNode = o;
  const { BinarySearchTree: g } = t,
    { AvlTreeNode: u } = h;
  n.AvlTree = class extends g {
    constructor(t, e) {
      if (t && "function" != typeof t)
        throw new Error("AvlTree constructor expects a compare function");
      super(t, e);
    }
    _balanceNode(t) {
      if (!t) return;
      t.updateHeight();
      const e = t.getBalance();
      e > 1
        ? t.getLeft().hasLeft()
          ? t.rotateRight()
          : t.getLeft().hasRight() && t.rotateLeftRight()
        : e < -1 &&
          (t.getRight().hasRight()
            ? t.rotateLeft()
            : t.getRight().hasLeft() && t.rotateRightLeft()),
        (e < -1 || e > 1) && t === this._root && (this._root = t.getParent());
    }
    insert(t) {
      const e = new u(t, this._compare),
        r = (i) => {
          const s = this._compare(t, i.getValue());
          s < 0
            ? i.hasLeft()
              ? (r(i.getLeft()), this._balanceNode(i))
              : (e.setParent(i),
                i.setLeft(e).updateHeight(),
                (this._count += 1))
            : s > 0
            ? i.hasRight()
              ? (r(i.getRight()), this._balanceNode(i))
              : (e.setParent(i),
                i.setRight(e).updateHeight(),
                (this._count += 1))
            : i.setValue(t);
        };
      return (
        null === this._root
          ? ((this._root = e), (this._count += 1))
          : r(this._root),
        this
      );
    }
    remove(t) {
      const e = (t, r) => {
        if (null === r) return !1;
        const i = this._compare(t, r.getValue());
        if (i < 0) {
          const i = e(t, r.getLeft());
          return this._balanceNode(r), i;
        }
        if (i > 0) {
          const i = e(t, r.getRight());
          return this._balanceNode(r), i;
        }
        if (r.isLeaf())
          return (
            r.isRoot()
              ? (this._root = null)
              : this._compare(t, r.getParent().getValue()) < 0
              ? r.getParent().setLeft(null).updateHeight()
              : r.getParent().setRight(null).updateHeight(),
            (this._count -= 1),
            !0
          );
        if (!r.hasRight())
          return (
            r.isRoot()
              ? (this._root = r.getLeft())
              : this._compare(t, r.getParent().getValue()) < 0
              ? r.getParent().setLeft(r.getLeft()).updateHeight()
              : r.getParent().setRight(r.getLeft()).updateHeight(),
            r.getLeft().setParent(r.getParent()),
            (this._count -= 1),
            !0
          );
        if (!r.hasLeft())
          return (
            r.isRoot()
              ? (this._root = r.getRight())
              : this._compare(t, r.getParent().getValue()) < 0
              ? r.getParent().setLeft(r.getRight()).updateHeight()
              : r.getParent().setRight(r.getRight()).updateHeight(),
            r.getRight().setParent(r.getParent()),
            (this._count -= 1),
            !0
          );
        const s = this.min(r.getRight()),
          n = e(s.getValue(), s);
        return r.setValue(s.getValue()), this._balanceNode(r), n;
      };
      return e(t, this._root);
    }
  };
  const { BinarySearchTree: l } = t,
    { BinarySearchTreeNode: c } = e,
    { AvlTree: f } = n,
    { AvlTreeNode: _ } = h;
  var p = {
      BinarySearchTree: l,
      BinarySearchTreeNode: c,
      AvlTree: f,
      AvlTreeNode: _,
    },
    R = p.AvlTree,
    L = p.AvlTreeNode,
    d = p.BinarySearchTree,
    P = p.BinarySearchTreeNode;
  return R;
})();
/**
 * @param {number} n
 */
var ExamRoom = function (n) {};

/**
 * @return {number}
 */
ExamRoom.prototype.seat = function () {};

/**
 * @param {number} p
 * @return {void}
 */
ExamRoom.prototype.leave = function (p) {};

/**
 * Your ExamRoom object will be instantiated and called as such:
 * var obj = new ExamRoom(n)
 * var param_1 = obj.seat()
 * obj.leave(p)
 */

// 0 - 100
// 0
// 100
// 50
// 25
// 75
// 12
// 37
//

// 0 - 9
// 0,
// 9,
// 4,
// 2,
// 6,
// 1,
// 3,
// 5,
// 7,
// 8
