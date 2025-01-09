import React from 'react';

function LeftSection({imageURL,productName,productDescription,tryDemo,learnMore,googlePlay,appStore}) {
    return ( 
        <div className='container mt-1 p-3'>
            <div className='row'>
                <div className='col-8 '>
                    <img src={imageURL} />
                    
                </div>
                <div className='col-4 mt-5 ' >
                <h1 className='mb-4 fs-2 mt-3' style={{color:"#424242"}}>{productName}</h1>
                    <p  className='mb-3 fs-5' style={{color:"#424242",lineHeight:"2rem"}}>{productDescription} </p>
                    <div className='mb-3 mt-4'>
                        <a href={tryDemo} className='mx-3  fs-6 text-decoration-none'>Try Demo<i class="fa-solid fa-arrow-right"></i></a>
                        <a href={learnMore} className='mx-3 fs-6 text-decoration-none'>Learn More<i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div className='mt-3'> 
                        <a href={googlePlay} className='mx-3 '>
                            <img src='media\Images\googlePlayBadge.svg'/>
                        </a>
                        <a href={appStore}>
                            <img src='media\Images\appstoreBadge.svg'/>
                        </a>
                    </div>
                </div>

            </div>
        </div>
     );
}

export default LeftSection;