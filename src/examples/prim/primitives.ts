// type Prim =
//   | boolean
//   | number
//   | string
//   | symbol
//   | null
//   | undefined
//   | never // Typescript only
//   | void; // Typescript only

// // little "o" object
// let littleObj: object;

// // a Prim is not an `object`
// littleObj = true;
// littleObj = 3;
// littleObj = 'foo';
// littleObj = null;
// littleObj = undefined;
// // but composite data structures are `object`s
// littleObj = {};
// littleObj = [];
// littleObj = function() {};

// // BIG "O" Object
// let bigObj: Object = {};
// bigObj.hasOwnProperty('hi');
// bigObj.isPrototypeOf(bigObj);
// bigObj = true;
// bigObj = 3;
// bigObj = 'foo';
// bigObj = null; // tsconfig.compilerOptions.strictNullChecks = true
// bigObj = undefined; // tsconfig.compilerOptions.strictNullChecks = true
// bigObj = {};
// bigObj = [];
// bigObj = function() {};

// // inferred type of object literal
// let litObj = {};
// litObj.wut;
// litObj.huh = 'huh?';
// litObj.hasOwnProperty('hi');
// litObj.isPrototypeOf(litObj);
// litObj = true;
// litObj = 3;
// litObj = 'foo';
// litObj = null; // tsconfig.compilerOptions.strictNullChecks = true
// litObj = undefined; // tsconfig.compilerOptions.strictNullChecks = true
// litObj = {};
// litObj = [];
// bigObj = function() {};
