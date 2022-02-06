import React , {useState} from 'react';
import { Modal ,ModalBody,
    ModalHeader,
    ModalFooter,
    Button,
    InputGroup,
    Label,
    Input, } from 'reactstrap';
     const Insert = ({add , show , toggle}) => {
    const [newMovie , setNewMovie] = useState ({
        title: "",
    posterUrl : "",
    description: ``,
    rate: 0,
    });
    const onChangeHandler = (e) =>    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
    const ajout = (e) => {
        e.preventDefault () ; 
        add (newMovie)
    };

    return (
        <div className='Container-fluid'>
            <Modal isOpen = {show} toggle={toggle}>
               <ModalBody>
                   <InputGroup row>
                            <Label className='col-3'>
                                Title :
                            </Label>
                            <Input type='text' name='title' placeholder = "Movie titele" onChange={onChangeHandler}/>
                   </InputGroup>
                   <InputGroup row>
                            <Label className='col-3'>
                            posterUrl :
                            </Label>
                            <Input type='text' name='posterUrl' placeholder = "Movie titele" onChange={onChangeHandler}/>
                   </InputGroup>
                   <InputGroup row>
                            <Label className='col-3'>
                            description :
                            </Label>
                            <Input type='text' name='description' placeholder = "Movie titele" onChange={onChangeHandler}/>
                   </InputGroup>
                   <InputGroup row>
                            <Label className='col-3'>
                            rate :
                            </Label>
                            <Input type='text' name='rate' placeholder = "Movie titele" onChange={onChangeHandler}/>
                   </InputGroup>
               </ModalBody>
               
               <Button style={{height :"40px" ,width :"60px", marginLeft:"40%"}} onClick={(e)=>{ ajout (e) ; toggle()} }>Add</Button>
               
            </Modal>
        </div>
    );
}

export default Insert;
