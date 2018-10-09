export interface IndefiniteNestedRecord<T> extends Record<string, IndefiniteNestedRecord<T> | T> {}
