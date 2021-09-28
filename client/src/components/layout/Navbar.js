import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Navbar = ({cart:{cartNr},click}) => {

   
    const getCartCount = () => {
        const nr = cartNr.reduce((qty, item) => Number(item.qty) + qty, 0);
        
    return nr;
        
    };
    
    

    
    return (
        <nav className='navbar'>
            <Link to='/' className='nav-logo'>
                <h4>Quick Shop</h4>
            </Link>
            
            <ul>
                <li className='navbarCart'>
                    <Link to='/cart'>
                        <i className='fas fa-shopping-cart'></i>
                         Cart
                        <span>{getCartCount()}</span>
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        Shop
                    </Link>
                </li>
            </ul>
            <div className='hamburger-menu' onClick={click}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
}

const mapStateToProps = state=>({
    cart:state.cart
})
export default connect(mapStateToProps,{}) (Navbar)
 