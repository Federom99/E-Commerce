import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Main,
  Div,
  H2,
} from "./styles";
import estilos from "./checkout.module.css";
import useScript from "./useScript";
import { useState } from "react";
import {checkout, crearPedido, guardarDatosComprador} from "../../redux/actions/checkout";

const Checkout = () => {
    const [input, setInput] = useState({nombre: "", apellido: "", documento: "", direccion: "", codigoPostal: "", provincia: ""});
    const [errores, setErrores] = useState({nombre: "", apellido: "", documento: "", direccion: "", codigoPostal: "", provincia: ""});
    const [botonBloqueado, setBotonBloqueado] = useState("disabled");
    const [formBloqueado, setFormBloqueado] = useState("");
    const carrito = useSelector(state => state.cart.shoppingCart);
    const { user: currentUser } = useSelector((state) => state.auth);
    //----------------------------MERCADOPAGO----------------------------------------
    const { MercadoPago } = useScript( "https://sdk.mercadopago.com/js/v2", "MercadoPago");
    const pago = useSelector((state) => state.checkout.checkout);
    const pedidoGenerado = useSelector(state => state.checkout.pedido);
    const dispatch = useDispatch();

    async function onClickHandler(e){
        e.preventDefault();
        const pedido = {
            "productos": crearProductosPedido(carrito),
            "comprador": input,
        }
        let disPedido = await dispatch(crearPedido(pedido));
    }

    useEffect(() => {
        // console.log(pedidoGenerado);
        if(pedidoGenerado.hasOwnProperty("pedido")) {
            dispatch(checkout({carrito, datos:input, pedidoGenerado}));
            const factura = {
                "nombre": input.nombre,
                "apellido": input.apellido,
                "telefono": currentUser.phone,
                "mail": currentUser.email,
                "direccion": input.direccion,
                "dni": input.documento,
                "idPedido": pedidoGenerado.pedido.id
            }
            dispatch(guardarDatosComprador(factura));
        }
    },[pedidoGenerado])

    useEffect(() => {
        if(currentUser){
            const {name, lastName, dni, address} = currentUser;
            setInput({nombre: name, apellido: lastName, documento: dni, direccion: address, codigoPostal: "", provincia: ""})
        }
    },[])

    useEffect(() => {
        // console.log(pago);
        const btn = document.getElementsByClassName("mercadopago-button");
        // console.log(btn);
        if(btn[0]){
            for(let b of btn){
                b.parentNode.removeChild(b);
            }
        }
        if(pago.id && MercadoPago && botonBloqueado !== "disabled"){
            setBotonBloqueado("disabled");
            setFormBloqueado("disabled");
            const mp = new MercadoPago("APP_USR-06027043-b2a5-4576-ac25-217e1bbfc148", {
                locale: "es-AR",
            })
            mp.checkout({
                preference: {
                    id: pago.id,
                },
                render: {
                    container: "#button-checkout", // Indica el nombre de la clase donde se mostrará el botón de pago
                    label: "Pagar", // Cambia el texto del botón de pago (opcional)
                },
                })
        }
    },[pago]);
     //----------------------------FIN--MERCADOPAGO--------------------------------------

     async function mpSubmitHandler(e){
        e.preventDefault();
     }

    //  console.log(carrito);
    //  console.log(currentUser);

     useEffect(
        () => {
            if(errores.nombre || errores.apellido || errores.documento || errores.direccion || errores.codigoPostal
            || errores.provincia){
                setBotonBloqueado("disabled");
            }else setBotonBloqueado("");
            if(!input.nombre || !input.apellido || !input.documento || !input.direccion || !input.codigoPostal
                || !input.provincia){
                    setBotonBloqueado("disabled");
            }
        }, [errores, input]
    )

     function onChangeHandler(e){
        setInput( {...input, [e.target.name]:e.target.value});
        setErrores(validar({name: e.target.name, value: e.target.value}, errores));
     }

    return(
        <Main>
            <Div>
                <div id={estilos.formularioContainer}>
                    {carrito.length ? (<>
                    <H2>Datos de facturacion</H2>
                    <form id={estilos.formulario}>  
                        <ul id={estilos.lista}>
                            <li className={estilos.itemsLista}>
                                    <label>Nombre</label>
                                    <div>
                                        <input name="nombre" type="text" className={errores.nombre ? estilos.inputDatosError : estilos.inputDatos}
                                        onChange={onChangeHandler} value={input.nombre}
                                        disabled={formBloqueado === "disabled" ? "disabled" : ""}></input>
                                        {errores.nombre ? (<p className={estilos.indicador}>{errores.nombre}</p>) : (<p className={estilos.i}>a</p>)}
                                    </div>
                            </li>
                            <li className={estilos.itemsLista}>
                                <label>Apellido</label>
                                <div>
                                    <input name="apellido" type="text" className={errores.apellido ? estilos.inputDatosError : estilos.inputDatos}
                                    onChange={onChangeHandler} value={input.apellido}
                                    disabled={formBloqueado === "disabled" ? "disabled" : ""}></input>
                                    {errores.apellido ? (<p className={estilos.indicador}>{errores.apellido}</p>) : (<p className={estilos.i}>a</p>)}
                                </div>
                            </li>
                            <li className={estilos.itemsLista}>
                                <label>DNI</label>
                                <div>
                                    <input name="documento" type="number" className={errores.documento ? estilos.inputDatosError : estilos.inputDatos}
                                    onChange={onChangeHandler} value={input.documento}
                                    disabled={formBloqueado === "disabled" ? "disabled" : ""}></input>
                                        {errores.documento ? (<p className={estilos.indicador}>{errores.documento}</p>) : (<p className={estilos.i}>a</p>)}
                                </div>                        
                            </li>
                            <li className={estilos.itemsLista}>
                                <label>Direccion</label>
                                <div>
                                    <input name="direccion" type="text" className={errores.direccion ? estilos.inputDatosError : estilos.inputDatos}
                                    onChange={onChangeHandler} value={input.direccion}
                                    disabled={formBloqueado === "disabled" ? "disabled" : ""}></input>
                                        {errores.direccion ? (<p className={estilos.indicador}>{errores.direccion}</p>) : (<p className={estilos.i}>a</p>)}
                                </div>                        
                            </li>
                            <li className={estilos.itemsLista}>
                                <label>Codigo Postal</label>
                                <div>
                                    <input name="codigoPostal" type="text" className={errores.codigoPostal ? estilos.inputDatosError : estilos.inputDatos}
                                    onChange={onChangeHandler} value={input.codigoPostal}
                                    disabled={formBloqueado === "disabled" ? "disabled" : ""}></input>
                                        {errores.codigoPostal ? (<p className={estilos.indicador}>{errores.codigoPostal}</p>) : (<p className={estilos.i}>a</p>)}
                                </div>                        
                            </li>
                            <li className={estilos.itemsLista}>
                                <label>Provincia</label>
                                <div>
                                    <input name="provincia" type="text" className={errores.provincia ? estilos.inputDatosError : estilos.inputDatos}
                                    onChange={onChangeHandler} value={input.provincia}
                                    disabled={formBloqueado === "disabled" ? "disabled" : ""}></input>
                                        {errores.provincia ? (<p className={estilos.indicador}>{errores.provincia}</p>) : (<p className={estilos.i}>a</p>)}
                                </div>                        
                            </li>
                            {
                                botonBloqueado !== "disabled" ? 
                                (
                                    <button id={estilos.boton} type="button"
                                        onClick={onClickHandler}>Continuar</button>
                                ) : (
                                    <button id={estilos.botonBloqueado} 
                                    type="button">Crear pedido</button>
                                )
                            }   
                        </ul>
                    </form>
                    <form onSubmit={mpSubmitHandler} style={{display: "flex"}}>
                        <div id="button-checkout" className={estilos.pagar}></div> 
                    </form>
                    <br />
                    </>) : (<H2 style={{marginTop:"1rem"}}>No hay items en su carrito</H2>)}
                </div>
            </Div>
        </Main>
    );
};

