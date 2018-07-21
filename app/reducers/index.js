import { combineReducers } from "redux";
import { reducer as network } from 'react-native-offline';

import { loading, success, failed } from "./processor";
import { categoryproduct } from "./categoryproduct";
import { brandsproduct } from "./brandsproduct"
import { product, searchproduct,receiveSingleProductWithId, 
         relatedProduct, singleRelatedProdct, receiveProductWithCategory, 
         productbestseller, producthistory, productrecent,
         receiveProductWithBrand, receiveProductWithBanner } from "./product"
import { banners } from "./banners"
import { productsubcategories } from "./productsubcategories"
import { getsingleuser } from "./getsingleuser"
import { sessionPersistance } from "./login"
import { editname, editpassword, editemail, editavatar } from "./editprofile"
import { wishlist } from "./wishlist"
import { userreview } from "./userreview"
import { getResultReport } from "./report"
import { cartuser } from "./cart"
import { usershipping, receiveProvince } from "./usershipping"
import { registerresult } from "./registerresult"
import { userbank, bank, manipulatebank } from "./bank"
import { receiveCourier } from "./shipping"


const rootReducers = combineReducers({
  loading,
  success,
  failed,
  network,
  categoryproduct,
  brandsproduct,
  product,
  productbestseller,
  productrecent,
  producthistory,
  searchproduct,
  banners,
  productsubcategories,
  getsingleuser,
  sessionPersistance,
  editname,
  editpassword,
  editemail,
  editavatar,
  wishlist,
  userreview,
  getResultReport,
  cartuser,
  usershipping,
  registerresult,
  userbank,
  bank,
  manipulatebank,
  receiveSingleProductWithId,
  relatedProduct,
  singleRelatedProdct,
  receiveProvince,
  receiveProductWithCategory,
  receiveProductWithBrand,
  receiveProductWithBanner,
  receiveCourier
//   sessionPersistance
});

export default rootReducers;
