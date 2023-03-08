# Explicit Types

## Contents

1. [Basics Overview](../TheBasics.md)
2. [Description](#description)

## Description

Up until now, we haven't told TypeScript what `person` or `date` are. Let's edit the code to tell TypeScript that `person` is a `string`, and that `date` should be a `Date` object. We'll also use the `toDateString()` method on `date`.

```TypeScript
function greet(person: string, date: Date) {
    console.log(`Hello ${peron}, today is ${date.toDateString()}!`);
}
```

What we did was add _type annotations_ on `person` and `date` to describe what types of values `greet` can be called with. You can read that signatures as "`greet` takes a `person` of type `string`, and a `date` of type `Date`.

with this, TypeScript can tell us about other cases where `greet` might have been called incorrectly. For example...

```TypeScript
function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet("Maddison", Date());
Argument of type 'string' is not assignable to parameter of type 'Date'.
```

Why the error?

Calling `Date()` in JavaScript returns a `string`. On the other hand, constructing a `Date` with `new Date()` actually gives us what we were expecting.

Anyway, we can quickly fix up the error:

```TypeScript
function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet("Maddison", new Date());
```

Keep in mind, we don’t always have to write explicit type annotations. In many cases, TypeScript can even just infer (or “figure out”) the types for us even if we omit them.

```TypeScript
let msg = "hello there!";

let msg: string
```

Even though we didn’t tell TypeScript that `msg` had the type `string` it was able to figure that out. That’s a feature, and it’s best not to add annotations when the type system would end up inferring the same type anyway.
