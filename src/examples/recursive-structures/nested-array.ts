const numbers = [0, 1, 2, [3, 4], 5, [6], [7], 8, [9]]

type NestedArrayElmt<T> = T | IndefiniteNestedArray<T>
interface IndefiniteNestedArray<T> extends Array<NestedArrayElmt<T>> {}

function isFlat<T>(arr: IndefiniteNestedArray<T>): arr is Array<T> {
  return !arr.some(Array.isArray)
}

function flatten<T>(arr: IndefiniteNestedArray<T>): T[] {
  const flattened: T[] = []

  for (const el of arr) {
    if (Array.isArray(el)) flattened.push(...flatten(el))
    else flattened.push(el)
  }

  return flattened
}

// function flatten<T>(arr: IndefiniteNestedArray<T>): T[] {
//   return arr.reduce<T[]>(
//     (flattened, el) =>
//       Array.isArray(el) ? [...flattened, ...flatten(el)] : [...flattened, el],
//     []
//   )
// }

console.log(flatten(numbers))
