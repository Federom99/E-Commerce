import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Main,
  Div,
  InfoContainer,
  H2,
} from "./styles";
import estilos from "./checkout.module.css";
import useScript from "./useScript";
import { useState } from "react";
import {checkout, guardarDatosComprador} from "../../redux/actions/checkout"

const Checkout = () => {
    const [input, setInput] = useState({nombre: "", apellido: "", documento: "", direccion: "", codigoPostal: "", provincia: ""});
    const [errores, setErrores] = useState({nombre: "", apellido: "", documento: "", direccion: "", codigoPostal: "", provincia: ""});
    const [botonBloqueado, setBotonBloqueado] = useState("disabled");
    const carrito = useSelector(state => state.cart.order);

    //----------------------------MERCADOPAGO----------------------------------------
    const { MercadoPago } = useScript( "https://sdk.mercadopago.com/js/v2", "MercadoPago");
    const pago = useSelector((state) => state.checkout.checkout);
    const dispatch = useDispatch();

    function onClickHandler(e){
        e.preventDefault();
        dispatch(checkout({carrito, datos:input}));
        dispatch(guardarDatosComprador(input))
    }

    useEffect(() => {
        if(pago.id && MercadoPago){
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
    },[pago, MercadoPago]);
     //----------------------------FIN--MERCADOPAGO--------------------------------------

     console.log(pago);

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
                <InfoContainer>
                    <H2>Checkout</H2>
                    <form id={estilos.formulario}>
                        <br />
                        <div className={estilos.inputYLabel}>
                            <label>Nombre</label>
                            <div>
                                <input name="nombre" type="text" className={errores.nombre ? estilos.inputDatosError : estilos.inputDatos}
                                onChange={onChangeHandler} value={input.nombre}></input>
                                {errores.nombre ? (<p className={estilos.indicador}>{errores.nombre}</p>) : (<p className={estilos.i}>a</p>)}
                            </div>
                        </div>
                        <div className={estilos.inputYLabel}>
                            <label>Apellido</label>
                            <div>
                                <input name="apellido" type="text" className={errores.apellido ? estilos.inputDatosError : estilos.inputDatos}
                                onChange={onChangeHandler} value={input.apellido}></input>
                                 {errores.apellido ? (<p className={estilos.indicador}>{errores.apellido}</p>) : (<p className={estilos.i}>a</p>)}
                            </div>
                        </div>
                        <div className={estilos.inputYLabel}>
                            <label>DNI</label>
                            <div>
                                <input name="documento" type="number" className={errores.documento ? estilos.inputDatosError : estilos.inputDatos}
                                onChange={onChangeHandler} value={input.documento}></input>
                                 {errores.documento ? (<p className={estilos.indicador}>{errores.documento}</p>) : (<p className={estilos.i}>a</p>)}
                            </div>
                        </div>
                        <div className={estilos.inputYLabel}>
                            <label>Direccion</label>
                            <div>
                                <input name="direccion" type="text" className={errores.direccion ? estilos.inputDatosError : estilos.inputDatos}
                                onChange={onChangeHandler} value={input.direccion}></input>
                                 {errores.direccion ? (<p className={estilos.indicador}>{errores.direccion}</p>) : (<p className={estilos.i}>a</p>)}
                            </div>
                        </div>
                        <div className={estilos.inputYLabel}>
                            <label>Codigo Postal</label>
                            <div>
                                <input name="codigoPostal" type="text" className={errores.codigoPostal ? estilos.inputDatosError : estilos.inputDatos}
                                onChange={onChangeHandler} value={input.codigoPostal}></input>
                                 {errores.codigoPostal ? (<p className={estilos.indicador}>{errores.codigoPostal}</p>) : (<p className={estilos.i}>a</p>)}
                            </div>
                        </div>
                        <div className={estilos.inputYLabel}>
                            <label>Provincia</label>
                            <div>
                                <input name="provincia" type="text" className={errores.provincia ? estilos.inputDatosError : estilos.inputDatos}
                                onChange={onChangeHandler} value={input.provincia}></input>
                                 {errores.provincia ? (<p className={estilos.indicador}>{errores.provincia}</p>) : (<p className={estilos.i}>a</p>)}
                            </div>
                        </div>
                        <button id={botonBloqueado !== "disabled" ? estilos.boton : estilos.botonBloqueado} type="button"
                         onClick={onClickHandler}>Continuar</button>     
                        <br />
                    </form>
                        <div id="button-checkout" className={estilos.pagar}></div>                   
                </InfoContainer>
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

export default Checkout;