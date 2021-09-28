import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux';
import Loading from '../components/layout/Loading';
import { setSingleProduct } from '../actions/productActions';
import { getProducts } from '../actions/productActions';
import { cartNumbers } from '../actions/cartActions';


const ProductPage = ({product:{singleProduct, loading}, match,history, setSingleProduct, getProducts, cartNumbers}) => {

    const [qty, setQty] = useState(1)

    const changeHandler = (e)=>{
        setQty(e.target.value)
    }

    const productPrice = ()=>{
      return  singleProduct[0].price*qty
    }
    
    const submitHandler = ()=>{
         cartNumbers(qty,singleProduct[0]._id )
        history.push('/cart')
    }
    
    useEffect(()=>{
        getProducts()
        // eslint-disable-next-line
    },[])
    useEffect(()=>{
        setSingleProduct(match.params.id)
        // eslint-disable-next-line
    },[])
    

    return (
        loading || singleProduct === null ? <Loading/> :
        <div className='productContainer'>
            <div className='product '>
                <img src={singleProduct[0].imageUrl} alt={singleProduct[0].name} />
            </div>
            <div className='product'>
                <h4>{singleProduct[0].name}</h4>
                <hr />
                <span>Price: ${singleProduct[0].price}</span>
                <hr />
                <p>{singleProduct[0].description}</p>
                
            </div>
            <div className='productToCart'>
                <h4>Price: ${productPrice()}</h4>
                <hr />
                <span>Quantity: </span><select value={qty} onChange={changeHandler}>
                   {[...Array(singleProduct[0].countInStock).keys()].map((item)=>(
                       <option key={item+1} value={item+1}>{item+1}</option>
                   )
                       
                   )}
                </select>
                <hr />
                <p>In Stock: {singleProduct[0].countInStock}</p>
                <button onClick={submitHandler}>Add To Cart</button>
            </div>
            
            
        </div>
    )
}
const mapStateToProps = state=>({
    product:state.product
})
export default connect(mapStateToProps, {setSingleProduct, getProducts, cartNumbers}) (ProductPage)
