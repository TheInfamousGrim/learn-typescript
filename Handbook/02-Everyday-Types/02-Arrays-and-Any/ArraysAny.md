# Arrays and `any`

## Contents

1. [Return to Everyday Types](../EverydayTypes.md)
2. [Description](#description)

## Description

### Arrays

To specify the type of an array like `[1, 2, 3]`, you can use the syntax `number[]`; this syntax works for any type (e.g. `string[]` is an array of strings, and so on). You may also see this written as `Array<number>`, which means the same thing. We'll learn more about the syntax `T<U>` when we cover _generics_.

> Note that `[number]` is a different thing; refer to the section on [Tuples](https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types)

### `any`

TypeScript also has a special type, `any`, that you can use whenever you don't wnat a particular value to cause typechecking errors.

When a value is type `any`, you can access any properties of it (which will in turn be of type `any`), call it like a function, assign it to (or from) a value of any type, or pretty much anything else that's syntactically legal:

```TypeScript
let obj: any = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;
```

The `any` type is useful when you don't want to write out a long type just to convince TypeScript that a particular line of code is okay.

#### `noImplicitAny`

When you don't specify a type, and TypeScript can't infer it from context, the compiler will typically default to `any`.

You usually want to avoid this, though, because `any` isn't type-checked. Use the compiler flag [noImplicitAny](https://www.typescriptlang.org/tsconfig#noImplicitAny) to flag any implicit `any` as an error.
