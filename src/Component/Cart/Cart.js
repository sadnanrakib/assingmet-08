import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import'./Cart.css';

const Cart = ({cart}) => {
    const[selectedNumber, setSelectedNumber]=useState(0);
console.log(selectedNumber);
    const selectNumber=(numberSelected)=>{
        setSelectedNumber(numberSelected.target.value);
    }
    const diffToast=()=>{
        toast("Wow Your Activity Completed!");
    }
    let total=0;
    
    for(const product of cart){
        total=total + parseFloat(product.timeRequired);
        
    }
    return (
        <div className='cart'>
                    
                <div>
                    <h5>Md. Hedaytul Islam </h5>
                    <p>Khulna, Bangladesh</p>
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
                    <div className='add-break'>
                    <button className='add-btn' onClick={selectNumber}value="10">10s</button>
                    <button className='add-btn' onClick={selectNumber}value="20">20s</button>
                    <button className='add-btn' onClick={selectNumber}value="30">30s</button>
                    <button className='add-btn' onClick={selectNumber}value="40">40s</button>
                    <button className='add-btn' onClick={selectNumber}value="50">50s</button>
                    </div>

            {/* Add a Break End */}

                {/* <p>Exercise time: {cart.length}seconds</p> */}
                <h6>Exercise Details</h6>
                <p className='exercise-time'>Exercise time : {total} seconds</p>
                <p className='break-time'>Break time: {selectedNumber} seconds</p>
                <button onClick={diffToast} className='btn-toast'>Activity Completed</button>
                <ToastContainer />
                
        </div>
    );
};

export default Cart;