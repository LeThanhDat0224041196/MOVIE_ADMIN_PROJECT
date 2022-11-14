import { combineReducers, createStore } from "redux";
import { filmReducer } from "./reducers/filmReducers";
import { userReducer } from "./reducers/userReducers";

const rootReducer = combineReducers({
    userReducer: userReducer,
    filmReducer: filmReducer,
});

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)