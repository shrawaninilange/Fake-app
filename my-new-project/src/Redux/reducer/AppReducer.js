 import *as types from "../actionTypes"
const inital ={
    products:[],
   
    Loading : false,
    Error : false,
    cart:[]   
}


const reducer = (state = inital , action)=>{
    const {type ,payload} = action

    switch (type) {
        case types.GET_PRO_REQUEST :
            return {
            ...state,
            Loading :true,
            error : false

        }
        case types.GET_PRO_SUCCESS :
            return {
            ...state,
            products :payload,
            Loading :true,
            error : false

        }
        case types.GET_PRO_FAILURE :
            return {
            ...state,
            Loading :true,
            error : false

        }

        case types.ADD_CART_REQUEST:
            return {
              ...state,
              isLoading: true,
              isError: false,
            };
          case types.ADD_CART_SUCCESS:
            return {
              ...state,
              isLoading: false,
              isError: false,
              cart: [...state.cart, payload],
            };
          case types.GET_CART_FAILURE:
            return {
              ...state,
              isLoading: false,
              isError: true,
            };

            case types.GET_CART_REQUEST:
                return {
                  ...state,
                  isLoading: true,
                  isError: false,
                };
              case types.GET_CART_SUCCESS:
                return {
                  ...state,
                  isLoading: false,
                  isError: false,
                  cart: [ ...payload],
                };
              case types.ADD_CART_FAILURE:
                return {
                  ...state,
                  isLoading: false,
                  isError: true,
                };

                case types.REMOVE_PRODUCT_CART_REQUEST:
                  return {
                    ...state,
                    isLoading: true,
                  isError: false,
                  };
                  case types.REMOVE_PRODUCT_CART_FAILURE:
                  return {
                    ...state,
                    isLoading: false,
                  isError: true,
                  }

                  // case types.REMOVE_PRODUCT_CART_SUCCESS:
                  //   return {
                  //     ...state,
                  //     isLoading: false,
                  //   isError: true,
                  //   }
                  // case types.REMOVE_PRODUCT_CART_SUCCESS:
                  //   const updatedCart = state.cart.filter( prod => (
                  //     action.payload.id !== prod.id 
                  // ));
                  // return {
                  //     ...state,
                  //     cart: updatedCart
                  // }
                   
        

         default : return state
    }
}

export {reducer}