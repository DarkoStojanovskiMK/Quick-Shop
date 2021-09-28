import { PRODUCTS_ERROR, GET_PRODUCTS,SET_LOADING, SET_SINGLE_PRODUCT } from "../actions/types";
const initialState = {
    products:null,
    loading:false,
    error:null,
    singleProduct:null,
    localStorage:null
}

const productsReducer =(state=initialState, action)=>{
    switch(action.type){
        case GET_PRODUCTS:
            
            
            return {
                ...state,
                products:action.payload,
                loading:false,
                
            }
        case SET_SINGLE_PRODUCT:
            
            return{
                ...state,
                singleProduct: state.products.filter((product)=>product._id===action.payload._id),
                loading:false
            }
        case PRODUCTS_ERROR:
            return {
                ...state,
                error:action.payload,
                loading:false
            }
        case SET_LOADING:
            return{
                ...state,
                loading:true
            }
        default:
            return state;
    }
} 

export default productsReducer;