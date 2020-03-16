import { InterfaceStack } from "./interfaces/InterfaceStack";

export default class Stack implements InterfaceStack {
  public stack: Array<any>;

  public constructor(stack) {
    this.stack = stack;
  }

  public push(value: any): void {
    // push element into the items
    this.stack.push(value);
  }
  public pop(): any {
    // return top most element in the stack
    // and removes it from the stack
    // Underflow if stack is empty
    if (this.stack.length === 0) return "Underflow";
    return this.stack.pop();
  }
  public peek(): string {
    // return the top most element from the stack
    // but does'nt delete it.
    return this.stack[this.stack.length - 1];
  }
  public contains(value: any): boolean {
    //check if value
    return this.stack.indexOf(value) ? true : false;
  }
  public isEmpty(): boolean {
    return this.stack.length === 0;
  }
  public clear(): void {
    //clear stack
    this.stack = [];
  }
}
