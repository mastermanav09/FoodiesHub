export const getAllFoodsReducer =  (foods = [] , action) =>{
    switch(action.type)
    {
        case "GET_FOODS_REQ":
            return action.payload;
            default:
                return foods;
    }
}
export const addItemReducer =  ( state = {}, action) =>{
    switch(action.type)
    {
        case "ADD_ITEM_SUCCESS":
            return {
                success : true
            }
            default:
                return state;
    }
}