import React from 'react';
import'./Product.css';

const Product = (props) => {
    // console.log(props)
    const{name,img,forAge,timeRequired}=props.product;
    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <div className='product-info'>
            <h6 className='product-name'>{name}</h6>
            <p>For Age: {forAge}</p>
            <p>Time required : {timeRequired}</p>
            </div>
            <button onClick={()=>props.addToCart(props.product)} className='btn-cart'>
                <p className='btn-text'>Add to list</p>
                </button>
        </div>
        
    );
};

export default Product;