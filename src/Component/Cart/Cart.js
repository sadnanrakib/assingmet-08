import React from 'react';
import'./Cart.css';

const Cart = ({cart}) => {
    let total=0;
    for(const product of cart){
        total=total + parseFloat(product.timeRequired);
        
    }
    return (
        <div className='cart'>
            <div className='img-info'>
                <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fwaterfront&psig=AOvVaw0GaAinuXCVzguoVup1E-_V&ust=1664500010349000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCJDhrPXnuPoCFQAAAAAdAAAAABAD.jpg" alt="" />
                <div>
                    <h6>Rakib Islam </h6>
                    <p>Sydney, Australia</p>
                </div>
               
            </div>
             {/* information  start*/}
                <div className='information'>
                    <div>
                        <h6>60kg <br />Weight</h6>
                        {/* <small>Weight</small> */}
                    </div>
                    <div>
                        <h6>5.6 <br />Height</h6>
                        {/* <small>Height</small> */}
                    </div>
                    <div>
                        <h6>23years <br />Age</h6>
                        {/* <small>Age</small> */}
                    </div>
                </div>
            {/* information End */}

                <p>Exercise time: {cart.length}seconds</p>
                <h6>Exercise Details</h6>
                <p>Exercise time :{total}seconds</p>
                <p>Break time:{}</p>
                <button className='btn-text'>Activity Completed</button>
                
        </div>
    );
};

export default Cart;