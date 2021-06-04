import { createStore, applyMiddleware, compose } from "redux";
import userReducer from "redux/reducer/userReducer";
import { createLogger } from "redux-logger";

const logger = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  userReducer,
  composeEnhancers(applyMiddleware(logger))
);

export default store;
