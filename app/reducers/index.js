import { combineReducers } from "redux";

import { loading, success, failed } from "./processor";
import { categoryproduct } from "./categoryproduct";
import { brandsproduct } from "./brandsproduct"
import { product } from "./product"
import { getsingleuser } from "./getsingleuser"
// import { sessionPersistance } from "./login";

const rootReducers = combineReducers({
  loading,
  success,
  failed,
  categoryproduct,
  brandsproduct,
  product,
  getsingleuser
//   sessionPersistance
});

export default rootReducers;
