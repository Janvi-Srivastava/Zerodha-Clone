import React from 'react';

function Pricing() {
    return ( 
        <div className='container mb-5'>
            <div className='row'>
            <div className='col-6 mt-2'>
                <h1 style={{color:"#424242"}}>Unbeatable pricing</h1>
                <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                <a href='' className=' text-decoration-none'>See pricing <i class="fa-solid fa-arrow-right"></i></a>
            </div>
            
            <div className='col-6 '>
                <div className='row text-center p-1 '>
                    <div className='col-4  border'>
                    <img src='media\Images\pricing0.svg' alt='pricing0' style={{width:"60%"}} className='mb-2'/>
                    <p className='fs-6'> Free equity delivery<br/>and direct mutual funds</p>
               
                    </div>
                    <div className='col-4 border'>
                    <img src='media\Images\pricing0.svg' alt='pricing0' style={{width:"60%"}} className='mb-2'/>
                    <p className='fs-6'>   Free account<br/>opening</p>
                    </div>
                    <div className='col-4 border'>
                    <img src='media\Images\pricing20.svg' alt='pricing0' style={{width:"60%"}} className='mb-2'/>
                    <p className='fs-6'>  Intraday and<br/>F&O</p>
                    </div>


                 </div>
                
                
               
                
               
            </div>
            </div>
        </div>
     );
}

export default Pricing;