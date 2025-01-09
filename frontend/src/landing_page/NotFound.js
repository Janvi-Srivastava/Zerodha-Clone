import React from 'react';
import { Link } from 'react-router-dom';
function NotFoundPage() {
    return ( 
        <div  className="container p-5 ">
            <div className='row text-center mb-5'>
                <h1 className='mt-5 ' style={{color:"#424242"}} >404 <br/>Kiaan couldn’t find that page</h1>
                <p className='mt-2 fs-5 text-muted' >We couldn’t find the page you were looking for. Visit <Link to="/" style={{textDecoration:"none"}}> Zerodha’s home page</Link></p>
            </div>

        
        </div>
     );
}

export default NotFoundPage;