declare type Arity0 = <R>() => R;
declare type Arity1 = <A, R>(a: A) => R;
declare type Arity2 = <A, B, R>(a: A, b: B) => R;
declare type Arity3 = <A, B, C, R>(a: A, b: B, c: C) => R;
declare type Arity<N extends number> = N extends 0
  ? Arity0
  : N extends 1 ? Arity1 : N extends 2 ? Arity2 : N extends 3 ? Arity3 : (...args: any[]) => any;

declare type Arg0<Fn extends (...args: any[]) => any> = Fn extends (a: infer A, ...args: any[]) => any ? A : never;
declare type Arg1<Fn extends (...args: any[]) => any> = Fn extends (a: infer A, b: infer B, ...args: any[]) => any
  ? A
  : never;
declare type Arg2<Fn extends (...args: any[]) => any> = Fn extends (
  a: infer A,
  b: infer B,
  c: infer C,
  ...args: any[]
) => any
  ? A
  : never;

declare type NthArg<N extends number, Fn extends (...args: any[]) => any> = N extends 0
  ? Arg0<Fn>
  : N extends 1 ? Arg1<Fn> : N extends 2 ? Arg2<Fn> : any;
