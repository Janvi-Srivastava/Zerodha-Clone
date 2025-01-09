import React from 'react';

function Hero() {
    return ( 
       <div className='container '>
        <div className='row text-center'>
            <h1 className='mt-5 ' style={{lineHeight:"1.25",fontSize:"2.75rem",color:"#424242"}} >Zerodha Products</h1>
            <p className='mt-2 text-muted' style={{lineHeight:"1.20",fontSize:"1.27rem",color:"#424242"}}>Sleek, modern, and intuitive trading platforms</p>
            <p className='mt-2 ' style={{fontSize:"1.1rem"}}>Check out our <a href='' className='text-decoration-none'>investment offerings <i class="fa-solid fa-arrow-right"></i></a></p>
               
        </div>
       </div>
     );
}

export default Hero;