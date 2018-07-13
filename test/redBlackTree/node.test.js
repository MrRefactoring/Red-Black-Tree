const { red, black } = require('../../src/CONFIG.json');
const { Node } = require('../../src/components/redBlackTree/node');

describe('Colour test', () => {
  it('should equal red', () => {
    const node = new Node('key', 'value', red, null);
    expect(node.isRed()).toEqual(true);
    expect(node.isBlack()).toEqual(false);
  });

  it('should equal black', () => {
    const node = new Node('key', 'value', black, null);
    expect(node.isRed()).toEqual(false);
    expect(node.isBlack()).toEqual(true);
  });
});

describe('Leaf test', () => {
  it('when creating new node should return empty', () => {
    const node = new Node('', '', black, null);
    expect(node.isLeaf()).toEqual(true);
  });

  it('when node.left not null should return false', () => {
    const node = new Node('', '', black, null);
    node.left = new Node('', '', red, node);
    expect(node.isLeaf()).toEqual(false);
  });

  it('when node.right not null should return false', () => {
    const node = new Node('', '', black, null);
    node.right = new Node('', '', red, node);
    expect(node.isLeaf()).toEqual(false);
  });

  it('when node.right and node.left not null should return false', () => {
    const node = new Node('', '', black, null);
    node.left = new Node('', '', red, node);
    node.right = new Node('', '', red, node);
    expect(node.isLeaf()).toEqual(false);
  });
});


describe('Length test', () => {
  it('should return 1', () => {
    const node = new Node('', '', black, null);
    expect(node.length()).toEqual(1);
  });

  it('should return 2', () => {
    const node = new Node('', '', black, null);
    node.insert('test', 'test');
    expect(node.length()).toEqual(2);
  });
});

describe('Rotation test', () => {
  let left_tree,
    right_tree;

  beforeEach(() => {
    left_tree = new Node(3, 3, black, null);
    left_tree.left = new Node(2, 2, black, left_tree);
    left_tree.right = new Node(5, 5, red, left_tree);
    left_tree.right.left = new Node(4, 4, black, left_tree.right);
    left_tree.right.right = new Node(7, 7, black, left_tree.right);

    right_tree = new Node(5, 5, black, null);
    right_tree.right = new Node(7, 7, black, right_tree);
    right_tree.left = new Node(3, 3, red, right_tree);
    right_tree.left.left = new Node(2, 2, black, right_tree.left);
    right_tree.left.right = new Node(4, 4, black, right_tree.left);
  });

  it('left rotation', () => {
    left_tree.rotateLeft();
    expect(left_tree).toEqual(right_tree);
  });

  it('right rotation', () => {
    right_tree.rotateRight();
    expect(right_tree).toEqual(left_tree);
  });
});
