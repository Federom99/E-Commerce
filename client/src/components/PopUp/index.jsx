import { useState } from "react"
import { MainDiv , Div , Header , Main , Detail , Options , Button , List , Li , Img , Close , IncDiv } from "./styles"


export default function AddPopUp ({ listPrice , close }){
let [amount , setAmount] = useState(1)
const [price , setPrice] = useState(listPrice)  //Pasaria precio por props

const incAmount = ()=>{
    setAmount(amount+1)
    setPrice((amount+1)*listPrice)
}
const decAmount = ()=>{
    if (amount>1) {
        setAmount(amount-1)
        setPrice((amount-1)*listPrice)
    }
}
const addMore = ()=>{
    //dispatch al carrito para añadir mas
}
return(
    <MainDiv>
        <Header>
            <h2>Item añadido al carrito</h2><Close onClick={close}>x</Close>
        </Header>
        <Main>
            <Img src="https://static.bershka.net/4/photos2/2022/V/0/1/p/0156/168/800/0156168800_2_4_1.jpg?t=1648213728518" alt="item name"/>
            <Detail>
                <List>
                    <Li>Pantalon wide leg con bolsillos</Li>
                    <Li>Descripcion</Li>
                    <Li>Talle: XL L M S </Li>
                    <Li>Rating o estrellas</Li>
                </List>
            </Detail>
            <Options>
                <List>
                    <Li>
                        <div>
                            <p> Se añadió el item al carrito</p>
                        {/* { amount>1 ? <p>Se añadieron {amount} items al carrito</p> : <p> Se añadió {amount} item al carrito</p> } */}
                        </div>
                    </Li>
                    <Li>
                        <h3>
                        Subtotal: $ {listPrice} USD
                        </h3>
                    </Li>
                    <Li>
                        <Div>
                            <h3>Desea añadir más?</h3>
                            <IncDiv>                            
                                <button onClick={incAmount}>+</button><p>{amount}</p><button onClick={decAmount}>-</button>
                            </IncDiv>
                            <h4>Se añadirán {amount} prendas</h4>
                            <h4>Subtotal: $ {listPrice + price} USD</h4>
                            <button>Añadir</button>
                        </Div>
                    </Li>
                    <Li>
                        <Button>Ir al carrito</Button>
                    </Li>
                    <Li>
                        <h4 onClick={close}>Seguir comprando</h4>
                    </Li>
                    <Li>
                        <h4>Cancelar</h4>
                    </Li>
                </List>
                
                
                
            </Options>
        </Main>
    </MainDiv>
)
}