import React from 'react'

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
                <Button>Add to card</Button>
            </div>
        </InfoContainer>
    </DIV>
  )
}

export default Card