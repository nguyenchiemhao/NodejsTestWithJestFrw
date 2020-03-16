export interface InterfaceStack {
  clear(): void;
  contains(value): boolean;
  peek(): string;
  push(value): void;
  pop(): string;
  isEmpty(): boolean;
}
