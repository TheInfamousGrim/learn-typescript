# Non-exception Failures

## Contents

1. [Basics Overview](../TheBasics.md)
2. [Description](#description)

## Description

So far we’ve been discussing certain things like runtime errors - cases where the JavaScript runtime tells us that it thinks something is nonsensical. Those cases come up because the [ECMAScript specification](https://tc39.es/ecma262/) has explicit instructions on how the language should behave when it runs into something unexpected.

For example, the specification says that trying to call something that isn’t callable should throw an error. Maybe that sounds like “obvious behavior”, but you could imagine that accessing a property that doesn’t exist on an object should throw an error too. Instead, JavaScript gives us different behavior and returns the value `undefined`:

```JavaScript
const user = {
  name: "Daniel",
  age: 26,
};
user.location; // returns undefined
```

Ultimately, a static type system has to make the call over what code should be flagged as a error in its system, even if it's "valid" JavaScript that won't immediately throw an error. In TypeScript, the following code produces an error about `location` not being defined:

```TypeScript
const user = {
  name: "Daniel",
  age: 26,
};

user.location;

    // --> Property 'location' does not exist on type '{ name: string; age: number; }'.
```

While sometimes that implies a trade-off in what you can express, the intent is to catch legitimate bugs in our programs. And TypeScript catches _a lot_ of legitimate bugs.

For example: typos,

```TypeScript
const announcement = "Hello World!";

// How quickly can you spot the typos?
announcement.toLocaleLowercase();
announcement.toLocalLowerCase();

// We probably meant to write this...
announcement.toLocaleLowerCase();
```

uncalled functions,

```TypeScript
function flipCoin() {
  // Meant to be Math.random()
  return Math.random < 0.5;

    Operator '<' cannot be applied to types '() => number' and 'number'.

}
```

or basic logic errors

```TypeScript
const value = Math.random() < 0.5 ? "a" : "b";
if (value !== "a") {
  // ...
} else if (value === "b") {

This condition will always return 'false' since the types '"a"' and '"b"' have no overlap.

  // Oops, unreachable
}
```
