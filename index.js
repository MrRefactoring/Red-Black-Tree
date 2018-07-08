#!/usr/bin/env node
'use strict';

const cmd = require('node-cmd');

console.log(`
|------------------------------------|
| Created by Vladislav Tupikin, 2018 |
| Licence: MIT                       |
|                                    |
| Algorithms code:                   |
|                                    |
|     'src/BinarySearchTree.js'      |
|           'src/Node.js'            |
|                                    |
| Tests code by qunit module:        |
|                                    |
|  'test/BinarySearchTree.test.js'   |
|                                    |
|************************************|
`);

console.log('Run the tests...\n');

cmd.get('qunit', (err, data) => {
    console.log(data);
});