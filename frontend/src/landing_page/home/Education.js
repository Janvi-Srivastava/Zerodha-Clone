import React from 'react';

function Education() {
    return ( 
        <div className='container mt-2 mb-5'>
            <div className='row'>
                <div className='col-6'>
                <img src='media\Images\education.svg' alt='education' style={{width:"80%"}}/>
                </div>
                <div className='col-6 mt-5'>
                    <h2 className='mb-5 fs-2' style={{color:"#424242"}}>Free and open market education</h2>
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='' className=' text-decoration-none'>Varsity <i class="fa-solid fa-arrow-right"></i></a>
                    <p className='mt-3'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href='' className=' text-decoration-none'>TradingQ&A <i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
     );
}

export default Education;