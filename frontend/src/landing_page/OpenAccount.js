import React from 'react';
import {Link} from "react-router-dom";
function OpenAccount() {
    return ( 
        <div  className="container p-5 ">
            <div className='row text-center mb-5'>
                <h1 className='mt-5 ' style={{color:"#424242"}} >Open a Zerodha account</h1>
                <p className='mt-2 fs-5 text-muted' >Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <Link className="nav-link active p-2 btn btn-primary fs-5" style={{width:"20%", margin: "0 auto"}} aria-current="page" to="/signup" >
                Signup for Free
              </Link>
                {/* <button className='mt-4 btn btn-primary fs-5 ' style={{width:"18%", margin: "0 auto"}}> Sign up free</button> */}
            </div>

        
        </div>
     );
}

export default OpenAccount;