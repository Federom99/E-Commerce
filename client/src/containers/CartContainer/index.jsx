import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Header from "../../components/Cart/Header";
import OrderList from "../../components/Cart/List";
import Pricing from "../../components/Cart/Pricing";
import { List , Li } from "./styles";

export default function ShoppingCart (){
const shoppingCart = useSelector(store=>store.shoppingCart);
    return (
    <div>
        {
            shoppingCart.length ? 
            (
                <List>
                    <Li>
                        <Header amount={shoppingCart.length}/>
                    </Li>
                    <Li>
                        <OrderList shoppingCart={shoppingCart}/>
                    </Li>
                    <Li>
                        <Pricing />
                    </Li>
                </List>
            ) : 
            (
                <h1>No hay items en su carrito</h1>
            )
        }
        
        
    </div>
    )
}