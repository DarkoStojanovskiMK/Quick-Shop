import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


const SideDrawer = ({cart:{cartNr}, show, click}) => {

    const getCartCount = () => {
        const nr = cartNr.reduce((qty, item) => Number(item.qty) + qty, 0);
        
    return nr;
        
    };
    return (
        show && <div className='sidedrawer' >
             <ul className='sidedrawerCart'>
                <li >
                    <Link to='/cart' onClick={click}>
                        <i className='fas fa-shopping-cart'></i>
                         Cart
                        <span>{getCartCount()}</span>
                    </Link>
                </li>
                <li>
                    <Link to='/' onClick={click}>
                        Shop
                    </Link>
                </li>
            </ul>
            
        </div>
    )
}
const mapStateToProps = state =>({
    cart:state.cart
})
export default connect(mapStateToProps,{}) (SideDrawer)
