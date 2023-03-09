// Parameter type annotation

function greet(firstName: string) {
  console.log(`Hello, ${firstName.toUpperCase()}!!`);
}

// Would be a runtime error if executed!
// greet(42);

// Return Type Annotations
function getFavoriteNumber(): number {
  return 26;
}

// Anonymous Functions

// No type annotations here, but TypeScript can spot the bug
const names = ["Alice", "Bob", "Eve"];

// Contextual typing for function
names.forEach(function (s) {
  console.log(s.toUpperCase());
});

// Contextual typing also applies to arrow functions
names.forEach((s) => {
  console.log(s.toUpperCase());
});
