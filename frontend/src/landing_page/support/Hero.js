import React from 'react';

function Hero() {
    return ( 
        <section className='container-fluid mb-5 p-5' id='SupportHero'>
            <div className='p-5' id="SupportWrapper">
                <h4>Support Portal</h4>
                <a href='' className='fs-6'>Track tickets</a>
            </div>
            <div className='row' id='SupportWrapper2'>
                <div className='col-7'>
                    <p className='fs-4 '>Search for an answer or browse help topics to create a ticket</p>
                    <input type='text'className='input mb-5' placeholder='Eg.how do I activate F&O, why is my order getting rejected...'></input><br/>
                    <a href=''className=' mb-5'>Track account opening</a>
                   <a href=''  className='mx-3 mb-4'>Track segment activation</a>
                    <a href='' className='mx-2 mb-4'>Intraday margins </a><br/>
                    <a href=''>Kite user manual</a>
                </div>
               
                <div className='col-5 '  >
                <p className='fs-4 '>Featured</p>
                <ol>
                    <li><a href=''>Non-business day for mutual funds on Wednesday, November 20, 2024</a></li>
                    <li><a href=''>MCX Option contracts expiry - November 2024</a></li>
                </ol>
                </div>
            </div>
        </section>
     );
}

export default Hero;