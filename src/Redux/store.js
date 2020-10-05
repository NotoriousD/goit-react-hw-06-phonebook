import { createStore, combineReducers } from "redux";
import contactReducer from "./Reducers/contacts";
import filterReducer from "./Reducers/filter";

const rootReducer = combineReducers({
  contact: contactReducer,
  filter: filterReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
