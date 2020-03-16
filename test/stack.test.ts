import Stack from "../services/stack";

const stack = new Stack(["123", "Hảo", "Howie", 123, 22]);

test("Check stack", () => {
  expect(stack.stack).toEqual(["123", "Hảo", "Howie", 123, 22]);
});

test("Is empty return false", () => {
  expect(stack.isEmpty()).toBe(false);
});

test("Contains Howie must be true", () => {
  expect(stack.contains("Howie")).toBe(true);
});
//["123", "Hảo", "Howie", 123, 22]
test("Peek element length of stack must be 5", () => {
  let ele = stack.peek();
  expect(ele).toEqual(22);
});
//["123", "Hảo", "Howie", 123, 22]
test("Pop element must be 22 ", () => {
  let ele = stack.pop();
  expect(ele).toEqual(22);
});
//["123", "Hảo", "Howie", 123, 22, "hihi"]
test("Push element must be hihi", () => {
  stack.push("hihi");
  let ele = stack.peek();
  expect(ele).toEqual("hihi");
});

// place this function on top will be create bugssssssssss
test("Clear stack must be empty", () => {
  const testStack = stack;
  testStack.clear();
  expect(testStack.stack).toEqual([]);
});
