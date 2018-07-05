import { combineReducers } from "redux";

import { loading, success, failed } from "./processor";
import { categoryproduct } from "./categoryproduct";
import { brandsproduct } from "./brandsproduct"
import { product, searchproduct,receiveSingleProductWithId, relatedProduct, singleRelatedProdct  } from "./product"
import { banners } from "./banners"
import { productsubcategories } from "./productsubcategories"
import { getsingleuser } from "./getsingleuser"
import { sessionPersistance } from "./login"
import { editpassword, editemail } from "./editprofile"
import { wishlist } from "./wishlist"
import { userreview } from "./userreview"
import { cartuser } from "./cart"
import { usershipping } from "./usershipping"
import { registerresult } from "./registerresult"
import { userbank } from "./bank"

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
  userreview,
  cartuser,
  usershipping,
  registerresult,
  userbank,
  receiveSingleProductWithId,
  relatedProduct,
  singleRelatedProdct
//   sessionPersistance
});

export default rootReducers;
