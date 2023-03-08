# Static type-checking

## Contents

1. [Basics Overview](../TheBasics.md)
2. [Description](#description)

## Description

Think back to that `TypeError` we got earlier from trying to call a `string` as a function. _Most people_ don't like to get any sorts of errors when running their code - those are considered bugs! And when we write new code, we try our best to avoid introducing new bugs.

If we add just a bit of code, save our file, re-run the code, and immediately see the error, we might be able to isolate the problem quickly; but that’s not always the case. We might not have tested the feature thoroughly enough, so we might never actually run into a potential error that would be thrown! Or if we were lucky enough to witness the error, we might have ended up doing large refactorings and adding a lot of different code that we’re forced to dig through.

Ideally, we could have a tool that helps us find these bugs _before_ our code runs. That's hwat a static type-checker like TypeScript does. _Static types systems_ describe the shapes and behaviors of what our values will be when we run our programs. A type-checker like TypeScript uses that information and tells us when things might be going off the rails.

```TypeScript
const message = 'hello!';

message();

// --> This expression is not callable.
    // Type 'String' has no call signatures.
```

Running that last sample with TypeScript will give us an error message before we run the code in the first place.
