export const initialState = {
  cart: [],
  // searchData: "",
};

export const getCartTotal = (cart) =>
  cart?.reduce((amount, item) => item.netPrice + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    case "REMOVE":
      const index = state.cart.findIndex(
        (cartItem) => cartItem.title === action.title
      );
      let newCart = [...state.cart];

      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        alert("something error");
      }
      return {
        ...state,
        cart: newCart,
      };
    // case "FILTER_SEARCH_DATA":
    //   return {
    //     searchData: state.searchData,
    //   };

    default:
      return state;
  }
};

export default reducer;
