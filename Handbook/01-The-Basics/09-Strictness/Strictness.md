# Strictness

## Contents

1. [Basics Overview](../TheBasics.md)
2. [Description](#description)

## Description

Different users come to TypeScript looking for different things in a type-checker. Some people are looking for a more loose opt-in experience which can help validate only some parts of their program, and still have decent tooling. This is the default experience with TypeScript, where types are optional, inference takes the most lenient types, and there’s no checking for potentially `null/undefined` values. Much like how `tsc` emits in the face of errors, these defaults are put in place to stay out of your way. If you’re migrating existing JavaScript, that might be a desirable first step.

In contrast, a lot of users prefer to have TypeScript validate as much as it can straight away, and that’s why the language provides strictness settings as well. These strictness settings turn static type-checking from a switch (either your code is checked or not) into something closer to a dial. The further you turn this dial up, the more TypeScript will check for you. This can require a little extra work, but generally speaking it pays for itself in the long run, and enables more thorough checks and more accurate tooling. When possible, a new codebase should always turn these strictness checks on.

TypeScript has several type-checking strictness flags that can be turned on or off, and all of our examples will be written with all of them enabled unless otherwise stated. The [strict](https://www.typescriptlang.org/tsconfig#strict) flag in the CLI, or `"strict": true` in a [tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) toggles them all on simultaneously, but we can opt out of them individually. The two biggest ones you should know about are [noImplicitAny](https://www.typescriptlang.org/tsconfig#noImplicitAny) and [strictNullChecks](https://www.typescriptlang.org/tsconfig#strictNullChecks).

## `noImplicitAny`

Recall that in some places, TypeScript doesn’t try to infer types for us and instead falls back to the most lenient type: `any`. This isn’t the worst thing that can happen - after all, falling back to `any` is just the plain JavaScript experience anyway.

However, using `any` often defeats the purpose of using TypeScript in the first place. The more typed your program is, the more validation and tooling you’ll get, meaning you’ll run into fewer bugs as you code. Turning on the [noImplicitAny](https://www.typescriptlang.org/tsconfig#noImplicitAny) flag will issue an error on any variables whose type is implicitly inferred as any.

## `strictNullChecks`

By default, values like `null` and `undefined` are assignable to any other type. This can make writing some code easier, but forgetting to handle `null` and `undefined` is the cause of countless bugs in the world - some consider it a [billion dollar mistake](https://www.youtube.com/watch?v=ybrQvs4x0Ps)! The [strictNullChecks](https://www.typescriptlang.org/tsconfig#strictNullChecks) flag makes handling `null` and `undefined` more explicit, and _spares_ us from worrying about whether we _forgot_ to handle `null` and `undefined`.
