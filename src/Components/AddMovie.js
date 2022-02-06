import React , {useState} from 'react';
import { Button } from 'react-bootstrap';
import Image  from './addmovie.png';
import Insert from './Insert';
const Addmovie = ({add}) => {
    const [show , setShow] = useState (false) ;
    const reverse = () => setShow(!show) 
    return (
        <div>
            <img src={Image} style={ { cursor : "pointer"}} onClick={() => setShow(true)  }/>
            {
                show && (
                    <Insert add = {add} show = {show} toggle = {reverse} />
                )
            }
        </div>
    );
}

export default Addmovie;
