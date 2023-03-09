# Downleveling

## Content

1. [Basics Overview](../TheBasics.md)
2. [Description](#description)

## Description

One other difference you might notice if you're compiling to ES5 is the template string is rewritten from

```JavaScript
`Hello ${person}, today is ${date.toDateString()}!`;
```

to

```JavaScript
"Hello " + person + ", today is " + date.toDateString() + "!";
```

Why did this happen?

Template strings are a feature from a version of ECMAScript called ECMAScript 2015 (a.k.a. ECMAScript 6, ES2015, ES6, etc. - _don’t ask_). TypeScript has the ability to rewrite code from newer versions of ECMAScript to older ones such as ECMAScript 3 or ECMAScript 5 (a.k.a. ES3 and ES5). This process of moving from a newer or “higher” version of ECMAScript down to an older or “lower” one is sometimes called _downleveling_.

By default TypeScript targets ES3, an extremely old version of ECMAScript. We could have chosen something a little bit more recent by using the [target](https://www.typescriptlang.org/tsconfig#target) option in our `tsconfig.json`. Running with `--target es2015` changes TypeScript to target ECMAScript 2015, meaning code should be able to run wherever ECMAScript 2015 is supported. So running `tsc --target es2015 hello.ts` gives us the following output:

```JavaScript
function greet(person, date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
greet("Maddison", new Date());
```
