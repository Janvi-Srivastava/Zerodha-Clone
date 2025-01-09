import React from 'react';

function RightSection({imageURL, productName, productDescription, learnMore}) {
    return ( 
        <div className='conatiner mt-5 p-3' style={{marginLeft:"100px"}}>
            <div className='row'>
                <div className='col-4 p-5 mt-5' >
                <h1 className='mb-4 fs-2 ' style={{color:"#424242"}}>{productName}</h1>
                    <p  className='mb-3 fs-5' style={{color:"#424242",lineHeight:"2rem"}}>{productDescription} </p>
                    <div className='mb-3 mt-4'>
                        <a href={learnMore} className='  fs-6 text-decoration-none'>Learn More<i class="fa-solid fa-arrow-right"></i></a>
                        
                    </div>
                   
                </div>
                <div className='col-8 text-center'>
                <img src={imageURL} />
                </div>
            </div>
        </div>
     );
}

export default RightSection;