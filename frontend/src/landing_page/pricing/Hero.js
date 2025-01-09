import React from 'react';

function Hero() {
    return (
      <div className='container ' style={{padding:"50px"}}>
        <div className='row text-center'>
          <h1 className=' mb-2 mt-3'style={{lineHeight:"1.25",fontSize:"2.75rem",color:"#424242"}} >Charges</h1>
          <p className='mt-2 mb-5 fs-5 text-muted' >List of all charges and taxes</p>
        </div>
        <div className='row text-center p-2 mt-5'>
                    <div className='col-4  mt-5' style={{color:"#424242"}}>
                    <img src='media\Images\pricing0.svg' alt='pricing0' style={{width:"80%"}} className='mb-2'/>
                    <h3>Free equity delivery</h3>
                    <p className='fs-6'> All equity delivery investments (NSE, BSE), are<br/> absolutely free — ₹ 0 brokerage.</p>
                    </div>
                    <div className='col-4 mt-5' style={{color:"#424242"}}>
                    <img src='media\Images\pricing20.svg' alt='pricing0' style={{width:"80%"}} className='mb-2'/>
                    <h3>Intraday and F&O trades</h3>
                    <p className='fs-6'>Flat ₹ 20 or 0.03% (whichever is lower) per<br/> executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                    </div>
                    <div className='col-4 mt-5' style={{color:"#424242"}}>
                    <img src='media\Images\pricing0.svg' alt='pricing0' style={{width:"80%"}} className='mb-2'/>
                    <h3>Free direct MF</h3>
                    <p className='fs-6'> All direct mutual fund investments are<br/> absolutely free — ₹ 0 commissions & DP <br/>charges.</p>
                    </div>


                 </div>
      </div>
      );
}

export default Hero;