export function validar(input, errores){
    if(errores[input.name]) errores[input.name] = "";
    switch(input.name){
        case "nombre":
            if(!input.value.length) errores[input.name] = "Requerido";
            else errores[input.name] = "";
            if(/[0-9]/.test(input.value)) errores[input.name] = "Nombre invalido";
            if(/[@$?¡\-_]/.test(input.value)) errores[input.name] = "Nombre invalido";
            break;
        case "apellido":
            if(!input.value.length) errores[input.name] = "Requerido";
            else errores[input.name] = "";
            if(/[0-9]/.test(input.value)) errores[input.name] = "Apellido invalido";
            if(/[@$?¡\-_]/.test(input.value)) errores[input.name] = "Apellido invalido";
            break;
        case "documento":
            if(!input.value.length) errores[input.name] = "Requerido";
            else errores[input.name] = "";
            if(!/[0-9]/.test(input.value) || input.value < 1111111) errores[input.name] = "Documento invalido";
            break;
        case "direccion":
            if(!input.value.length) errores[input.name] = "Requerido";
            else errores[input.name] = "";
            if(!/[0-9]/.test(input.value) || !/[a-z]/.test(input.value)) errores[input.name] = "Direccion invalida";
            break;
        case "codigoPostal":
            if(!input.value.length) errores[input.name] = "Requerido";
            else errores[input.name] = "";
            break;
        case "provincia":
            if(!input.value.length) errores[input.name] = "Requerido";
            else errores[input.name] = "";
            if(/[0-9]/.test(input.value)) errores[input.name] = "Provincia invalida";
            if(/[@$?¡\-_]/.test(input.value)) errores[input.name] = "Provincia invalida";
            break;
        default: return errores;
    }
    return errores;
}

function crearProductosPedido(carrito) {
    let productos = [];
    if(carrito){
        carrito.map((c) => {
            productos.push({
                "productId": c.id,
                "talle": c.talle,
                "cantidad": c.cantidad
            });
        })
    }
    return productos;
}

export default Checkout;