declare type Keys<Obj extends object> = Extract<keyof Obj, string>;

declare type ObjValues<Obj extends object> = { [K in keyof Obj]: Obj[K] }[keyof Obj];
declare type ArrayValues<V, A extends Array<V>> = { [I in keyof A]: A[I] }[keyof A];