import React from 'react';
import'./Cart.css';

const Cart = ({cart}) => {
    return (
        <div>
            <div className='img-info'>
                <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fwaterfront&psig=AOvVaw0GaAinuXCVzguoVup1E-_V&ust=1664500010349000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCJDhrPXnuPoCFQAAAAAdAAAAABAD.jpg" alt="" />
                <div>
                    <h6>Rakib Islam </h6>
                    <p>Sydney, Australia</p>
                </div>
                </div>
                <p>Exercise time: {cart.length}seconds</p>
        </div>
    );
};

export default Cart;