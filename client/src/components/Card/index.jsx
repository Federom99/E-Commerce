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

const Card = ({ nombre, imagen, precio }) => {

    const formatPrice = new Intl.NumberFormat("es-AR").format(precio)
    return (
        <DIV>
            <ContainerImage>
                <Image src={imagen}/>
            </ContainerImage>
            <InfoContainer>
                <H2>{nombre}</H2>
                <div>
                    <PriceSize>
                        <Select>
                            <option>Talla</option>
                        </Select>
                        <P>$ {formatPrice}</P>
                    </PriceSize>
                    <Button>Add to card</Button>
                </div>
            </InfoContainer>
        </DIV>
    )
}

export default Card