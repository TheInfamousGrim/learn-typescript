# Emitting with Errors

## Contents

1. [Basics Overview](../TheBasics.md)
2. [Description](#description)

## Description

One thing thing you might not have noticed from the last example was that our `hello.js` file changed again. If we open that file up then we'll see that the contents still basically look the same as our input file. That might be a bit surprising given the fact the `tsc` reported an error about our code, but this is based on one of TypeScript's core values: much of the time, _you_ will know better than TypeScript.

To reiterate from earlier, type-checking code limits the sorts of programs you can run, and so there’s a tradeoff on what sorts of things a type-checker finds acceptable. Most of the time that’s okay, but there are scenarios where those checks get in the way. For example, imagine yourself migrating JavaScript code over to TypeScript and introducing type-checking errors. Eventually you’ll get around to cleaning things up for the type-checker, but that original JavaScript code was already working! Why should converting it over to TypeScript stop you from running it?

So TypeScript doesn’t get in your way. Of course, over time, you may want to be a bit more defensive against mistakes, and make TypeScript act a bit more strictly. In that case, you can use the [noEmitOnError](https://www.typescriptlang.org/tsconfig#noEmitOnError) compiler option. Try changing your `hello.ts` file and running `tsc` with that flag:

```bash
tsc --noEmitOnError hello.ts
```

You'll notice that `hello.ts` never gets updated.
