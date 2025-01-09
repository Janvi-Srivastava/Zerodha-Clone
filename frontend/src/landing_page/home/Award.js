import React from 'react';

function Awards() {
    return ( 
        <div className='container'>
              <div className='row '>
                <div className='col-6 p-5'>
                    <img src='media\Images\largestBroker.svg' style={{maxWidth:"90%"}}/>
                </div>
                <div className='col-6 mt-4 p-5'>
                    <h2 className='mb-2'>Largest stock broker in India</h2>
                    <p >2+ million of Zerodha clients contribute to over 15% of all the retail order volumes in India daily by trading and inversting in:</p>
                   <div className='row mt-5 mb-3 mb-2'>
                   <div className='col-6'>
                        <ul>
                            <li >Futures and Options</li>
                            <li >Commodity & Derivatives</li>
                            <li >Currency Derivatives</li>
                        </ul>
                    </div>
                    <div className='col-6'>
                    <ul>
                            <li >Stocks and IPOs</li>
                            <li >Direct mutual funds </li>
                            <li >Bonds and govt. Securities</li>
                        </ul>
                    </div>
                   </div>

                   <img src='media\Images\pressLogos.png' alt="pressLogo" style={{width:"95%"}}/>
                </div>

            </div>
        </div>
        
     );
}

export default Awards;