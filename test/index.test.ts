import { RedBlackTree } from '../src';

describe('RB Tree test', () => {
  it('should create new instance', () => {
    const tree = new RedBlackTree();

    expect(tree).toBeDefined();
  });

  it('should initialize with node', () => {
    const tree = new RedBlackTree('key', 'value');

    expect(tree.find('key')).toEqual('value');
  });

  describe('insert and find test', () => {
    let tree: RedBlackTree;

    beforeEach(() => {
      tree = new RedBlackTree();
    });

    it('should insert \'Hello world!\'', () => {
      const symbols = 'Hello world!'.split('');

      symbols.forEach(symbol => tree.insert(symbol, symbol.toLowerCase()));
      symbols.forEach(symbol => {
        expect(tree.find(symbol)).toEqual(symbol.toLowerCase());
      });

      expect(tree.find('W')).toBeUndefined();
      expect(tree.find('h')).toBeUndefined();
    });
  });
});
