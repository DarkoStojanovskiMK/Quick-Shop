import React from 'react'
import { Link } from 'react-router-dom'



const singleProduct = ({name, image, desc, price, productId}) => {
    return (
        <div className='singleProduct'>
            <div>
                <img src={image} alt={name} />
            </div>
            <div>
                <h4>{name}</h4>
                <p>{desc.substring(0,100)}...</p>
            </div>
            
            <h4>${price}</h4>
            <Link to={`/product/${productId}`}>
                <button className='product-btn'>View</button>
            </Link>

        </div>
    )
}

export default singleProduct
