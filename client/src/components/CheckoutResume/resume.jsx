import React from "react";
import { useState } from "react";
import estilos from "./resume.module.css";

function Resume({cart, envio}) {
    const [total, setTotal] = useState(sumaPrecios(cart));

    return (
        <div id={estilos.contenedorResumen}>
            <h1>Resumen de compra</h1>
                <div className={estilos.item}>
                    <span style={{textAlign: "center"}}>Producto</span>
                    <span style={{textAlign: "center"}}>Cantidad</span>
                    <span style={{textAlign: "center"}}>Precio</span>
                </div>
            {
                cart?.map((c, i) => {
                    c.nombre = c.nombre.trim();
                    return(
                        <div className={estilos.item}>
                            <span>{c.nombre + " - " + c.talle}</span>
                            <span style={{textAlign: "center"}}>{c.cantidad + " u."}</span>
                            <span style={{textAlign: "right"}}>{"$ " + Intl.NumberFormat("es-AR").format(c.precio)}</span>
                        </div>
                    )
                })
            }
            {envio === "Envio" && <div className={estilos.item}>
                            <span>Envío a domicilio</span>
                            <span style={{textAlign: "center"}}></span>
                            <span style={{textAlign: "right"}}>{"$ " + Intl.NumberFormat("es-AR").format(500)}</span>
                        </div>}
            <hr />
            <div className={estilos.item}>
                <span style={{textAlign: "left"}}>Total</span>
                <span style={{textAlign: "center"}}></span>
                {
                    envio === "Envio" ? <span style={{textAlign: "right"}}>{"$ " + Intl.NumberFormat("es-AR").format(total + 500)}</span>
                    : <span style={{textAlign: "right"}}>{"$ " + Intl.NumberFormat("es-AR").format(total)}</span>
                }
            </div>
        </div>
    );
}

export default Resume;

function sumaPrecios(cart){
    let total = 0; 
    cart.map((c) => {
        total += c.precio * c.cantidad;
    })
    console.log(total);
    return total;
}
