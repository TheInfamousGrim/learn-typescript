# Functions

## Contents

1. [Return to Everyday Types](../EverydayTypes.md)
2. [Description](#description)
   - [Parameter Type Annotations](#parameter-type-annotations)
   - [Return Type Annotations](#return-type-annotations)

## Description

Functions are the primary means of passing data around in JavaScript. TypeScript allows you to specify the types of both the input and output values of functions.

### Parameter Type Annotations

When you declare a function, you can add type annotations after each parameter to declare what types of parameters the function accepts. Parameter type annotations go after the parameter name:

```TypeScript
// Parameter type annotation
function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}
```

When a parameter has a type annotation, arguments to that functions will be checked:

```TypeScript
// Would be a runtime error if executed!
greet(42);

// --> Argument of type 'number' is not assignable to parameter of type 'string'.
```

> Even if you don’t have type annotations on your parameters, TypeScript will still check that you passed the right number of arguments.

### Return Type Annotations

You can also add return type annotations. Return type annotations appear after the parameter list:

```TypeScript
function getFavoriteNumber(): number {
    return 26;
}
```

Much like variable type annotations, you usually don’t need a return type annotation because TypeScript will infer the function’s return type based on its `return` statements. The type annotation in the above example doesn’t change anything. Some codebases will explicitly specify a return type for documentation purposes, to prevent accidental changes, or just for personal preference.

### Anonymous Functions

Anonymous functions are a little bit different from function declarations. When a functions appears in a place where TypeScript can determine how it's going to be called, the parameters of that function are automatically given types.

Here's an example:

```TypeScript
// No type annotations here, but TypeScript can spot the bug
const names = ["Alice", "Bob", "Eve"];

// Contextual typing for function
names.forEach(function (s) {
  console.log(s.toUppercase());
// --> Property 'toUppercase' does not exist on type 'string'. Did you mean 'toUpperCase'?

});

// Contextual typing also applies to arrow functions
names.forEach((s) => {
  console.log(s.toUppercase());
// --> Property 'toUppercase' does not exist on type 'string'. Did you mean 'toUpperCase'?

});
```

Even though the parameter `s` didn't have a type annotation, TypeScript used the types of the `forEach` function, along with the inferred type of the array, to determine the type `s` will have.

This process is called _contextual_ typing because the _context_ that the function occurred within informs what type it should have.

Similar to the inference rules, you don’t need to explicitly learn how this happens, but understanding that it _does_ happen can help you notice when type annotations aren’t needed. Later, we’ll see more examples of how the context that a value occurs in can affect its type.
