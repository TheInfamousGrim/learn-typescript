# Interfaces

## Contents

1. [Return to Everyday Types](../EverydayTypes.md)
2. [Description](#description)

## Description

An _interface declaration_ is another way to name an object type:

```TypeScript
interface Point {
  x: number;
  y: number;
}

function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });
```

Just like when we used a type alias above, the example works just as if we had used an anonymous object type. TypeScript is only concerned with the _structure_ of the value we passed to `printCoord` - it only cares that it has the expected properties. Being concerned only with the structure and capabilities of types is why we call TypeScript a _structurally_ typed type system.

### Differences Between Type Aliases and Interfaces

Type aliases and interfaces are very similar, and in many cases you can choose between them freely. Almost all features of an `interface` are available in `type`, the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.

<table>
<tr>
<td> <h3>Interface</h3> </td> <td><h3>Type</h3></td>
</tr>
<tr>
<td>
Extending an interface

```TypeScript
interface Animal {
  name: string
}

interface Bear extends Animal {
  honey: boolean
}

const bear = getBear()
bear.name
bear.honey;
```

</td>
<td>
Extending a type via intersections

```TypeScript
type Animal = {
  name: string
}

type Bear = Animal & {
  honey: boolean
}

const bear = getBear();
bear.name;
bear.honey;
```

</td>
</tr>
<tr>
<td>
Adding new fields to an existing interface

```TypeScript
interface Window {
  title: string
}

interface Window {
  ts: TypeScriptAPI
}

const src = 'const a = "Hello World"';
window.ts.transpileModule(src, {});
```

</td>
<td>
A type cannot be changed after being created

```TypeScript
type Window = {
  title: string
}

type Window = {
  ts: TypeScriptAPI
}

 // Error: Duplicate identifier 'Window'.

```

</td>
</tr>
</table>

You’ll learn more about these concepts in later chapters, so don’t worry if you don’t understand all of these right away.

For the most part, you can choose based on personal preference, and TypeScript will tell you if it needs something to be the other kind of declaration. If you would like a heuristic, use `interface` until you need to use features from `type`.
