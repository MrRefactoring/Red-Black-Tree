const Tree = require('../../src/components/redBlackTree/redBlackTree');

function fillSmallTree() {
  const tree = new Tree();

  [10, 20, 30, 40, 50, 18, 15, 25, 38, 28].forEach((item) => {
    tree.insert(item, item.toString());
  });

  return tree;
}

function fillLargeTree() {
  const tree = new Tree();

  for (let i = 0; i < 1000000; i++) {tree.insert(i, i.toString());}

  return tree;
}

describe('constructor test', () => {
  it('root should be null', () => {
    const tree = new Tree();
    expect(tree.root()).toEqual(null);
  });
});

describe('find() tests', () => {
  describe('small tree', () => {
    let tree;

    beforeEach(() => {
      tree = fillSmallTree();
    });

    it('should return undefined', () => {
      expect(tree.find(100)).toEqual(undefined);
    });

    it('should return 10', () => {
      expect(tree.find(10)).toEqual('10');
    });
  });
});

describe('height() tests', () => {
  it('should return 0', () => {
    const tree = new Tree();
    expect(tree.height()).toEqual(0);
  });

  it('should return 1', () => {
    const tree = new Tree('t', 'e');
    expect(tree.height()).toEqual(1);
  });

  it('height() on small tree', () => {
    const tree = fillSmallTree();
    expect(tree.height() <= Math.ceil(Math.log2(tree.length()))).toEqual(true);
  });
});


describe('length() tests', () => {
  it('should return 0', () => {
    const tree = new Tree();
    expect(tree.length()).toEqual(0);
  });

  it('should return 1', () => {
    const tree = new Tree('', '');
    expect(tree.length()).toEqual(1);
  });

  it('should return 10', () => {
    const tree = fillSmallTree();
    expect(tree.length()).toEqual(10);
  });

  it('should return 1000000', () => {
    const tree = fillLargeTree();
    expect(tree.length()).toEqual(1000000);
  });
});
