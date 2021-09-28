
const initialState = {
    cartNr:[]
}

const cartReducer = (state=initialState, action)=>{
    switch(action.type){
        case 'CART_NUMBER':
        
        const product = action.payload;
        const existProduct = state.cartNr.find((item)=>item.id===product.id)

        if(existProduct){
            return {
                ...state,
                cartNr:state.cartNr.map((item)=>item.id===existProduct.id ? product : item )
            }
        }else{
                localStorage.setItem('cart',JSON.stringify([...state.cartNr, action.payload]) )
             return {
                ...state,
                cartNr:[...state.cartNr, action.payload]
            }
        }
        case 'REMOVE_PRODUCT':
            const removeFromLS = state.cartNr.filter((item)=>item.id!==action.payload)
             localStorage.setItem('cart',JSON.stringify(removeFromLS) )
            return {
                ...state,
                cartNr:state.cartNr.filter((item)=>item.id!==action.payload)
            }
        
        default:
            return state
    }
}

export default cartReducer;