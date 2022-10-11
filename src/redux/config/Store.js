import { createStore } from "redux";
import todo from "../modules/todo"
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    todo:todo,
});
const store = createStore(rootReducer);

export default store;