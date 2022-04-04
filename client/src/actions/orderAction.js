import axios from "axios"
export const placeOrder = (token , SubTotal) => async (dispatch,getState) => {
    dispatch({type : 'PLACE_ORDER_REQUEST'})
    const currentUser = getState().loginUserReducer.currentUser;
    const cartItems = getState().cartReducer.cartItems;
    try {
        const response = await axios.post('/orders/placeorder' , {token , SubTotal ,currentUser , cartItems});
        dispatch({type : 'PLACE_ORDER_SUCCESS'})
    } catch (error) {
        dispatch({type : 'PLACE_ORDER_FAILED'})
        console.log(error);
    }
}
export const getUserOrders = () => async (dispatch , getState) => {
    const currentUser = getState().loginUserReducer.currentUser
    dispatch({ type: 'GET_USERS_ORDERS_REQUEST'});
    try {
      const response = await axios.post('/orders/getuserorders',{userid : currentUser._id})
      dispatch({ type: 'GET_USERS_ORDERS_SUCCESS', payload: response.data });
    } catch (error) {
      console.log(error.message);
    }
  };