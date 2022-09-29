import React, {useState, useEffect } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import Question from '../Qusetion/Question';
import'./Fitness.css';

const Fitness = () => {
    const [products,setProduct]=useState([]);
    const [cart,setCart]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])
    const addToCart=(product)=>{
        console.log(product);
        const newCart=[...cart,product]
        setCart(newCart)
    }
    return (
        <div>
       
        <div className='product-container'>
            <div className='gym-container'>
                {
                    products.map(product=><Product 
                        key={product.id}
                        product={product}
                        addToCart={addToCart}
                        ></Product>)
                }
                
                
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
        <Question></Question>
        </div>
        
        
    );
};

export default Fitness;