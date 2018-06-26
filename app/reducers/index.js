import { combineReducers } from "redux";

import { loading, success, failed } from "./processor";
import { categoryproduct } from "./categoryproduct";
import { brandsproduct } from "./brandsproduct"
import { product, searchproduct } from "./product"
import { banners } from "./banners"
import { productsubcategories } from "./productsubcategories"
import { getsingleuser } from "./getsingleuser"
import { sessionPersistance } from "./login"
import { editpassword, editemail } from "./editprofile"
import { wishlist } from "./wishlist"
import { userreview } from "./userreview"

const rootReducers = combineReducers({
  loading,
  success,
  failed,
  categoryproduct,
  brandsproduct,
  product,
  searchproduct,
  banners,
  productsubcategories,
  getsingleuser,
  sessionPersistance,
  editpassword,
  editemail,
  wishlist,
<<<<<<< HEAD
  
=======
  userreview
>>>>>>> e0f0fdfdf8bc08af9dd4d990861abf27ce741ae6
//   sessionPersistance
});

export default rootReducers;
