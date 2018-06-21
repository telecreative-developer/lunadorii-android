import { combineReducers } from "redux";

import { loading, success, failed } from "./processor";
import { categoryproduct } from "./categoryproduct";
import { brandsproduct } from "./brandsproduct"
// import { sessionPersistance } from "./login";

const rootReducers = combineReducers({
  loading,
  success,
  failed,
  categoryproduct,
  brandsproduct
//   sessionPersistance
});

export default rootReducers;
