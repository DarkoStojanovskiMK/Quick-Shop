import { GET_PRODUCTS,SET_SINGLE_PRODUCT,PRODUCTS_ERROR, SET_LOADING} from "./types";

import axios from "axios";

export const getProducts = ()=>async dispatch=>{
    try {

        const products = await axios.get('/api/products');
        
        dispatch({type:GET_PRODUCTS, payload:products.data})
    } catch (err) {
        dispatch({type:PRODUCTS_ERROR, payload:err})
    }
    
}

export const setSingleProduct = (id)=> async dispatch=>{
    setLoading()
    const product = await axios.get(`/api/products/${id}`)
    dispatch({type:SET_SINGLE_PRODUCT, payload:product.data})
    
}



export const setLoading = ()=>{
    return ({type:SET_LOADING})
}
