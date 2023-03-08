# Types for Tooling

## Contents

1. [Basics Overview](../TheBasics.md)
2. [Description](#description)

## Description

TypeScript can catch bugs when we make mistakes in our code. That's great, but TypeScript can _also_ prevent us from making those mistakes in the first place.

The type-checker has information to check things like whether we're accessing the right properties. Oncie it has that information, it can also start _suggesting_ which properties you might want to use.

That means TypeScript can be leveraged for editing code too, and the core type-checker can provide error messages and code completion as you type in the editor. That's part of what people often refer to when the talk about tooling in TypeScript.

TypeScript takes tooling seriously, and that goes beyond completions and errors as you type. An editor that supports TypeScript can deliver "quick fixes" to automatically fix errors, refactoring to easily re-organize code, and useful navigation features for jumping to definitions of a variable, or finding all references to a give variable. All of this is built on top of the type-checker and is fully cross-platform, so it's likely that your favorite editor has TypeScript support available.
