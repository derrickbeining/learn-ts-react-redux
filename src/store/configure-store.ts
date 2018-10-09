import { createStore, applyMiddleware } from 'redux';
import reduxThunk, { ThunkMiddleware, ThunkAction } from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import { initialState, rootReducer } from '../store';
import { ActionsU, RootState } from './models';
import * as Api from './api-client';

const thunkServices = { Api };
type Services = typeof thunkServices;

const middlewareEnhancer = applyMiddleware(reduxThunk.withExtraArgument(thunkServices) as ThunkMiddleware<
  RootState,
  ActionsU,
  Services
>);

export function configureStore(preloadedState: Partial<RootState> = initialState) {
  // const enhancers = [middlewareEnhancer];
  // const enhancer = composeWithDevTools(...enhancers);

  return createStore(rootReducer, preloadedState, middlewareEnhancer);
}

export const store = configureStore();
export const { dispatch, getState } = store;
export type MyDispatch = typeof dispatch;
export type GetState = typeof getState;
// tslint:disable-next-line:no-any
export type Thunk<R> = (...args: any[]) => ThunkAction<Promise<R | void>, ReturnType<GetState>, Services, ActionsU>;
