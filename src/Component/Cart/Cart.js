import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import'./Cart.css';

const Cart = ({cart}) => {
    const diffToast=()=>{
        toast("Wow Your Activity Completed!");
    }
    let total=0;
    
    for(const product of cart){
        total=total + parseFloat(product.timeRequired);
        
    }
    return (
        <div className='cart'>
            <div className='img-info'>
                
                <div>
                    <h5>Rakib Islam </h5>
                    <p>Khulna, Bangladesh</p>
                </div>
               
            </div>
             {/* information  start*/}
                <div className='information'>
                    <div>
                        <h6>60kg <br />Weight</h6>
                        {/* <small>Weight</small> */}
                    </div><br/> <br/>
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

            {/* Add a Break Start */}
            <h6>Add A Break</h6>
                    <div className='btn'>
                    
                    <div className='rounded-circle'>10</div>
                    <div>20</div>
                    <div>30</div>
                    <div>40</div>
                    <div>50</div>
                    </div>

            {/* Add a Break End */}

                {/* <p>Exercise time: {cart.length}seconds</p> */}
                <h6>Exercise Details</h6>
                <p>Exercise time :{total} seconds</p>
                <p>Break time:{}</p>
                <button onClick={diffToast} className='btn-text'>Activity Completed</button>
                <ToastContainer />
                
        </div>
    );
};

export default Cart;