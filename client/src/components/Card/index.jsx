import React, { useState } from 'react'
import Popup from 'reactjs-popup';
import AddPopUp from '../PopUp';

import { 
    DIV, 
    ContainerImage, 
    Image, 
    InfoContainer,
    PriceSize,
    Button,
    H2,
    ExtraInfo,
    Select,
    P
} from './styles'

const Card = () => {
    const [open , setOpen ] = useState(false);

    const closeModal = ()=>setOpen(false);
    
    const add = () =>{
        //dispatch al carrito
        setOpen(isOpen=>!isOpen)
    }
  return (
    <DIV>
        <ContainerImage>
            <Image src='https://static.bershka.net/4/photos2/2022/V/0/1/p/0156/168/800/0156168800_2_4_1.jpg?t=1648213728518'/>
        </ContainerImage>
        <InfoContainer>
            <H2>Pantalón wide leg bolsillos</H2>
            <div>
                <PriceSize>
                    <Select>
                        <option>Talla</option>
                    </Select>
                    <P>$ 35.00 USD</P>
                </PriceSize>
                <Button onClick={add}>Add to card</Button>
                <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                    <AddPopUp listPrice={35} close={closeModal}/>
                </Popup>
            </div>
        </InfoContainer>
    </DIV>
  )
}

export default Card