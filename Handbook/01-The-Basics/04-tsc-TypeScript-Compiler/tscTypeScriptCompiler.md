# tsc, the TypeScript Compiler

## Contents

1. [Basics Overview](../TheBasics.md)
2. [Description](#description)
   - [Installation](#installation)
   - [TS Config](#ts-config)

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

### First TypeScript File

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
