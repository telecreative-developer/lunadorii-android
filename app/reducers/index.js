import { combineReducers } from "redux";

import { loading, success, failed } from "./processor";
import { categoryproduct } from "./categoryproduct";
import { brandsproduct } from "./brandsproduct"
import { product } from "./product"
import { banners } from "./banners"
import { productsubcategories } from "./productsubcategories"
import { getsingleuser } from "./getsingleuser"
import { sessionPersistance } from "./login"
import { editpassword, editemail } from "./editprofile"
import { wishlist } from "./wishlist"
// import { sessionPersistance } from "./login";

const rootReducers = combineReducers({
  loading,
  success,
  failed,
  categoryproduct,
  brandsproduct,
  product,
  banners,
  productsubcategories,
  getsingleuser,
  sessionPersistance,
  editpassword,
  editemail,
  wishlist,
//   sessionPersistance
});

export default rootReducers;
