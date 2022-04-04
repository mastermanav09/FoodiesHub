import { combineReducers } from "redux";
import { getAllFoodsReducer } from "./getAllFoodsReducer.js";
import { cartReducer } from "./cartReducer.js";
import { registerUserReducer } from "./userReducer.js";
import { loginUserReducer } from "./userReducer.js";
import { placeOrderReducer } from "./orderReducer.js";
import { getUserOrdersReducer } from "./orderReducer.js";
import { addItemReducer } from "./getAllFoodsReducer.js";
const finalReducer = combineReducers({
    getAllFoodsReducer,cartReducer,registerUserReducer,loginUserReducer,placeOrderReducer,getUserOrdersReducer,
    addItemReducer
})
export default finalReducer;