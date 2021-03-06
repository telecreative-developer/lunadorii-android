import { combineReducers } from "redux";

import { loading, success, failed, logged } from "./processor";
import { categoryproduct } from "./categoryproduct";
import { brandsproduct } from "./brandsproduct"
import { product, searchproduct,receiveSingleProductWithId, 
         relatedProduct, singleRelatedProdct, receiveProductWithCategory, 
         productbestseller, producthistory, productrecent,
         receiveProductWithBrand, receiveProductWithBanner, productWithoutId, receiveSingleProductHistory,
         receiveSingleProductRecent, } from "./product"
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
import { usercredit, manipulatecredit } from "./creditCard"
import { receiveCourier } from "./shipping"
import { receiveCheckout, receiveMessage } from './checkout'


const rootReducers = combineReducers({
  loading,
  logged,
  success,
  failed,
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
  usercredit,
  manipulatecredit,
  receiveSingleProductWithId,
  relatedProduct,
  singleRelatedProdct,
  receiveProvince,
  receiveProductWithCategory,
  receiveProductWithBrand,
  receiveProductWithBanner,
  receiveCourier,
  productWithoutId,
  receiveCheckout,
  receiveMessage,
  receiveSingleProductHistory,
  receiveSingleProductRecent
});

export default rootReducers;
