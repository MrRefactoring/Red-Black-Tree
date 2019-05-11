import { Color, Node } from './node';

export class RedBlackTree {
  private _root: Node | null;

  constructor(key?: string, value?: any) {
    if (!key) {
      this._root = null;
    } else {
      this._root = new Node(key, value);
    }
  }

  public insert(key: string, value: any): void {
    if (!this._root) {
      this._root = new Node(key, value);
      return;
    }

    const lastNode = this.findLastNode(key, true)!;

    const comparison = this.compare(key, lastNode.key);

    if (comparison < 0) {
      lastNode.left = new Node(key, value, Color.red);
    } else if (comparison > 0) {
      lastNode.right = new Node(key, value, Color.red);
    } else {
      lastNode.value = value;
    }

    lastNode.forwardBalancer();
  }

  public find(key: string): any | undefined {
    const node = this.findLastNode(key);

    return node && node.key === key && node.value || undefined;
  }

  private findLastNode(
    key: string,
    rebalance?: boolean
  ): Node | null {
    let previous: Node | null = null;
    let node: Node | null = this._root;

    while (node && !node.isLeaf) {
      const comparison = this.compare(key, node.key);

      previous = node;

      if (comparison < 0) {
        node = node.left;
      } else if (comparison > 0) {
        node = node.right;
      } else {
        if (rebalance) {
          node.forwardBalancer();
        }

        return node;
      }
    }

    return node || previous;
  }

  private compare(fKey: string, sKey: string): -1 | 0 | 1 {
    if (fKey < sKey) {
      return -1;
    } else if (fKey > sKey) {
      return 1;
    } else {
      return 0;
    }
  }
}
