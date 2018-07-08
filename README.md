[![Build Status](https://travis-ci.org/MrRefactoring/Red-Black-Tree.svg?branch=master)](https://travis-ci.org/MrRefactoring/Red-Black-Tree)
[![Coverage Status](https://coveralls.io/repos/github/MrRefactoring/Red-Black-Tree/badge.svg?branch=master)](https://coveralls.io/github/MrRefactoring/Red-Black-Tree?branch=master)

# Red-Black-Tree
A red-black tree written 100% in JavaScript. Works both in node.js and in the browser.

The classical variant of the representation of the red-black tree algorithm is the RedBlackTree class
# Install
```
git clone https://github.com/MrRefactoring/Red-Black-Tree.git
npm i
```
# Example
```js
let {RedBlackTree} = require('./RedBlackTree');

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
let {RedBlackTree} = reuire('./RedBlackTree');
```
