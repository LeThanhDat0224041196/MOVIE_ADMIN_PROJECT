import { combineReducers, createStore } from "redux";
import { userReducer } from "./reducers/userReducers";

const rootReducer = combineReducers({
    userReducer,
});

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)