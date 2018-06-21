import { combineReducers } from "redux";

import { loading, success, failed } from "./processor";
// import { sessionPersistance } from "./login";

const rootReducers = combineReducers({
  loading,
  success,
  failed,
//   sessionPersistance
});

export default rootReducers;
