import { JSPrimitive } from './js-primitive';
import { DeepReadonly } from 'utility-types';
import { IndefiniteNestedRecord } from './indefinite-nested-record';
import { IndefiniteNestedArray } from './indefinite-nested-array';
import { _DeepReadonlyObject } from 'utility-types/dist/mapped-types';

export type ValidReduxPrimitive = Exclude<JSPrimitive, undefined | null>;

export interface ValidReduxRecord
  extends IndefiniteNestedRecord<ValidReduxPrimitive | ValidReduxArray> {}

export type ValidReduxArray = Array<ValidReduxPrimitive | ValidReduxRecord>;

export type ValidReduxValue =
  | DeepReadonly<IndefiniteNestedRecord<ValidReduxPrimitive | ValidReduxArray>>
  | DeepReadonly<IndefiniteNestedArray<ValidReduxPrimitive | ValidReduxRecord>>
  | ValidReduxPrimitive;
