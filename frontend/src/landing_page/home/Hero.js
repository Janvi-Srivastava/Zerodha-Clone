import React from 'react';

function Hero() {
    return ( 
        <div  className="container p-5 ">
            <div className='row text-center mb-5'>
                <img src='media/Images/homeHero.png' alt='HomeHero' className='mb-5 mt-2 p-3' style={{maxWidth:"70%", margin:"0 auto"}} />
                <h1 className='mt-5 ' style={{lineHeight:"1.25",fontSize:"2.75rem",color:"#424242"}} >Invest in everything</h1>
                <p className='mt-2 fs-5'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className='mt-4 btn btn-primary fs-5 ' style={{width:"18%", margin: "0 auto"}}> Signup for free</button>
            </div>

        
        </div>
     );
}

export default Hero;