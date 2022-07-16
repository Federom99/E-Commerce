import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Main,
  Div,
  InfoContainer,
  H2,
} from "./styles";
import estilos from "./CheckoutSuccess.module.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { crearPedido } from "../../redux/actions/checkout";

const CheckoutSuccess = () => {
    const dispatch = useDispatch();
    const productoCreado = false;
    let {search} = useLocation();
    let query;
    let datosDePago;
    if(search){
        query = queryString.parse(search);
        console.log(query);
        datosDePago = {
            nroOperacion: query.payment_id,
            estado: "",
            medioDePago: ""
        }
        switch(query.status){
            case "approved": datosDePago.estado = "Aprobado"; break;
            case "rejected": datosDePago.estado = "Rechazado"; break;
            default: datosDePago.estado = "Rechazado";
        }
        switch(query.payment_type){
            case "credit_card": datosDePago.medioDePago = "Tarjeta de crédito"; break;
            case "debit_card": datosDePago.medioDePago = "Tarjeta de débito"; break;
            default: datosDePago.medioDePago = "Otro";
        }
    }

    return(
        <Main>
            <Div>
                <div id={estilos.contenedorDatos}>
                    <H2>Checkout</H2>
                    <br />
                    <ul id={estilos.lista}>
                        <li className={estilos.itemLista}>
                            <span className={estilos.items}>Nro. de operacion: </span>
                            <span className={estilos.items}>{datosDePago.nroOperacion}</span>
                        </li>
                        <li className={estilos.itemLista}>
                            <span className={estilos.items}>Estado: </span>
                            <span className={estilos.items}>{datosDePago.estado}</span>
                        </li>
                        <li className={estilos.itemLista}>
                            <span className={estilos.items}>Método de pago: </span>
                            <span className={estilos.items}>{datosDePago.medioDePago}</span>
                        </li>
                    </ul>
                    <br />
                </div>        
            </Div>
        </Main>
    );
};

export default CheckoutSuccess;