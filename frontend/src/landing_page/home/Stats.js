import React from 'react';

function Stats() {
    return ( 
        <div className='container  mb-5 p-3'>
            <div className='row '>
                <div className='col-5 mt-5 p-5'>
                    <h2 className='mb-5 fs-2' style={{color:"#424242"}}>Trust with confidence</h2>
                    <h4 className='fs-4'>Customer-first always</h4>
                    <p className='fs-6 text-muted' >That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                    <h4 className='fs-4'>No spam or gimmicks</h4>
                    <p className='fs-6  text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    <h4 className='fs-4'>The Zerodha universe</h4>
                    <p className='fs-6  text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h4 className='fs-4'>Do better with money</h4>
                    <p className='fs-6  text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money</p>
                   
                </div>
                <div className='col-7 p-5 mt-3'>
                 <img src='media\Images\ecosystem.png' alt='ecosystem' className="p-4 mt-4" style={{width:"90%"}}/>
                 <div className='text-center'>
                 <a href='' className='mx-5 text-decoration-none'>Explore our products <i class="fa-solid fa-arrow-right"></i></a>
                 <a href=''  className='text-decoration-none'>Try Kite demo  <i class="fa-solid fa-arrow-right"></i></a>
                 </div>
                </div>
                <img src='media\Images\pressLogos.png' alt='pressLogo' style={{margin:"0 auto",maxWidth:"58%"}}   />
            </div>
        </div>
     );
}

export default Stats;