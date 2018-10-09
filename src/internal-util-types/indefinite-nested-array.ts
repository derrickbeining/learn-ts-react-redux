export interface IndefiniteNestedArray<T> extends Array<T | IndefiniteNestedArray<T>> {
  // tslint:disable-next-line:no-any
  [i: number]: T extends Array<any> ? IndefiniteNestedArray<T[number]> : T;
}
