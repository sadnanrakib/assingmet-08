import React, {useState, useEffect } from 'react';
import Product from '../Product/Product';
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
                <div className='img-info'>
                <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fwaterfront&psig=AOvVaw0GaAinuXCVzguoVup1E-_V&ust=1664500010349000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCJDhrPXnuPoCFQAAAAAdAAAAABAD.jpg" alt="" />
                <div>
                    <h6>Rakib Islam</h6>
                    <p>Sydney, Australia</p>
                </div>
                </div>
                <p>Exercise time: {cart.length}seconds</p>
            </div>
        </div>
        
    );
};

export default Fitness;