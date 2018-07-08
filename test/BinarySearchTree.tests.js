#!/usr/bin/env node
'use strict';

const qunit = require('qunit');
const {BinarySearchTree} = require('../src/BinarySearchTree');

function fillSmallTree(){
    let tree = new BinarySearchTree();

    tree.insert(10, '10');
    tree.insert(20, '20');
    tree.insert(30, '30');
    tree.insert(40, '40');
    tree.insert(50, '50');
    tree.insert(15, '15');
    tree.insert(18, '18');
    tree.insert(25, '25');
    tree.insert(38, '38');
    tree.insert(28, '28');

    return tree;
}

function fillLargeTree(){
    let tree = new BinarySearchTree();

    for (let i = 0; i < 1000000; i++){
        tree.insert(i, i.toString())
    }

    return tree;
}

function fillHelloWorldTree(){
    let tree = new BinarySearchTree();

    tree.insert('h', 'H');
    tree.insert('e', 'e');
    tree.insert('l', 'l');
    tree.insert('l', 'l');  // test replacing :)
    tree.insert('o', 'o');
    tree.insert(' ', ' ');
    tree.insert('w', 'W');
    tree.insert('o', 'o');  // again test replacing ^_^
    tree.insert('r', 'r');
    tree.insert('l', 'l');  // and again??? O_o
    tree.insert('d', 'd');
    tree.insert('!', '!');

    return tree;
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// region Basic functionality tests

// region find() test

qunit.test('find() on small tree test 0', assert => {
    let tree = fillSmallTree();
    assert.equal(tree.find(0), undefined);
});

qunit.test('find() on small tree test 1', assert => {
    let tree = fillSmallTree();
    assert.equal(tree.find(10), '10')
});

qunit.test('find() on small tree test 2', assert => {
    let tree = fillSmallTree();
    assert.equal(tree.find(100000), undefined);
});

qunit.test('find() on large tree test 0', assert => {
    let tree = fillLargeTree();
    assert.equal(tree.find(100000), '100000');
});

qunit.test('find() on large tree test 1', assert => {
    let tree = fillLargeTree();
    assert.notEqual(tree.find(1000000), '1000000');
});

qunit.test('find() on \'HelloWorld!\' test', assert => {
    let tree = fillHelloWorldTree();

    let result = '';

    result += tree.find('h');
    result += tree.find('e');
    result += tree.find('l');
    result += tree.find('l');
    result += tree.find('o');
    result += tree.find(' ');
    result += tree.find('w');
    result += tree.find('o');
    result += tree.find('r');
    result += tree.find('l');
    result += tree.find('d');
    result += tree.find('!');

    assert.equal(result, 'Hello World!')

});

// endregion

// region remove() test

qunit.test('remove() on small tree', assert => {
    let tree = fillSmallTree();
    tree.remove(15);
    assert.equal(tree.find(15), undefined);
    assert.ok(tree.height() <= Math.ceil(Math.log2(tree.size())))
});

qunit.test('remove() on large tree', assert => {
    let tree = fillLargeTree();
    for (let i = 0; i < 500000; i++){
        tree.remove(randomInt(0, 1000000))
    }
    assert.ok(tree.height() <= Math.ceil(Math.log2(tree.size())))
});

qunit.test('remove() on \'Hello World!\' tree', assert => {
    let tree = fillHelloWorldTree();
    tree.remove('w');
    tree.remove(' ');
    assert.equal(tree.find(15), undefined);
    assert.equal(tree.find(' '), undefined);
    assert.equal(tree.find('w'), undefined);
    assert.ok(tree.height() <= Math.ceil(Math.log2(tree.size())))
});

// endregion

// endregion

// region Additional functionality test

// region findMax() tests

qunit.test('findMax() on small tree', assert => {
    let tree = fillSmallTree();
    assert.equal(tree.findMax(), 50);
});

qunit.test('findMax() on large tree', assert => {
    let tree = fillLargeTree();
    assert.equal(tree.findMax(), 999999);
});

qunit.test('findMax() on \'HelloWorld!\' tree', assert => {
    let tree = fillHelloWorldTree();
    assert.equal(tree.findMax(), 'w');
});

// endregion

// region findMin() tests

qunit.test('findMin() on small tree', assert => {
    let tree = fillSmallTree();
    assert.equal(tree.findMin(), 10);
});

qunit.test('findMin() on large tree', assert => {
    let tree = fillLargeTree();
    assert.equal(tree.findMin(), 0);
});

qunit.test('findMin() on \'HelloWorld!\' tree', assert => {
    let tree = fillHelloWorldTree();
    assert.equal(tree.findMin(), ' ');
});

// endregion

// region contains() tests

// region small tree

qunit.test('contains() on small tree test 0', assert => {
    let tree = fillSmallTree();
    assert.ok(tree.contains(10))
});

qunit.test('contains() on small tree test 1', assert => {
    let tree = fillSmallTree();
    assert.ok(tree.contains(18))
});

qunit.test('contains() on small tree test 2', assert => {
    let tree = fillSmallTree();
    assert.ok(tree.contains(50))
});

qunit.test('contains() on small tree test 3', assert => {
    let tree = fillSmallTree();
    assert.equal(tree.contains(26), false)
});

// endregion

// region large tree

qunit.test('contains() on large tree test 0', assert => {
    let tree = fillLargeTree();
    assert.ok(tree.contains(10))
});

qunit.test('contains() on large tree test 1', assert => {
    let tree = fillLargeTree();
    assert.ok(tree.contains(50))
});

qunit.test('contains() on large tree test 2', assert => {
    let tree = fillLargeTree();
    assert.ok(tree.contains(18))
});

qunit.test('contains() on large tree test 3', assert => {
    let tree = fillLargeTree();
    assert.ok(tree.contains(26))
});

qunit.test('contains() on large tree test 4', assert => {
    let tree = fillLargeTree();
    assert.equal(tree.contains(-1), false)
});

qunit.test('contains() on large tree test 5', assert => {
    let tree = fillLargeTree();
    assert.equal(tree.contains(1000000), false)
});

// endregion

// region hello world tree

qunit.test('contains() on \'Hello World!\' tree test 0', assert => {
    let tree = fillHelloWorldTree();
    assert.ok(tree.contains(' '))
});

qunit.test('contains() on \'Hello World!\' tree test 1', assert => {
    let tree = fillHelloWorldTree();
    assert.ok(tree.contains('l'))
});

qunit.test('contains() on \'Hello World!\' tree test 2', assert => {
    let tree = fillHelloWorldTree();
    assert.equal(tree.contains('!!'), false)
});

// endregion

// endregion

// region size() tests

qunit.test('size() on small tree', assert => {
    let tree = fillSmallTree();
    assert.equal(tree.size(), 10)
});

qunit.test('size() on large tree', assert => {
    let tree = fillLargeTree();
    assert.equal(tree.size(), 1000000)
});

qunit.test('size() on \'Hello World!\' tree', assert => {
    let tree = fillHelloWorldTree();
    assert.equal(tree.size(), 9)
});

// endregion

// region height() tests

qunit.test('height() on small tree', assert => {
    let tree = fillSmallTree();
    assert.ok(tree.height() <= Math.ceil(Math.log2(tree.size())))
});

qunit.test('height() on large tree', assert => {
    let tree = fillLargeTree();
    assert.ok(tree.height() <= Math.ceil(Math.log2(tree.size())))
});

qunit.test('height() on \'Hello World!\' tree', assert => {
    let tree = fillHelloWorldTree();
    assert.ok(tree.height() <= Math.ceil(Math.log2(tree.size())))
});

// endregion

// region inOrder() tests

qunit.test('inOrder() on small tree', assert => {
    let tree = fillSmallTree();
    assert.deepEqual(tree.inOrder(), [10, 20, 30, 40, 50, 18, 15, 25, 38, 28].sort())
});

qunit.test('inOrder() on large tree', assert => {
    let tree = fillLargeTree();

    let sortedArray = [];
    for (let i = 0; i < 1000000; i++)
        sortedArray.push(i)

    assert.deepEqual(tree.inOrder(), sortedArray)
});

qunit.test('inOrder() on \'Hello World!\' tree', assert => {
    let tree = fillHelloWorldTree();
    assert.deepEqual(tree.inOrder(), ['h', 'e', 'l', 'o', ' ', 'w', 'r', 'd', '!'].sort())
});

// endregion

// region toJson() tests

qunit.test('toJson() on small tree', assert => {
    let tree = fillSmallTree();

    let cmp = [];
    for (let element of [10, 20, 30, 40, 50, 18, 15, 25, 38, 28].sort())
        cmp.push({
            key: element,
            value: element.toString()
        })

    assert.deepEqual(JSON.parse(tree.toJson()), cmp)
});

qunit.test('toJson() on large tree', assert => {
    let tree = fillLargeTree();

    let cmp = [];
    for (let i = 0; i < 1000000; i++)
        cmp.push({
            key: i,
            value: i.toString()
        })

    assert.deepEqual(tree.toJson(), JSON.stringify(cmp))
});

qunit.test('toJson() on \'Hello World!\' tree', assert => {
    let tree = fillHelloWorldTree();

    let cmp = [];
    for (let element of ['h', 'e', 'l', 'o', ' ', 'w', 'r', 'd', '!'].sort())
        cmp.push({
            key: element,
            value: element !== 'h' && element !== 'w' ? element: element.toUpperCase()
        })

    assert.deepEqual(JSON.parse(tree.toJson()), cmp)
});

// endregion

// endregion