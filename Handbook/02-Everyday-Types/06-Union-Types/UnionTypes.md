# Union Types

## Contents

1. [Return to Everyday Types](../EverydayTypes.md)
2. [Description](#description)
   - [Defining a Union Type](#defining-a-union-type)
   - [Working with Union Types](#working-with-union-types)

## Description

TypeScript’s type system allows you to build new types out of existing ones using a large variety of operators. Now that we know how to write a few types, it’s time to start _combining_ them in interesting ways.

### Defining a Union Type

The first way to combine types you might see is a _union_ type. A union type is a type formed from two or more other types, representing values that may be any one of those types. We refer to each of these types as the union’s _members_.

Let's write a function that can operate on strings or numbers:

```TypeScript
function printId(id: number | string) {
  console.log("Your ID is: " + id);
}
// OK
printId(101);
// OK
printId("202");
// Error
printId({ myID: 22342 });
// --> Argument of type '{ myID: number; }' is not assignable to parameter of type 'string | number'.
```

### Working with Union Types

It’s easy to _provide_ a value matching a union type - simply provide a type matching any of the union’s members. If you _have_ a value of a union type, how do you work with it?

TypeScript will only allow an operation if it is valid for every member of the union. For example, if you have the union `string | number`, you can’t use methods that are only available on `string`:

```TypeScript
function printId(id: number | string) {
  console.log(id.toUpperCase());
// --> Property 'toUpperCase' does not exist on type 'string | number'.
//   Property 'toUpperCase' does not exist on type 'number'.
}
```

The solutions is to _narrow_ the union with code, the same as you would in JavaScript without type annotations. _Narrowing_ occurs when TypeScript can deduce a more specific type for a value based on the structure of the code.

For example, TypeScript knows that only a `string` value will have a `typeof` value `"string"`:

```TypeScript
function printId(id: number | string) {
  if (typeof id === "string") {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase());
  } else {
    // Here, id is of type 'number'
    console.log(id);
  }
}
```

Another example is to use a function like `Array.isArray`:

```TypeScript
function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    // Here: 'x' is 'string[]'
    console.log("Hello, " + x.join(" and "));
  } else {
    // Here: 'x' is 'string'
    console.log("Welcome lone traveler " + x);
  }
}
```

Notice that in the `else` branch, we don't need to do anything special - if `x` wasn't a `string[]`, then it must have been a `string`.

Sometimes you’ll have a union where all the members have something in common. For example, both arrays and strings have a `slice` method. If every member in a union has a property in common, you can use that property without narrowing:

```TypeScript
// Return type is inferred as number[] | string
function getFirstThree(x: number[] | string) {
  return x.slice(0, 3);
}
```

> It might be confusing that a union of types appears to have the _intersection_ of those types’ properties. This is not an accident - the name union comes from type theory. The union `number | string` is composed by taking the union of the values from each type. Notice that given two sets with corresponding facts about each set, only the intersection of those facts applies to the union of the sets themselves. For example, if we had a room of tall people wearing hats, and another room of Spanish speakers wearing hats, after combining those rooms, the only thing we know about every person is that they must be wearing a hat.
