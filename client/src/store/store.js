import { configureStore ,combineReducers} from "@reduxjs/toolkit";
import reducers from "./slices";

const rootReducer = (state, action)=>{
  if(action.type === 'logout') {
    return reducers(undefined, action);
  }
  return reducers(state, action);
}
export const store = configureStore({
  reducer: rootReducer,
});

export default store;
