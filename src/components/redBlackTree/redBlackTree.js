const { red, black } = require('../../CONFIG.json');
const { compare } = require('../../common/compare');
const { IllegalArgumentException } = require('./exceptions');

const { Node } = require('./node');

class RedBlackTree {
  constructor(key, value) {
    this._root = key != null && key !== undefined ? new Node(key, value, black, null) : null;
  }

  insert(key, value) {
    if (key == null || key === undefined) throw IllegalArgumentException(`key can not be ${key}`);
    if (value == null || value === undefined) return this.remove(key);
    if (this._root) {this._root.insert(key, value);} else {this._root = new Node(key, value, black, null);}
    return value;
  }

  remove(key) {

  }

  find(key) {
    let node = this.root(); // Start node for walking
    while (node && !node.isLeaf()) { // Walking of the tree, until node exist not a leaf (analog of binary search)
      const cmp = compare(key, node.key);
      if (cmp > 0) node = node.left;
      else if (cmp < 0) node = node.right;
      else return node.value;
    }
    if (node && !compare(key, node.key)) return node.value; // If node exist and keys equals
    return undefined;
  }

  length() {
    return this.root() ? this.root().length() : 0;
  }

  height() {
    return this.root() ? this.root().height() : 0;
  }

  root() {
    return this._root;
  }

  [Symbol.iterator]() {
    let index = -1;
    const keys = this.keys();

    return {
      next: () => ({ value: keys[++index], done: keys.length < index })
    };
  }
}

module.exports = RedBlackTree;
