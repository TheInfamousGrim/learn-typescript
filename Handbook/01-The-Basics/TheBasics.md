# The Basics

## Contents

1. [Return to Main Contents](../../README.md)
2. [Overview](#overview)
3. [Static type-checking](./01-Static-Type-Checking/StaticTypeChecking.md)
4. [Non-exception Failures](./02-Non-exception-Failures/Non-exceptionFailures.md)
5. [Types for Tooling](./03-Types-for-Tooling/TypesForTooling.md)
6. [tsc, the TypeScript Compiler](./04-tsc-TypeScript-Compiler/tscTypeScriptCompiler.md)
7. [Emitting with Errors](./05-Emitting-with-Errors/EmittingWithErrors.md)
8. [Erased Types](./07-Erased-Types/ErasedTypes.md)

## Overview

Each and every value in JavaScript has a set of behaviours you can observe from running different operations. For example, consider some operations we might run on a variable `message`:

```JavaScript
// Accessing the property 'toLowerCase'
// on 'message' and then calling it
message.toLowerCase();
// Calling 'message'
message();
```

If we break this down, the first runnable line of code accesses a property called `toLowerCase` and then calls it. The second one tries to call `message` directly.

But assuming we don't know the value of `message`, we can't reliably say what results we'll get from trying to run any of this code. Each operation depends entirely on what value we had in the first place.

- Is `message` callable?
- Does it have a property called `toLowerCase` on it?
- If it does, is `toLowerCase` even callable?
- If both of these values are callable, what do they return?

We have to hope to get all these details correct when we're writing JavaScript.

Let's say `message` was defined in the following way.

```JavaScript
const message = 'Hello World!';
```

If we run `message.toLowerCase()`, we'll get the same string only in lower-case.

However the second line of code fails with an exception:

```JavaScript
TypeError: message is not a function
```

It'd be great if we could avoid mistakes like this.

When we run our code, the way that our JavaScript runtime chooses what to do is by figuring out the _type_ of the value - what sorts of behaviors and capabilities. That's part of what that `TypeError` is alluding to - It's saying that the string `'Hello World!'` cannot be called as a function.

For some values, such as the primitives `string` and `number`, we can identify their type at runtime using the `typeof` operator. But for other things like functions, there's no corresponding runtime mechanism to identify their types. For example consider this function:

```JavaScript
function fn(x) {
    return x.flip();
}
```

We can observe by reading the code that this function will only work if given an object with a callable `flip` property, but JavaScript doesn’t surface this information in a way that we can check while the code is running. The only way in pure JavaScript to tell what `fn` does with a particular value is to call it and see what happens. This kind of behavior makes it hard to predict what code will do before it runs, which means it’s harder to know what your code is going to do while you’re writing it.

Seen in this way, a type is the concept of describing which values can be passed to `fn` and which will crash. JavaScript only truly provides dynamic typing - running the code to see what happens.

The alternative is to use a _static_ type system to make predictions about what code is expected _before_ it runs.
