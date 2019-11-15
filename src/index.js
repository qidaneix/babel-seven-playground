import bar from "./bar";

async function foo() {
  const a = await Promise.resolve(bar);
  return a;
}
