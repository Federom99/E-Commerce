import axios from "axios";
import {
  ADD_CART,
  DELETE_CART,
  MODIFY_CART,
  PRICE_CART,
  PRICE_REMOVE_CART,
  REMOVE_CART,
  REMOVE_LOCAL_CART,
  SET_LOCAL_CART,
} from "./actionTypes";

export const addToCart = (order) => {
  return {
    type: ADD_CART,
    payload: order,
  };
};


export const modifyCart = (details) => {
  return {
    type: MODIFY_CART,
    payload: details,
  };
};

export const removeCart = (id, size) => {
  return {
    type: REMOVE_CART,
    payload: {
      id,
      size,
    },
  };
};

export const addOrder = (order) => {
  return {
    type: PRICE_CART,
    payload: order,
  };
};

export const removeOrder = (id, talle) => {
  return {
    type: PRICE_REMOVE_CART,
    payload: {
      id,
      size: talle,
    },
  };
};
export const setLocalStorage = (data) => {
  let item = JSON.parse(localStorage.getItem("cart"));
  if (!item) {
    localStorage.setItem("cart", JSON.stringify(data));
  } else {
    item.shoppingCart = data.shoppingCart;
    item.cartRemainingStock=data.cartRemainingStock;
    // item.order = data.order;
    localStorage.setItem("cart", JSON.stringify(item));
  }

  return {
    type: 'SET_LOCAL_CART',    
  }
}
export const clearLocalStorage = ()=>{
  localStorage.removeItem("cart")
  return{
    type: "REMOVE_LOCAL_CART"
  }
}

export const deleteCart = () => {
  // console.log("deleteeeeedddd");
  return{
    type: DELETE_CART
  }
}

export const setItemStock = (id, talle)=> async dispatch =>{
  const product = await axios.get(`http://localhost:3001/product/${id}`)
  let stock = 0;
   if (talle === 'Sin talle'){
    stock = product.data.talles[0].producto_talle.stock  
   } else{
    const index = product.data.talles.findIndex(p=>p.talle === talle)
    stock = product.data.talles[index].producto_talle.stock
   }
   dispatch({
    type: 'SET_ITEM_STOCK',
    payload: {
      id,
      talle,
      stock: (stock-1)
    }
 })   
}
export const modifyItemStock = (id,talle,amount=1)=>{
  return {
    type: "MODIFY_ITEM_STOCK",
    payload: {
      id,
      talle,
      amount,
    },
  };
}
export const resetItemStock = (id,talle)=>{
  return{
    type: 'RESET_ITEM_STOCK',
    payload: {
      id,
      talle,
    }

  }
}
