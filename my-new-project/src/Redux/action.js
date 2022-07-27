import axios from "axios";
import Cart from "../Components/cart";
import * as types from "./actionTypes";

export const get = (pro, params) => (dispatch) => {
  dispatch({ type: types.GET_PRO_REQUEST });
  axios
    .get(`https://fakestoreapi.com/products/category${pro}`, params)
    .then((r) => dispatch({ type: types.GET_PRO_SUCCESS, payload: r.data }))
    .cat((e) => dispatch({ type: types.GET_PRO_FAILURE }));
};

export const get1 = (params) => (dispatch) => {
  dispatch({ type: types.GET_PRO_REQUEST });
  axios
    .get(`/products`, params)
    .then((r) => dispatch({ type: types.GET_PRO_SUCCESS, payload: r.data }))
    .catch((e) => dispatch({ type: types.GET_PRO_FAILURE }));
};

 
export const addProductCartRequest = (payload) => {
  return {
    type: types.ADD_CART_REQUEST,
    payload,
  };
};

export const addProductCartSuccess = (payload) => {
  return {
    type: types.ADD_CART_SUCCESS,
    payload,
  };
};

export const addProductCartFailure = (payload) => {
  return {
    type: types.ADD_CART_FAILURE,
    payload,
  };
};
export const addcart = (product) => (dispatch) => {
  dispatch(addProductCartRequest());
  axios
    .post("https://my-project-fake.herokuapp.com/cart", product)
    .then((r) => dispatch(addProductCartSuccess(r.data)))

    .catch((e) => dispatch(addProductCartFailure(e.data)));
};

// export const getcart =(payload)  => (dispatch) => {
//     dispatch({type : types.GET_CART_FAILURE });
//     axios
//       .get("/cart")
//       .then((r) => dispatch({type : types.GET_CART_SUCCESS }))
  
//       .catch((e) => dispatch({type : types.GET_CART_FAILURE }))
//   };

const fetchCartRequest = (payload) => {
  return {
    type: types.GET_CART_REQUEST,
    payload,
  };
};

const fetchCartSuccess = (payload) => {
  return {
    type: types.GET_CART_SUCCESS,
    payload,
  };
};

const fetchCartFailure = (payload) => {
  return {
    type: types.GET_CART_SUCCESS,
    payload,
  };
};

export const fetchCart = (payload) => (dispatch) => {
  dispatch(fetchCartRequest());
  axios.get("/cart")
    .then((r) => dispatch(fetchCartSuccess(r.data)))
    .catch((e) => dispatch(fetchCartFailure(e.data)));
};



  const deleteProductCartRequest = (payload) => {
    return {
      type: types.REMOVE_PRODUCT_CART_REQUEST,
      payload,
    };
  };
  
  const deleteProductCartSuccess = () => {
    return {
      type: types.REMOVE_PRODUCT_CART_SUCCESS,
       
    };
  };
  
  const deleteProductCartFailure = (payload) => {
    return {
      type: types.REMOVE_PRODUCT_CART_FAILURE,
      payload,
    };
  };
  
//  export const deleteProductCart = (id) => (dispatch) => {
//     dispatch(deleteProductCartRequest());
//     axios.delete(`/cart/${id}`)
//       .then((r) => {
//         dispatch(deleteProductCartSuccess(id))
//       }) 
//       .catch((e) => dispatch(deleteProductCartFailure(e.data)));
//   };
  
export const deleteProductCart = (id) => (dispatch) => {
  dispatch(deleteProductCartRequest());
  axios.delete(`/cart/${id}`)
  .then((r) => {
    dispatch(deleteProductCartSuccess(r.data))
  }).then(() => dispatch(fetchCart()))
  
     
     
       
    
  .catch((e) => dispatch(deleteProductCartFailure(e.data)));
};
