import React from 'react';
import Moviecard from './Moviecard.js'

const Moviedisplay = ( {Cards} ) => {
    return (
        <div className='row'>
            {
                Cards.map ((e , key) => (
                    <Moviecard movie = {e} key = {key} />
                )) 
            }
        </div>
    );
}

export default Moviedisplay;
