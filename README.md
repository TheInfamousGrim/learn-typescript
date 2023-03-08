# learn-typescript

A repository for all the notes and practice exercises on how typescript works.

## Contents

1. [Overview for JavaScript Programmers](#overview-for-javascript-programmers)
   - [Types by Inference](#types-by-inference)
   - [Defining Types](#defining-types)
   - [Composing Types](#composing-types)
   - [Structural Type System](#structural-type-system)
2. [The Basics](./Handbook/01-The-Basics/TheBasics.md)

## Overview for JavaScript Programmers

TypeScript has all of JavaScript features, as well as TypeScript's type system.

Although JavaScript has language primitive types like `string` and `number`, it doesn't check that you've consistently assigned theses. TypeScript does.

The main benefit of TypeScript is that it can highlight unexpected behaviour in your code, lowering the chance of bugs.

### Types by Inference

TypeScript knows the JavaScript language and will generate types for you in many cases.

For example when you create a variable and assign it a particular value.

```JavaScript

let helloWorld = 'Hello World';

    // let helloWorld: string

```

TypeScript builds on top of JavaScript a type system. This offers a type-system without needing to add extra characters to make types explicit in your code. That's how TypeScript knows that `helloWorld` is a `string` in the above example.

Visual Studio Code uses TypeScript under the hood to make it easier to work with JavaScript.

### Defining Types

Some design patterns make it difficult to infer a type (for example, patterns that use dynamic programming).

For example, to create an object with an inferred type which includes `name: string` and `id: number`, you can write:

```JavaScript
const user = {
    name: 'Hayes',
    id: 0,
}
```

You can explicitly describe the object's shape using an `interface` declaration:

```JavaScript
interface User {
    name: string,
    id: number,
}
```

You can declare that a JavaScript object conforms to the shape your new `interface` by using syntax like `: TypeName` after a variable declaration:

```JavaScript
const user: User = {
    name: 'Hayes',
    id: 0
}
```

If you provide an object that doesn't match the interface you have provided, TypeScript will warn you:

```JavaScript
interface User {
  name: string;
  id: number;
}

const user: User = {
  username: "Hayes",

    Type '{ username: string; id: number; }' is not assignable to type 'User'.
    Object literal may only specify known properties, and 'username' does not exist in type 'User'.

  id: 0,
};
```

Since JavaScript supports classes and object-orientated programming, so does TypeScript. You can use an interface declaration with classes:

```JavaScript
interface User {
  name: string;
  id: number;
}

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const user: User = new UserAccount("Murphy", 1);
```

You can use interfaces to annotate parameters and return values to functions:

```JavaScript
function getAdminUser(): User {
    // ..
}

function deleteUser(user: User) {
    // ..
}
```

There are already a small set of primitive types available in JavaScript `boolean`, `bigint`, `null`, `number`, `string`, `symbol` and `undefined`, which you use in an interface.

TypeScript extends this list with a few more, such as `any` (allow anything), `unknown` (ensure someon using this type declares what the type is), `never` (It's not possible that this type could happen), and `void` (a function which returns `undefined` or has no return value).

You'll see that there are two syntaxes for building types: **Interfaces and Types**. You should prefer `interface`. Use `type` when you need specific features.

### Composing Types

With TypeScript, you can create complex types by combining simple ones. You can either do this through **Unions** or **generics**

#### Unions

With a union, you can declare that type could be one of many types. For example, you can describe a `boolean` type as being either `true` or `false`:

```JavaScript
type MyBool = true | false;
```

_note_: TypeScript intellisense will infer this as a `boolean` type. That's a property of the Structural Type System. More on this below.

A popular use-case for union types is to describe the set of `string` or `number` **literals** that a value is allowed to be.

```JavaScript
type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;
```

Unions provide a way to handle different types too. For example, you may have a function that takes an `array` or a `string`:

```JavaScript
function getLength(obj: string | string[]) {
  return obj.length;
}
```

To learn the type of a variable, use `typeof`:

| **Type**  | **Predicate**                    |
| --------- | -------------------------------- |
| string    | typeof s === 'string'            |
| number    | typeof n === 'number'            |
| boolean   | typeof b === 'boolean'           |
| undefined | typeof undefined === 'undefined' |
| function  | typeof f === 'function'          |
| array     | Array.isArray(a)                 |

For example, you can make a function return different values depending on whether it is passed a string or an array:

```JavaScript
function wrapInArray(obj: string | string[]) {
  if (typeof obj === "string") {
    return [obj];

(parameter) obj: string
  }
  return obj;
}
```

#### Generics

Generics provide variables to types. A common example is an array. An array without generics could contain anything. An array with generics can describe the values that the array contains.

```JavaScript
type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;
```

You can declare your own types that use generics:

```JavaScript
interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}

// This line is a shortcut to tell TypeScript there is a
// constant called `backpack`, and to not worry about where it came from.
declare const backpack: Backpack<string>;

// object is a string, because we declared it above as the variable part of Backpack.
const object = backpack.get();

// Since the backpack variable is a string, you can't pass a number to the add function.
backpack.add(23);

// --> Argument of type 'number' is not assignable to parameter of type 'string'.
```

### Structural Type System

One of TypeScript's core principles is that type checking focuses on the _shape_ that values have. This is sometimes called "duck typing" or "structural typing".

In a structural types system, if two objects have the same shape, they are considered to be of the same type.

```JavaScript
interface Point {
  x: number;
  y: number;
}

function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}

// logs "12, 26"
const point = { x: 12, y: 26 };
logPoint(point);
```

The `point` variable is never declared to be a `Point` type. TypeScript compares the shape of `point` to the shape of `Point` in the type-check. They have the same shape, so the code passes.

The shape-matching only requires a subset of the object's fields to match.

```JavaScript
const point3 = { x: 12, y: 26, z: 89 };
logPoint(point3); // logs "12, 26"

const rect = { x: 33, y: 3, width: 30, height: 80 };
logPoint(rect); // logs "33, 3"

const color = { hex: "#187ABF" };
logPoint(color);
Argument of type '{ hex: string; }' is not assignable to parameter of type 'Point'.
  Type '{ hex: string; }' is missing the following properties from type 'Point': x, y
```

There is no difference between how classes and objects conform to shapes:

```JavaScript
class VirtualPoint {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const newVPoint = new VirtualPoint(13, 56);
logPoint(newVPoint); // logs "13, 56"
```

If the object or class has all the required properties, TypeScript will say they match, regardless of the implementation details.

[Contents](#contents)
