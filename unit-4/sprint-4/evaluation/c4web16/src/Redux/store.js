// create store here
import {  legacy_createStore as createStore} from "redux";
import { reducer } from "./reducer";
const initialState={
    count:0,
  products:{
      isLoding:false,

      isError:false,
      data:[]
  }
}
export const store=createStore(reducer,initialState)

export const storee = {};


// do not remove this code, its for testing purpose
if (window.Cypress) {
  window.store = store;
}
