import React, {useEffect} from 'react'

import { connect } from 'react-redux';
import { getProducts } from '../actions/productActions';
import SingleProduct from '../components/singleProduct';
import Loading from '../components/layout/Loading';

const HomePage = ({product:{products, loading}, getProducts}) => {

    useEffect(()=>{
        getProducts();

        //eslint-disable-next-line
    }, [])

    
    return (
        loading || products === null ? 
        <Loading/> 
        : <div className='products'>
           {!loading && products===null ? (<p className='center'>No products to show...</p>):(products.map((product)=><SingleProduct 
            key={product._id}
            name={product.name}
            image={product.imageUrl}
            desc={product.description}
            price={product.price}
            productId={product._id}/>
           ))}
        </div> 
    )
}

const mapStateToProps = state=>({
    product:state.product
})
export default connect(mapStateToProps,{getProducts}) (HomePage)
