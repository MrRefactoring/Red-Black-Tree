export enum Color {
  red = 'red',
  black = 'black'
}

export class Node {
  private _key: string;
  private _value: any;
  private _color: Color;

  private _left: Node | null;
  private _right: Node | null;

  private _length: number;

  constructor(
    key: string,
    value: any,
    color?: Color
  ) {
    this._key = key;
    this._value = value;
    this._color = color || Color.black;

    this._left = null;
    this._right = null;

    this._length = 1;
  }

  public get key(): string {
    return this._key;
  }

  public get value(): any {
    return this._value;
  }

  public set value(value: any) {
    this._value = value;
  }

  public get color(): Color {
    return this._color;
  }

  public get left(): Node | null {
    return this._left;
  }

  public set left(node: Node | null) {
    if (this.left) {
      throw Error('Left node already exists');
    }

    this._left = node;

    this.forwardBalancer();
  }

  public get right(): Node | null {
    return this._right;
  }

  public set right(node: Node | null) {
    if (this.right) {
      throw Error('Right node already exists');
    }

    this._right = node;

    this.forwardBalancer();
  }

  public get length(): number {
    return this._length;
  }

  public get isLeaf(): boolean {
    return !this._left && !this._right;
  }

  public get isRed(): boolean {
    return this._color === Color.red;
  }

  public get isBlack(): boolean {
    return this._color === Color.black;
  }

  public forwardBalancer() {
    if ((this.right && this.right.isRed) && (this.left && this.left.isBlack)) {
      this.rotateLeft();
    }

    if ((this.left && this.left.isRed) && (this.left.left && this.left.left.isRed)) {
      this.rotateRight();
    }

    if ((this.left && this.left.isRed) && (this.right && this.right.isRed)) {
      this.swapColors();
    }

    this._length = (this.left && this.left.length || 0) + (this.right && this.right.length || 0) + 1;
  }

  private swapColors(): void {
    this._color = this.isRed ? Color.black : Color.red;
    this.left!._color = this.left!.isRed ? Color.black : Color.red;
    this.right!._color = this.right!.isRed ? Color.black : Color.red;
  }

  private rotateLeft(): Node {
    const currentNode = this.right!;

    this.right = currentNode.left;
    currentNode.left = this;
    currentNode._color = currentNode.left.color;
    currentNode.left._color = Color.red;
    currentNode._length = this.length;
    this._length = (this.left && this.left.length || 0) + (this.right && this.right.length || 0) + 1;

    return currentNode;
  }

  private rotateRight(): Node {
    const currentNode = this.left!;

    this.left = currentNode.right;
    currentNode.right = this;
    currentNode._color = currentNode.right.color;
    currentNode.right._color = Color.red;
    currentNode._length = this.length;

    this._length = (this.left && this.left.length || 0) + (this.right && this.right.length || 0) + 1;

    return currentNode;
  }
}
