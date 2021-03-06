import axios from "axios";
import * as api from "../api/index.js";
export const getAllFoods = () => async (dispatch) => {
  try {
    const { data } = await api.fetchFoods();

    dispatch({ type: "GET_FOODS_REQ", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const filterFoods = (searchKey, category) => async (dispatch) => {
  var filterFoods;

  try {
    const response = await api.fetchFoods();
    searchKey = searchKey.toLowerCase();

    filterFoods = response.data.filter((food) => {
      const foodName = food.name.toLowerCase();
      if (foodName.includes(searchKey)) {
        return foodName;
      }
    });

    // if (filterFoods.length === 0){
    //   return;
    // }

    if (category != "all") {
      if (filterFoods.length === 0) {
        filterFoods = response.data;
      }
      filterFoods = filterFoods.filter((food) => food.category == category);
    }
    dispatch({ type: "GET_FOODS_REQ", payload: filterFoods });
  } catch (error) {
    console.log(error.message);
  }
};
export const addToCart =
  (food, quantity, variant) => async (dispatch, getState) => {
    try {
      var cartItems = {
        name: food.name,
        _id: food._id,
        image: food.image,
        variant: variant,
        quantity: Number(quantity),
        prices: food.prices,
        price: food.prices[0][variant] * quantity,
      };
      if (cartItems.quantity > 10) {
        alert("You can't order more than 10 quantities");
      } else {
        if (cartItems.quantity < 1) {
          dispatch({ type: "DELETE_FROM_CART", payload: food });
        } else {
          dispatch({ type: "ADD_TO_CART", payload: cartItems });
        }
      }
      const cartItem = getState().cartReducer.cartItems;
      localStorage.setItem("cartItems", JSON.stringify(cartItem));
    } catch (error) {
      console.log(error.message);
    }
  };
export const deleteFromCart = (food) => async (dispatch, getState) => {
  try {
    dispatch({ type: "DELETE_FROM_CART", payload: food });
    const cartItem = getState().cartReducer.cartItems;
    localStorage.setItem("cartItems", JSON.stringify(cartItem));
  } catch (error) {
    console.log(error.message);
  }
};
export const addItem = (item) => async (dispatch) => {
  try {
    const response = await axios({
      url: "/addfood",
      method: "POST",
      data: item,
    });
    dispatch({ type: "ADD_ITEM_SUCCESS" });
  } catch (error) {
    console.log(error.message);
  }
};
