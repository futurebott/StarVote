import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/index";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

export default function configureStore(initialState) {
  const ComposeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    rootReducer,
    initialState,
    ComposeEnhancers(applyMiddleware(reduxImmutableStateInvariant()))
  );
}
