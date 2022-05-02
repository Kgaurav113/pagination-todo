// use axios for api call
import axios from "axios";
import {

  FILTER_DATA,
  GET_PRODUCT,

  SORT_DATA,
} from "../Redux/actionTypes";

function getProductsData(dispatch) {
  dispatch(fetch());
  axios
    .get("https://movie-fake-server.herokuapp.com/products")
    .then((res) =>
      dispatch({
        type: GET_PRODUCT,
        payload: res.data,
      })
    )
    
}


const sortProducts = (payload) => ({
  type: SORT_DATA,
  payload,
});

const filterProducts = (payload) => ({
  type: FILTER_DATA,
  payload,
});

export { getProductsData, sortProducts, filterProducts };