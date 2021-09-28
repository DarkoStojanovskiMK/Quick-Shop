import React from 'react'
import { connect } from 'react-redux'
import { cartNumbers } from '../../actions/cartActions'
import { removeProduct } from '../../actions/cartActions'




const SingleCartProduct = ({item:{name, image,inStock, qty, price,id},cartNumbers,removeProduct}) => {
    return (
        
            <div className='SingleCartProduct'>
                <div className='SingleCartImgName'>
                    <div>
                        <img src={image} alt={name} />
                    </div>
                    <div>
                        <h4>{name}</h4>
                    
                    </div>
                </div>
                
                <div className='SingleCartProductOptions'>
                    <div>
                        <h4>${price}</h4>
                    </div>
                    <div>
                        <select value={qty}
                            onChange={(e)=>cartNumbers(e.target.value, id)}
                        >
                            {[...Array(inStock).keys()].map((item)=>(
                            <option key={item+1} value={item+1}>{item+1}</option>))}
                        </select>
                    </div>
                    
                    <div onClick={()=>removeProduct(id)}>
                        <i className='fas fa-trash'></i>
                    </div>
                </div>
                
                
            </div>
            
        
    )
}

export default connect(null, {cartNumbers, removeProduct}) (SingleCartProduct)
