interface Point {
  x: number;
  y: number;
}

function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });

/* ------------------------------- Interfaces ------------------------------- */

// Extending an interface
interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean;
}

const getBear = (bear: Bear) => {
  return bear;
};

const bear = getBear({ name: "baloo", honey: true });
bear.name;
bear.honey;

// Adding new fields to an existing interface
interface Window {
  title: string;
}

interface Window {
  ts: string;
}

const src = `const a = "Hello World"`;
// window.ts.transpileModule(src, {});

/* ---------------------------------- Types --------------------------------- */

// Extending a type via intersections

type Animal2 = {
  name: string;
};

type Bear2 = Animal & {
  honey: boolean;
};

const bear2 = getBear({ name: "yogi", honey: false });
bear2.name;
bear2.honey;

// A type cannot be changed after being created

type Window2 = {
  title: string;
};

// type Window = {
//     ts: TypeScriptAPI
// }

// Error: Duplicate identifier 'Window'.
