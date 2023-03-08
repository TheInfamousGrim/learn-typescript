# tsc, the TypeScript Compiler

## Contents

1. [Basics Overview](../TheBasics.md)
2. [Description](#description)
   - [Installation](#installation)
   - [TS Config](#ts-config)
   - [First TypeScript Program](#first-typescript-program)

## Description

We've been talking about type-checking, but we haven't yet used our type-_checker_. Let's get acquainted with our the `tsc`, the TypeScript compiler. I prefer to install it locally per project so that each project is using a distinct version of TypeScript.

### Installation

First we'll need to initialize node project.

```bash
npm init
```

We'll need to grab it via npm.

```bash
npm install -D typescript @types/node
```

Update the package.json with a build script and change the type to module.

```json
{
  "type": "module",
  "scripts": {
    "build": "tsc"
  }
}
```

### TS Config

Create a tsconfig.json file

```bash
touch tsconfig.json
```

Use the `NodeNext` option to handle ES Modules with interop between CommonJS modules. If you want a detailed explanation of why this option is needed, check out this [Stack Overflow Thread](https://stackoverflow.com/questions/71463698/why-we-need-nodenext-typescript-compiler-option-when-we-have-esnext).

```json
{
  "compilerOptions": {
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "target": "ES2020",
    "sourceMap": true,
    "outDir": "dist"
  },
  "include": ["src/**/*"]
}
```

### First TypeScript Program

Now let's create our first TypeScript program: `hello.ts`:

```TypeScript
// Greets the world.
console.log("Hello world!");
```

This is just a simple hello world program that looks the exact same as a normal JavaScript program.

Compile the TypeScript using:

```bash
npm run build
```

and then simply run the program by navigating to the `dist` directory and running:

```bash
node hello.js
```

The compiler tries to emit clean readable code that looks like something a person would write. While that's not always so easy, TypeScript indents consistently, is mindful of when our code spans across different lines of code, and tries to keep comments around.

Let's introduce types:

```TypeScript
// This is an industrial-grade general-purpose greeter function:
function greet(person: string, date: string) {
  console.log(`Hello ${person}, today is ${date}!`);
}

greet("Brendan", "08/03/2023");
greet("Brendan");
```

Now if we compile again we'd get an error on the command line!

```bash
Expected 2 arguments, but got 1.
```

TypeScript is telling us we forgot to pass an argument to the `greet` function, and rightfully so. So far we’ve only written standard JavaScript, and yet type-checking was still able to find problems with our code. Thanks TypeScript!
