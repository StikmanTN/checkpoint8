import React from 'react';
import { useLocation } from 'react-router-dom';
const More = () => {
    const location = useLocation();
    return (
        <div className='container'> 
            <iframe className='row' width="80%" height ="600px" src={location.state.trailerUrl}> </iframe>
            <p className='row' style={{marginTop:"10px"}} >{location.state.description}</p>
        </div>
    );
}

export default More;
