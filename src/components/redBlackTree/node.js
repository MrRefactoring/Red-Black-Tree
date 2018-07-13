const { compare } = require('../../common/compare');
const { red, black } = require('../../CONFIG.json');

class Node {
  constructor(key, value, color, parent) {
    this.key = key;
    this.value = value;

    this.parent = parent;
    this.left = null;
    this.right = null;

    this.color = color;
    this._length = 1;
  }

  insert(key, value) {
    const cmp = compare(key, this.key);

    if (cmp < 0) {
      if (this.left) {this.left.insert(key, value);} else {this.left = new Node(key, value, red, this);}
    } else if (cmp > 0) {
      if (this.right) {this.right.insert(key, value);} else {this.right = new Node(key, value, red, this);}
    } else this.value = value;

    this.rebalance(); // Restore balance in the tree
    this.recalculateLength();
  }

  rebalance() { // Restore balance in the tree
    if (this.right && this.left && this.right.isRed() && !this.left.isRed()) this.rotateLeft();
    if (this.left && this.left.left && this.left.isRed() && this.left.left.isRed()) this.rotateRight();
    if (this.left && this.right && this.left.isRed() && this.right.isRed()) this.flipColors();
  }

  recalculateLength() {
    this._length = ((this.left ? this.left.length() : 0) + (this.right ? this.right.length() : 0) + 1);
  }

  rotateLeft() {
    // Redefining relationships
    const pivot = this.right; // Define new root
    this.right = pivot.left;
    pivot.left = this.clone(); // copy

    // Redefining parents
    pivot.parent = this.parent;
    pivot.right.parent = pivot;
    pivot.left.parent = pivot;
    pivot.left.left.parent = pivot.left;
    pivot.left.right.parent = pivot.left;

    // Redefining colors
    pivot.color = black;
    pivot.left.color = red;

    this.setNode(pivot);
  }

  rotateRight() {
    // Redefining relationships
    const pivot = this.left; // Define new root
    this.left = pivot.right;
    pivot.right = this.clone(); // copy

    console.log(pivot);

    // Redefining parents
    pivot.parent = this.parent;
    pivot.left.parent = pivot;
    pivot.right.parent = pivot;
    pivot.right.left.parent = pivot.right;
    pivot.right.right.parent = pivot.right;

    // Redefining colors
    pivot.color = black;
    pivot.right.color = red;

    this.setNode(pivot);
  }

  setNode(node) {
    this.key = node.key;
    this.value = node.value;

    this.parent = node.parent;
    this.left = node.left;
    this.right = node.right;

    this.color = node.color;
    this._length = node._length;
  }

  flipColors() {
    this.color = this.color === red ? black : red;
    this.left.color = this.left.color === red ? black : red;
    this.right.color = this.right.color === red ? black : red;
  }

  isRed() {
    return this.color === red;
  }

  isBlack() {
    return this.color === black;
  }

  isLeaf() {
    return !this.left && !this.right;
  }

  length() {
    return this._length;
  }

  height() {
    return Math.max((this.left ? this.left.height() : 0), (this.right ? this.right.height() : 0)) + 1;
  }

  clone() {
    const node = new Node(this.key, this.value, this.color, this.parent);
    node.left = this.left;
    node.right = this.right;
    node._length = this._length;
    return node;
  }
}

module.exports.Node = Node;
