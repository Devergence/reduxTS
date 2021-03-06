import { combineReducers } from "redux";
import { userReducer } from "./userReduser";
import {todoReducer} from "./todoReducers";

export const rootReducer = combineReducers({
  users: userReducer,
  todo: todoReducer,
})

export type RootState = ReturnType<typeof rootReducer>