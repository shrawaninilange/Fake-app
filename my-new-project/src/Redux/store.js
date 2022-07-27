import { legacy_createStore,combineReducers ,applyMiddleware} from "redux";
import thunk from "redux-thunk";
 import {reducer } from "./reducer/AppReducer"

 const root =combineReducers({reducer})


 export const store = legacy_createStore(root ,applyMiddleware(thunk));