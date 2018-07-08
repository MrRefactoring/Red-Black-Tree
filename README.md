[![Build Status](https://travis-ci.org/MrRefactoring/Red-Black-Tree.svg?branch=master)](https://travis-ci.org/MrRefactoring/Red-Black-Tree)

# node-red-black-tree
A red-black tree written 100% in JavaScript. Works both in node.js and in the browser.

The classical variant of the representation of the red-black tree algorithm is the RedBlackTree class
# Install
```
npm install node-red-black-tree
```
# Example
```js
let {RedBlackTree} = require('node-red-black-tree');

let tree = new RedBlackTree();

// Insert some items to tree
tree.insert('hello', 'Hello');
tree.insert('space', ' ');
tree.insert('world', 'World!');

// Remove something
tree.remove(' ');

// Find some items in the tree
console.log(tree.find('hello'), tree.find('world'));
```

# API
```js
let {RedBlackTree} = reuire('node-red-black-tree');
```
