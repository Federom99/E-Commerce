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
import { useLocation, useParams } from "react-router-dom";
import queryString from "query-string";
import { aprobarPedido, crearPedido, getFactura } from "../../redux/actions/checkout";
import { deleteCart } from "../../redux/actions/cart";
import checkoutResume from "../../components/CheckoutResume/resume"

const CheckoutSuccess = () => {
    const dispatch = useDispatch();
    const pedido = useSelector(state => state.checkout.pedido);
    const { user: currentUser } = useSelector((state) => state.auth);
    const productoCreado = false;
    let {search} = useLocation();
    let {idPedido} = useParams();
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
    
    const {datosFactura} = pedido;

    useEffect(() => {
        dispatch(getFactura(idPedido));
        dispatch(aprobarPedido({idPedido, nroOperacion: datosDePago.nroOperacion, 
            estado: datosDePago.estado, mail: currentUser.email}));
        dispatch(deleteCart());
    },[]);
    
    document.title = "Pro Ropa - Pago "+datosDePago.estado;
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });

    return(
        <Main>
            <Div>
                <div id={estilos.contenedorDatos}>
                    <H2>Datos del pedido</H2>
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
                            <span className={estilos.items}>Total de productos: </span>
                            <span className={estilos.items}>${Intl.NumberFormat("es-AR").format(pedido.pago_total)}</span>
                        </li>
                        <li className={estilos.itemLista}>
                            <span className={estilos.items}>Método de pago: </span>
                            <span className={estilos.items}>{datosDePago.medioDePago}</span>
                        </li>
                        <li className={estilos.itemLista}>
                            <span className={estilos.items}>Nombre: </span>
                            <span className={estilos.items}>{datosFactura?.nombre+" "+datosFactura?.apellido}</span>
                        </li>
                        <li className={estilos.itemLista}>
                            <span className={estilos.items}>Mail: </span>
                            <span className={estilos.items}>{datosFactura?.mail}</span>
                        </li>
                        <li className={estilos.itemLista}>
                            <span className={estilos.items}>DNI: </span>
                            <span className={estilos.items}>{datosFactura?.dni}</span>
                        </li>
                        <li className={estilos.itemLista}>
                            <span className={estilos.items}>Dirección: </span>
                            <span className={estilos.items}>{datosFactura?.direccion}</span>
                        </li>
                    </ul>
                    <br />
                </div>
                {
                pedido?.datosFactura && datosDePago?.estado === "Aprobado" &&
                <div id={estilos.contenedorDatos}>
                    <H2>Datos de envío</H2>
                    <br />
                    <ul id={estilos.lista}>
                        <li className={estilos.itemLista}>
                            <span className={estilos.items}>Tipo: </span>
                            <span className={estilos.items}>{pedido?.tipo_de_envio === "Envio" ? "Envío a domicilio"
                                : "Retiro en punto de entrega"}</span>
                        </li>
                        <li className={estilos.itemLista}>
                            <span className={estilos.items}>Direccion: </span>
                            <span className={estilos.items}>{pedido?.direccion_de_envio.direccion}</span>
                        </li>
                        <li className={estilos.itemLista}>
                            <span className={estilos.items}>Código Postal: </span>
                            <span className={estilos.items}>{pedido?.direccion_de_envio.CP}</span>
                        </li>
                        <li className={estilos.itemLista}>
                            <span className={estilos.items}>Tiempo de retiro: </span>
                            <span className={estilos.items}>A partir de 5 días hábiles</span>
                        </li>
                    </ul>
                    <br />
                </div>
                }
            </Div>
        </Main>
    );
};

export default CheckoutSuccess;