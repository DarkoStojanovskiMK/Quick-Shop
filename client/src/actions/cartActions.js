import axios from "axios"


export const cartNumbers = (qty,id)=> async dispatch=>{
     
    const item = await axios.get(`/api/products/${id}`)
    const {data} = item;
    

    dispatch({type:'CART_NUMBER', payload:{
        id:data._id,
        name:data.name,
        inStock:data.countInStock,
        image:data.imageUrl,
        price:data.price,
        desc:data.description,
        qty,
        

    }})
}

export const removeProduct = (id)=>async dispatch=>{

    
    dispatch({type:'REMOVE_PRODUCT', payload:id})
    
}


