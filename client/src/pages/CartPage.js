import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

import SingleCartProduct from '../components/singleProduct/SingleCartProduct';




const CartPage = ({cart:{cartNr}}) => {

    const getCartCount = () => {
        const nr = cartNr.reduce((qty, item) => Number(item.qty) + qty, 0);
        
    return nr;
        
    };

    const getTotalSum = ()=>{
       return cartNr.reduce((sum, item)=>sum+item.price*item.qty,0)
    }
    
    return (
        <div className='SingleCart'>
            
                
            <div>
                    
                    {cartNr.map((item)=>{
                        
                        return (<SingleCartProduct key={item.id} item={item}/>)
                })}
            </div>
            
            
            <div className='product SingleCartProductSubtotal'>
                <div>
                    <h3>Subtotal <span>({getCartCount()}) items</span></h3>
                    <p>${getTotalSum()}</p>
                </div>
                <Link to='/'>
                    <button>Proceed To Checkout</button>
                </Link>

            </div>
        </div>
    )
}

const mapStateToProps = state=>({
    cart:state.cart
})
export default connect (mapStateToProps, {})(CartPage)
