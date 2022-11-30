import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { filmReducer } from "./reducers/filmReducers";
import { userReducer } from "./reducers/userReducers";

const rootReducer = combineReducers({
    userReducer: userReducer,
    filmReducer: filmReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
    rootReducer,
   composeEnhancers(applyMiddleware(thunk))
)