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
import {checkout, crearPedido, getAllSucursales, guardarDatosComprador} from "../../redux/actions/checkout";
import Mapa from "../../components/Mapa/Mapa";
import Resume from "../../components/CheckoutResume/resume";
import { deleteCart } from "../../redux/actions/cart";
import { clearLocalStorage } from "../../redux/actions/cart";
import Swal from "sweetalert2"

const Checkout = () => {
    const [input, setInput] = useState({nombre: "", apellido: "", documento: "", direccion: "", codigoPostal: "", provincia: ""});
    const [errores, setErrores] = useState({nombre: "", apellido: "", documento: "", direccion: "", codigoPostal: "", provincia: ""});
    const [botonBloqueado, setBotonBloqueado] = useState("disabled");
    const [formBloqueado, setFormBloqueado] = useState("");
    const carrito = useSelector(state => state.cart.shoppingCart);
    const { user: currentUser } = useSelector((state) => state.auth);
    const sucursales = useSelector(state => state.checkout.sucursales);
    const [envio, setEnvio] = useState("");
    const [inputEnvio, setInputEnvio] = useState({direccion: "", codigoPostal: "", provincia: "", tipo:""});
    const [erroresEnvio, setErroresEnvio] = useState({direccion: "", codigoPostal: "", provincia: ""});
    //----------------------------MERCADOPAGO----------------------------------------
    const { MercadoPago } = useScript( "https://sdk.mercadopago.com/js/v2", "MercadoPago");
    const pago = useSelector((state) => state.checkout.checkout);
    const pedidoGenerado = useSelector(state => state.checkout.pedido);
    const dispatch = useDispatch();

    async function onClickHandler(e){
        e.preventDefault();
        const comprador = {
            ...input,
            direccion: inputEnvio.direccion,
            codigoPostal: inputEnvio.codigoPostal,
            provincia: inputEnvio.provincia,
            tipoDeEnvio: inputEnvio.tipo
        }
        const pedido = {
            "productos": crearProductosPedido(carrito),
            "comprador": comprador,
        }
        // console.log(pedido);
        let disPedido = await dispatch(crearPedido(pedido));
    }

    document.title = "Pro Ropa - Checkout";

    useEffect(() => {
        // console.log(pedidoGenerado);
        if(pedidoGenerado.hasOwnProperty("pedido")) {
            const items = JSON.parse(JSON.stringify(carrito));
            if(envio === "Envio") items.push({nombre: "Envío a domicilio", precio:500, cantidad: 1,
            descripcion: "Envio a domicilio", imagen: "a", talle: "Sin talle"})
            dispatch(checkout({items, datos:input, pedidoGenerado}));
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
        if(pedidoGenerado.hasOwnProperty("Error")){
            Swal.fire({
                type: 'error',
                title: 'Ups...',
                text: 'Ha ocurrido un error',
                footer: pedidoGenerado.Error,
                didClose: () => { dispatch(deleteCart()); dispatch(clearLocalStorage()); window.location.replace("/cart") }
              });
        }
    },[pedidoGenerado])

    useEffect(() => {
        dispatch(getAllSucursales());
        if(currentUser){
            const {name, lastName, dni, address} = currentUser;
            setInput({nombre: name, apellido: lastName, documento: dni, direccion: address, codigoPostal: "", provincia: ""})
        }
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
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
                theme: {
                    elementsColor: '#000000',
                    headerColor: '#ffffff',
                }
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
                }else if(erroresEnvio.direccion || erroresEnvio.codigoPostal || erroresEnvio.provincia){
                    setBotonBloqueado("disabled");
                }else setBotonBloqueado("");
            if(!inputEnvio.direccion || !inputEnvio.codigoPostal || !inputEnvio.provincia){
                    setBotonBloqueado("disabled");
            }
            if(!input.nombre || !input.apellido || !input.documento || !input.direccion || !input.codigoPostal
                || !input.provincia){
                    setBotonBloqueado("disabled");
            }
        }, [errores, input, inputEnvio, erroresEnvio]
    )

     function onChangeHandler(e){
        setInput( {...input, [e.target.name]:e.target.value});
        setErrores(validar({name: e.target.name, value: e.target.value}, errores));
     }

     function onChangeHandlerEnvio(e){
        setInputEnvio( {...inputEnvio, [e.target.name]:e.target.value, tipo: "Envío"});
        setErroresEnvio(validar({name: e.target.name, value: e.target.value}, erroresEnvio));
     }

     function radioChangeHandler(e){
        setEnvio(e.target.value);
        setInputEnvio({direccion: "", codigoPostal: "", provincia: "", tipo:e.target.value})
        // console.log(e.target.value);
     }

     function selectSucursal(sucursal){
        setInputEnvio({direccion: sucursal.capital, codigoPostal: sucursal.cp, provincia: sucursal.nombre, tipo: "Retiro"})
     }

    return(
        <Main>
            <Div>
                {carrito.length ? (<>
                <Resume cart={carrito} envio={envio}/>
                <div className={estilos.formularioContainer}>
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
                                    type="button">{!pago.id ? "Crear pedido" : "..."}</button>
                                )
                            }   
                        </ul>
                    </form>
                    <form onSubmit={mpSubmitHandler} style={{display: "flex"}}>
                        <div id="button-checkout" className={estilos.pagar}></div> 
                    </form>
                    <br />
                </div>
                {/* <div style={{borderLeft:"1px solid #000", height:"500px"}}></div> */}
                <div className={estilos.formularioContainer}>
                    <H2>Datos de entrega</H2>
                    <ul id={estilos.lista}>
                        <li className={estilos.itemsLista}>
                            <div style={{display: "flex", flexDirection:"row"}}>
                                <label className={estilos.rbLabel}>
                                <input className={estilos.radio} type="radio" name="tipoEnvio" value="Retiro" onChange={radioChangeHandler}/>
                                    <span style={{marginLeft: "1rem"}}>Retiro en punto de entrega</span>
                                    </label>
                            </div>
                            <div>
                                <label className={estilos.rbLabel}>
                                <input className={estilos.radio} type="radio" name="tipoEnvio" value="Envio" onChange={radioChangeHandler}/>
                                    <span style={{marginLeft: "1rem"}}>Envío a domicilio</span>
                                </label>
                            </div>
                            <div>
                                {
                                    envio === "Envio" && 
                                        <label><br />Costo de envío: $500<br /><br /></label>
                                }{
                                    inputEnvio.direccion && envio === "Retiro" ? 
                                    <label><br />Retiro a partir de 5 días hábiles - Punto de retiro: {inputEnvio.direccion}</label>
                                    : envio === "Retiro" &&
                                    <label><br />Retiro a partir de 5 días hábiles<br /></label>
                                }
                            </div>
                        </li>
                        {
                            envio === "Envio" &&
                            <>
                                <li className={estilos.itemsLista}>
                                <label>Direccion</label>
                                <div>
                                    <input name="direccion" type="text" className={erroresEnvio.direccion ? estilos.inputDatosError : estilos.inputDatos}
                                    onChange={onChangeHandlerEnvio} value={inputEnvio.direccion}
                                    disabled={formBloqueado === "disabled" ? "disabled" : ""}></input>
                                        {erroresEnvio.direccion ? (<p className={estilos.indicador}>{erroresEnvio.direccion}</p>) : (<p className={estilos.i}>a</p>)}
                                </div>                        
                                </li>
                                <li className={estilos.itemsLista}>
                                    <label>Codigo Postal</label>
                                    <div>
                                        <input name="codigoPostal" type="text" className={erroresEnvio.codigoPostal ? estilos.inputDatosError : estilos.inputDatos}
                                        onChange={onChangeHandlerEnvio} value={inputEnvio.codigoPostal}
                                        disabled={formBloqueado === "disabled" ? "disabled" : ""}></input>
                                            {erroresEnvio.codigoPostal ? (<p className={estilos.indicador}>{erroresEnvio.codigoPostal}</p>) : (<p className={estilos.i}>a</p>)}
                                    </div>                        
                                </li>
                                <li className={estilos.itemsLista}>
                                    <label>Provincia</label>
                                    <div>
                                        <input name="provincia" type="text" className={erroresEnvio.provincia ? estilos.inputDatosError : estilos.inputDatos}
                                        onChange={onChangeHandlerEnvio} value={inputEnvio.provincia}
                                        disabled={formBloqueado === "disabled" ? "disabled" : ""}></input>
                                            {erroresEnvio.provincia ? (<p className={estilos.indicador}>{erroresEnvio.provincia}</p>) : (<p className={estilos.i}>a</p>)}
                                    </div>                        
                                </li>
                            </>
                        }
                        {
                            envio === "Retiro" &&
                            <Mapa sucursales={sucursales} selectSucursal={selectSucursal}/>
                        }
                    </ul>
                </div>
            </>) : (<H2 style={{margin: "auto", marginTop:"3rem", marginBottom:"3rem", fontSize:"1.5rem"}}>No hay items en su carrito</H2>)}
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
            if(!/[0-9]/.test(input.value) && /[a-z]/.test(input.value)) errores[input.name] = "Código postal inválido";
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