# Type Annotations on Variables

## Contents

1. [Return to Everyday Types](../EverydayTypes.md)
2. [Description](#description)

## Description

When you declare a variable use `const`, `var` or `let`, you can optionally add a type annotation to explicitly specify the type of the variable:

```TypeScript
let myName: string = "Alice";
```

> TypeScript doesn't use "types on the left"-style declarations like `int x = 0`: Type annotations will always go _after_ the thing being typed.

In most cases, though, this isn't needed. Whenever possible, TypeScript tries to automatically _infer_ the types in your code. For example, the type of a variable is inferred based on the type of its intializer:

```TypeScript
// No type annotation needed -- 'myName' inferred as type 'string'
let myName = "Alice";
```

For the most part you don’t need to explicitly learn the rules of inference. If you’re starting out, try using fewer type annotations than you think - you might be surprised how few you need for TypeScript to fully understand what’s going on.
