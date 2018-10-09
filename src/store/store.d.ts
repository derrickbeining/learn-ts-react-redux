// tslint:disable-next-line:no-any
declare type ActionHandlerDictionary<State = any> = {
  // tslint:disable-next-line:no-any
  [actionTypeName: string]: (...args: any[]) => State;
};

declare type ActionsFromHandlers<Handlers extends ActionHandlerDictionary> = {
  [K in keyof Handlers]: Handlers[K] extends ((state: infer S) => infer Ret)
    ? { type: K }
    : Handlers[K] extends ((state: infer S, payload: infer P) => infer Ret)
      ? { type: K; payload: P }
      : Handlers[K] extends (state: infer S, payload: infer P, meta: infer M) => infer Ret
        ? { type: K; payload: P; meta: M }
        : never
}[keyof Handlers];



//
// ─── WIP ────────────────────────────────────────────────────────────────────────
//

declare type ActionHandler =
  | (<R>() => R)
  | (<R, S>(state: S) => R)
  | (<R, S, P>(state: S, payload: P) => R)
  | (<R, S, P, M>(state: S, payload: P, meta: M) => R);

declare type CreatorFromHandler<T extends string, H extends (...args: any[]) => any> =
  H extends () => infer R
    ? () => { type: T }
    : H extends (s: infer S) => infer R
      ? () => { type: T }
      : H extends (s: infer S, p: infer P) => infer R
        ? (payload: P) => { type: T; payload: P }
        : H extends (s: infer S, p: infer P, m: infer M) => infer R
          ? (payload: P, meta: M) => { type: T; payload: P; meta: M }
          : never; // prettier-ignore

declare type ExtractCreatorsFromHandlers<H extends ActionHandlerDictionary> = {
  [Type in Keys<H>]: CreatorFromHandler<Type, H[Type]>
}; // prettier-ignore
