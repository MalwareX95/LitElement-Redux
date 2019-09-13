
import {createStore, StoreEnhancer, Reducer, compose, Store, combineReducers} from 'redux'
import { AppAction } from './actions/appTypes'
import { lazyReducerEnhancer } from 'pwa-helpers';
import { IAppState, appReducer } from './reducers/app';


declare global {
    interface Window {
      process?: Object;
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }


const devCompose: <Ext0, Ext1, StateExt0, StateExt1>(f1: StoreEnhancer<Ext0, StateExt0>, f2: StoreEnhancer<Ext1, StateExt1>) => StoreEnhancer<Ext0 & Ext1, StateExt0 & StateExt1> =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//#region 
// Initializes the Redux store with a lazyReducerEnhancer (so that you can
// lazily add reducers after the store has been created) and redux-thunk (so
// that you can dispatch async actions). See the "Redux and state management"
// section of the wiki for more details:
// https://github.com/Polymer/pwa-starter-kit/wiki/4.-Redux-and-state-management
// export const store = createStore(
//   state => state as Reducer<RootState, RootAction>,
//   devCompose(
//     lazyReducerEnhancer(combineReducers),
//     applyMiddleware(thunk as ThunkMiddleware<RootState, RootAction>))
// );
//#endregion

export const store = createStore(appReducer) as Store<IAppState, AppAction>
// export const store = createStore(combineReducers({appReducer})) as Store<IAppState, AppAction>